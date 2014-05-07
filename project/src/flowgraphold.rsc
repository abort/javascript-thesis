module flowgraph

import EcmaScript;
import SharedDataTypes;
import FlowGraphDataTypes;
import IO;
import String;
import ParseTree;
import Set;
import List;
import Relation;
import Exception;
import Node;
import Map;
import util::Maybe;
import Logger;
import FlowGraphNativeImporter;

// TODO clean up
// TODO stop storing trees but store node positions?

private int NO_PARAMETER = -1;

// Entries are needed to know if certain entries in the symbol map are overridable
private data SymbolMapEntry = entry(Position position, bool overridable, int parameter);
private SymbolMapEntry createEntry(Position position) = entry(position, false, NO_PARAMETER);
private SymbolMapEntry createEntry(Tree tree) = entry(getNodePosition(tree), false, NO_PARAMETER);
private SymbolMapEntry createParamEntry(Position position, int argnum) = entry(position, false, argnum); 
private SymbolMapEntry createOverridableEntry(Position position) = entry(position, true, NO_PARAMETER);
private SymbolMapEntry createOverridableEntry(Tree tree) = createOverridableEntry(getNodePosition(tree));

public rel[Vertex, Vertex] createFlowGraphWithNativeFunctions(rel[Vertex, Vertex] nativeGraph, Source root) = nativeGraph + createFlowGraph(root);
public rel[Vertex, Vertex] createFlowGraphWithNativeFunctions(loc nativeGraphLocation, Source root) = createFlowGraphWithNativeFunctions(createFlowGraphFromFunctionList(nativeGraphLocation), root);

public rel[Vertex, Vertex] createFlowGraph(Source root) = createFlowGraphFromGlobalStatements(root);

// Does not affect the scoping so we discard the returned symbol map
private rel[Vertex, Vertex] createFlowGraphFromGlobalStatements(Tree root) = graph(createFlowGraphFromStatements(root, (), true, nothing()));

private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromNestedStatements(Tree root, map[str, SymbolMapEntry] symbolMap, Maybe[Position] enclosingFunction) = createFlowGraphFromStatements(root, symbolMap, false, enclosingFunction);
private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromStatements(Tree root, map[str, SymbolMapEntry] symbolMap, bool globalScope, Maybe[Position] enclosingFunction) {
	rel[Vertex, Vertex] result = {};

	// Visits all top-level statements
	top-down-break visit (root) {
		case FunctionDeclaration f:{
			// functions symbol map: old symbol map (with overriding permission + parameters + name)
			map[str, SymbolMapEntry] newSymbolMap = getOverridableSymbolMap(symbolMap);
			newSymbolMap["<f.name>"] = createOverridableEntry(f);
			newSymbolMap["this"] = createParamEntry(getNodePosition(f), 0);
			int argnum = 1;
			for (p <- f.parameters) {
				newSymbolMap["<p>"] = createParamEntry(getNodePosition(f), argnum);
				argnum += 1;	
			}

//			debug("visiting function declaration <f.name> with scope: <domain(newSymbolMap)>");

			// In non-global scope, the symbol map gets appended
			if (!globalScope) symbolMap["<f.name>"] = createEntry(f);

			// R7
			result += graph(createFlowGraphFromNestedStatements(f.implementation, newSymbolMap, just(getNodePosition(f))));
			result += <Fun(getNodePosition(f)), Var("<f.name>", getNodePosition(f))>; // get node position f instead of f.name?
			// result += createVertex("<p>" : createEntry(p) | p <- f.parameters)
			
		}
		case Statement s:{
//			debug ("visiting statement <s> with symbolMap <domain(symbolMap)>");

			if (globalScope) result += createFlowGraphFromGlobalStatement(s);
			else {
				// Retrieve a correctly scoped graph
				visitStatementResult = createFlowGraphFromNestedStatement(s, symbolMap, enclosingFunction); 
	
				// Sadly enough the symbol map is appended by the sibblings :)
				result += graph(visitStatementResult);
				symbolMap += modifiedSymbolMap(visitStatementResult);
			}
		}
	}

	return <result, symbolMap>;
}

private rel[Vertex, Vertex] createFlowGraphFromSubExpressions(Tree root, map[str, SymbolMapEntry] symbolMap, Maybe[Position] enclosingFunction) {
	rel[Vertex, Vertex] result = {};

	// Visit top level expressions that are children of statements
	// Expressions will recurse themselves
	try {
		top-down-break visit(root.args) {
			case Statement s:{
				// Do not include the input item (in case its a statement, for convenience).... we need its children, hence why
//				debug("we dont need expressions of statements just yet (due to statements being recursive), so we stop at the branch over here (halt recursion) @ <s>");
				;
			}
			case Expression e:{	
				//if (e == root) fail; // makes sure the top statement doesnt get visited in some way 
				result += createFlowGraphFromExpression(e, symbolMap, enclosingFunction);
			}
		}
	}
	catch: return result;

	return result;
}

// Global scope boolean as parameter helps for not appending the symbol map and thus creating wrong vertices
private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromNestedStatement(Statement s, map[str, SymbolMapEntry] symbolMap, Maybe[Position] enclosingFunction) = createFlowGraphFromStatement(s, symbolMap, false, enclosingFunction);
private rel[Vertex, Vertex] createFlowGraphFromGlobalStatement(Statement s) {
	tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] _] result = createFlowGraphFromStatement(s, (), true, nothing());
	return result.graph;
}

private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromStatement(Statement s, map[str, SymbolMapEntry] symbolMap, bool globalScope, Maybe[Position] enclosingFunction) {
	rel[Vertex, Vertex] result = {};
	bool missed = false;
	if (forDoDeclarations({VariableDeclarationNoIn ","}+ declarations, _, _, _) := s || variableNoSemi({VariableDeclaration ","}+ declarations, _) := s
		 || variableSemi({VariableDeclaration ","}+ declarations) := s) {
		for (declaration <- declarations) {
//			debug("declaration: <declaration>");
			// This only works on assigned variables (not on just declared ones)
			// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
			if (filledDeclaration(Id id, Expression expression) := declaration) {
				// Variables can not be redeclared in the same scope
				if (!globalScope && isDeclarable("<id>", symbolMap)) 
					symbolMap["<id>"] = createEntry(id);
				Vertex rhsVertex = createVertex(expression, symbolMap, enclosingFunction);
				result += <rhsVertex, createVertex(id, symbolMap, enclosingFunction)>;	// Does not occur in the provided script but we assume it to be the same as a declaration + expression R1
				result += <rhsVertex, Exp(getNodePosition(declaration))>;
				result += createFlowGraphFromExpression(expression, symbolMap, enclosingFunction);
//				debug("variable declaration for <id> (assigned to: <expression>)");
			}
			
			// Add to symbol map
			if (emptyDeclaration(Id id) := declaration) {
//				debug("empty declaration for <id>");
				// Variables can not be redeclared in the same scope
				if (!globalScope && isDeclarable("<id>", symbolMap)) symbolMap["<id>"] = createEntry(id);
			}
		}
	}
	elseif (forInDeclaration(Id id, Expression e, Statement _) := s) {
		// Assumption to count as a simple declaration (so not R1, TODO: DOCUMENT!)
		if (!globalScope && isDeclarable("<id>", symbolMap)) symbolMap["<id>"] = createEntry(id);
		Vertex rhsVertex = createVertex(e, symbolMap, enclosingFunction);
		result += createFlowGraphFromExpression(e, symbolMap, enclosingFunction);		
	}
	// R10
	elseif (returnExp(Expression e) := s || returnExpNoSemi(Expression e) := s || returnExpNoSemiBlockEnd(Expression e) := s) {
//		debug("return expression");
		result += <createVertex(e, symbolMap, enclosingFunction), Ret(unpack(enclosingFunction))>;
		result += createFlowGraphFromExpression(e, symbolMap, enclosingFunction);
	}
	else {
	// TODO with() statement?
	// Recurse over expressions
		rel[Vertex, Vertex] resultSubExpressions = createFlowGraphFromSubExpressions(s, symbolMap, enclosingFunction);
	
		result += resultSubExpressions;
		//result += createFlowGraphFromSubExpressions(s, symbolMap, enclosingFunction);
		if (size(resultSubExpressions) == 0) 
			missed = true;
	}
	// Recurse over substatements and blocks (the reason this is after the expressions is because they can not affect expressions as direct children, symbolmap wise)
	// I.e. we can not refer to a variable in an expression that is in a statement when it is defined in a substatement of that statement
	nestedResult = createFlowGraphFromSubStatementsAndBlocks(s, symbolMap, globalScope, enclosingFunction); 
	result += graph(nestedResult);
	symbolMap += modifiedSymbolMap(nestedResult);	
		
	if (missed && size(graph(nestedResult)) == 0) {
		println("Missed case <s>");
	}		

	return <result, symbolMap>;
}

private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromSubStatementsAndBlocks(Statement s, map[str, SymbolMapEntry] symbolMap, bool globalScope, Maybe[Position] enclosingFunction) {
	rel[Vertex, Vertex] result = {};
	
	// Sad but true: Inner block statements affect the symbol map for their sibblings
	// Recurse over substatements
	if (forDoDeclarations(_, _, _, Statement stmnt) := s || forDo(_, _, _, Statement stmnt) := s || 
		ifThen(_, Statement stmnt) := s || ifThenElse(_, Statement stmnt) := s || forIn(_, _, Statement stmnt) := s ||
		forInDeclaration(_, _, Statement stmnt) := s
		|| doWhile(Statement stmnt, _) := s || doWhileLoose(Statement stmnt, _) := s) {
//		debug("recursing on statement <stmnt>");

		// A statement that is not a block is also possible, which should still work here
		recursionResult = createFlowGraphFromStatement(stmnt, symbolMap, globalScope, enclosingFunction);

		result += graph(recursionResult);
		symbolMap += modifiedSymbolMap(recursionResult);	// TODO this does not have to be a plus operation does it?
	}
	// Recurse over blocks in if and then
	elseif (ifThenBlock(_, Block b) := s || ifThenElseBlock(_, _, Block b) := s) {
		println("If then block....");
//		debug("visiting nested block <b>");
		recursionResult = createFlowGraphFromStatements(b, symbolMap, globalScope, enclosingFunction);
	
		result += graph(recursionResult);
		symbolMap += modifiedSymbolMap(recursionResult);	// TODO this does not have to be a plus operation does it?
	}
	elseif (tryBlock(TryBlock trBlock) := s) {
//		debug("Try block");
		if (tryCatch(Block tryBlock, Id id, Block catchBlock, _, _) := trBlock) {
//			debug("Try catch block");
			recursionResult = createFlowGraphFromStatements(tryBlock, symbolMap, globalScope, enclosingFunction);
			result += graph(recursionResult);
			symbolMap += modifiedSymbolMap(recursionResult);

			recursionResult = createFlowGraphFromStatements(catchBlock, symbolMap, globalScope, enclosingFunction);
			result += graph(recursionResult);
			symbolMap += modifiedSymbolMap(recursionResult);
		}
		elseif (tryFinally(Block tryBlock, Block finallyBlock, _, _) := trBlock) {
			recursionResult = createFlowGraphFromStatements(tryBlock, symbolMap, globalScope, enclosingFunction);
			result += graph(recursionResult);
			symbolMap += modifiedSymbolMap(recursionResult);
			
			recursionResult = createFlowGraphFromStatements(finallyBlock, symbolMap, globalScope, enclosingFunction);
			result += graph(recursionResult);
			symbolMap += modifiedSymbolMap(recursionResult);		
		}
		elseif (tryCatchFinally(Block tryBlock, Id id, Block catchBlock, Block finallyBlock, _, _) := trBlock) {
			recursionResult = createFlowGraphFromStatements(tryBlock, symbolMap, globalScope, enclosingFunction);
			result += graph(recursionResult);
			symbolMap += modifiedSymbolMap(recursionResult);
			
			recursionResult = createFlowGraphFromStatements(catchBlock, symbolMap, globalScope, enclosingFunction);
			result += graph(recursionResult);
			symbolMap += modifiedSymbolMap(recursionResult);
			
			recursionResult = createFlowGraphFromStatements(finallyBlock, symbolMap, globalScope, enclosingFunction);
			result += graph(recursionResult);
			symbolMap += modifiedSymbolMap(recursionResult);			
		}
	}
	// Recurse over blocks	
	elseif (block(b:filledBlock(_), _, _) := s) {
//		debug("visiting nested block <b>");

		// Recurse on blocks
		recursionResult = createFlowGraphFromStatements(b.statements, symbolMap, globalScope, enclosingFunction);

		result += graph(recursionResult);
		symbolMap += modifiedSymbolMap(recursionResult);
//		debug("new symbol map: <domain(symbolMap)>");
	}
	elseif (switchCase(switchBlock(Expression e, c:cases(_))) := s) {
		// Due to deeper nesting we can not visit expressions automatically here
		result += createFlowGraphFromExpression(e, symbolMap, enclosingFunction);
//		debug("switching on expression <e>");
	
		for (clause <- c.clauses) {
			if (caseclause(filledCase(_, Statement+ statements)) := clause || defaultclause(filledDefault(Statement+ statements)) := clause) {
//				debug("	clause: <clause>");
				
				// If it is a case expression; visit the expression that defines the "case"
				if (caseclause(filledCase(Expression exp, Statement+ statements)) := clause) { 
//					debug("Case clause: <exp>");
					result += createFlowGraphFromExpression(exp, symbolMap, enclosingFunction);
				}

				// Create a graph for each statement and add it to our results
				for (Statement statement <- statements) {
					recursionResult = createFlowGraphFromStatement(statement, symbolMap, globalScope, enclosingFunction);
//					debug("		statement: <statements>");
					result += graph(recursionResult);
					symbolMap += modifiedSymbolMap(recursionResult);
				}
			} 
		}
	}
	
	return <result, symbolMap>;
}

// TODO check if propagations are necessary
private rel[Vertex, Vertex] createFlowGraphFromExpression(Expression e, map[str, SymbolMapEntry] symbolMap, Maybe[Position] enclosingFunction) {
	rel[Vertex, Vertex] result = {};

	// Assignments, NOT DECLARATIONS!
	// R1
	if (variableAssignment(Expression lhs, Expression rhs) := e ||
		variableAssignmentNoSemi(Expression lhs, Expression rhs) := e ||
		variableAssignmentBlockEnd(Expression lhs, Expression rhs) := e ||
		variableAssignmentLoose(Expression lhs, Expression rhs) := e) {
//		debug("assignment for <e> with symbol map <domain(symbolMap)>");
//		debug("assignment -\> <rhs>");

		Vertex rhsVertex = createVertex(rhs, symbolMap, enclosingFunction);
		result += <rhsVertex, createVertex(lhs, symbolMap, enclosingFunction)>;
		result += <rhsVertex, Exp(getNodePosition(e))>;

		// TODO visiting subexpressions doesnt happen well here!
		// TODO TEST MULTIASSIGNMENTS
		// result += createFlowGraphFromExpression(rhs, symbolMap);
		result += createFlowGraphFromExpression(lhs, symbolMap, enclosingFunction);
		result += createFlowGraphFromExpression(rhs, symbolMap, enclosingFunction);		
	}
	elseif (variableAssignmentMulti(VariableAssignment assignment, {VariableAssignment ","}+ assignments) := e) {
//		debug("multi assignment <e> with symbol map <domain(symbolMap)>");
		assignments += assignment;
		for (f:filledAssignment(Expression lhs, Expression rhs) <- assignments) {
			Vertex rhsVertex = createVertex(rhs, symbolMap, enclosingFunction);
			result += <rhsVertex, createVertex(lhs, symbolMap, enclosingFunction)>;
			result += <rhsVertex, Exp(getNodePosition(f))>;
			
			result += createFlowGraphFromExpression(lhs, symbolMap, enclosingFunction);
			result += createFlowGraphFromExpression(rhs, symbolMap, enclosingFunction);	
		}
	}
	// R2
	elseif (disjunction(Expression lhs, Expression rhs) := e) {
//		debug("disjunction");
		result += <createVertex(lhs, symbolMap, enclosingFunction), Exp(getNodePosition(e))>;
		result += <createVertex(rhs, symbolMap, enclosingFunction), Exp(getNodePosition(e))>;
		
		result += createFlowGraphFromExpression(lhs, symbolMap, enclosingFunction);
		result += createFlowGraphFromExpression(rhs, symbolMap, enclosingFunction);			
	}
	// R3
	elseif (ternary(Expression condition, Expression conditionSuccess, Expression conditionFail) := e) {
//		debug("ternary");

		Vertex successVertex = createVertex(conditionSuccess, symbolMap, enclosingFunction), failVertex = createVertex(conditionFail, symbolMap, enclosingFunction);
		
		result += <successVertex, Exp(getNodePosition(e))>;
		result += <failVertex, Exp(getNodePosition(e))>;
		
		result += createFlowGraphFromExpression(condition, symbolMap, enclosingFunction);
		result += createFlowGraphFromExpression(conditionSuccess, symbolMap, enclosingFunction);
		result += createFlowGraphFromExpression(conditionFail, symbolMap, enclosingFunction);	
			
	}
	// R4
	elseif (conjunction(Expression lhs, Expression rhs) := e) {
//		debug("conjunction!");
		result += <createVertex(rhs, symbolMap, enclosingFunction), Exp(getNodePosition(e))>;
		result += createFlowGraphFromExpression(lhs, symbolMap, enclosingFunction);
		result += createFlowGraphFromExpression(rhs, symbolMap, enclosingFunction);			
	}
	// R5
	elseif (objectDefinition({PropertyAssignment ","}* properties) := e || objectDefinitionCommaSuffix({PropertyAssignment ","}+ properties) := e) {
//		debug("obj definition");
		// TODO what to do with the get/set
		for (p <- properties.args) {
//			debug("	property <p>");
			if (property(PropertyName name, Expression exp) := p) {
//				debug("		assignment <name>");
				result += <createVertex(exp, symbolMap, enclosingFunction), Prop("<name>")>;
				result += createFlowGraphFromExpression(exp, symbolMap, enclosingFunction);
			}
			elseif (getProperty(PropertyName name, Block block) := p) {
				result += <createVertex(block, symbolMap, enclosingFunction), Prop("<name>")>;
				result += createFlowGraphFromSubStatementsAndBlock(block, symbolMap, enclosingFunction);			
			}
			elseif (setProperty(PropertyName name, Id _, Block block) := p) {			
				result += createFlowGraphFromSubStatementsAndBlock(block, symbolMap, enclosingFunction);	
			}
		}
	}
	// Functions expressions assigned (possibly through variable declaration) in functions ;)
	// R6
	elseif (function(Id id, {Id ","}* params, Block block) := e || functionAnonymous({Id ","}* params, Block block) := e) {
		map[str, SymbolMapEntry] inFunctionSymbolMap = getOverridableSymbolMap(symbolMap);
		
		// Non-anonymous functions need extra processing
		if (function(_, _, _) := e) {
			inFunctionSymbolMap["<id>"] = createEntry(id);

			// No need for checking in the symbol map, R6 says this is always a var
			result += <Fun(getNodePosition(e)), Var("<id>", getNodePosition(e))>; // getNodePosition e instead of id?
		}

		inFunctionSymbolMap["this"] = createParamEntry(getNodePosition(e), 0);
		int argnum = 1;
		for (p <- params) {
			inFunctionSymbolMap["<p>"] = createParamEntry(getNodePosition(e), argnum);
			argnum += 1;
		}

		// R6 rule #1 (Func -> Exp)
		result += <Fun(getNodePosition(e)), Exp(getNodePosition(e))>;
//		debug("visiting function with scope: <domain(inFunctionSymbolMap)>");

		// The function blocks do not affect the current scope of the wrapping context
		// If there is an implementation, add the its graph to the current graph
		result += graph(createFlowGraphFromStatements(block, inFunctionSymbolMap, false, just(getNodePosition(e))));
	}
	// R8
	// TODO does this not count for functions without parameters?
	elseif (new(Expression expression) := e) {
		println("Something new :)");
		result += createFlowGraphFromExpression(expression, symbolMap, enclosingFunction);
		if (functionParams(Expression funcExpression, { Expression!comma ","}+ params) := expression
			 || functionNoParams(Expression funcExpression) := expression) {
			if (nestedExpression(Expression sub) := expression) {
				expression = sub;
			}
			result += <createVertex(expression, symbolMap, enclosingFunction), Callee(getNodePosition(e))>;

			if (expression is functionParams) {
				int argnum = 0;
				for (Expression param <- params) {
					argnum += 1;
					result += <createVertex(param, symbolMap, enclosingFunction), Arg(getNodePosition(e), argnum)>; // TODO getNodePosition(e) or (param)?
					result += createFlowGraphFromExpression(param, symbolMap, enclosingFunction);	
				}
			}	

			result += <Res(getNodePosition(e)), Exp(getNodePosition(e))>;
		}
	}
	elseif (functionParams(Expression expression, { Expression!comma ","}+ params) := e || functionNoParams(Expression expression) := e) {
		// In case of one shot closures, we have to consider the subexpression (nested) as the function being called
		if (nestedExpression(Expression sub) := expression) {
			expression = sub;
		}

		result += <createVertex(expression, symbolMap, enclosingFunction), Callee(getNodePosition(e))>;

		if (e is functionParams) {
			int argnum = 0;
			for (Expression param <- params) {
				argnum += 1;
				result += <createVertex(param, symbolMap, enclosingFunction), Arg(getNodePosition(e), argnum)>; // TODO getNodePosition(e) or (param)?
				result += createFlowGraphFromExpression(param, symbolMap, enclosingFunction);	
			}
		}

		result += <Res(getNodePosition(e)), Exp(getNodePosition(e))>;
		

		// R9
		if (property(Expression lhs, Id _) := expression) {
			// println("lhs of function call <expression> is a property <lhs>");
			result += <createVertex(lhs, symbolMap, enclosingFunction), Arg(getNodePosition(e), 0)>;
		}

		result += createFlowGraphFromExpression(expression, symbolMap, enclosingFunction);
	}
	elseif (nestedExpression(Expression exp) := e) {
		result += createFlowGraphFromExpression(exp, symbolMap, enclosingFunction);
	}
	elseif (Id(id) !:= e) {
		// Recurse over top level subexpressions
		result += createFlowGraphFromSubExpressions(e, symbolMap, enclosingFunction);				 
	}
	else {
		println("What to do with this?: <unparse(e)>");	
	}

	return result;
}

// Find variable declaration in symbol map
private Maybe[SymbolMapEntry] findVariableDeclaration(Id variableId, map[str, SymbolMapEntry] symbolMap) = findVariableDeclaration("<variableId>", symbolMap);

private Maybe[SymbolMapEntry] findVariableDeclaration(str variableId, map[str, SymbolMapEntry] symbolMap) {
	if (variableId in symbolMap) return just(symbolMap[variableId]);
	return nothing();
}

// Unpacking a maybe statement
private &A unpack(Maybe[&A] m) {
	if (just(val) := m) return val;
	throw "Can not unpack nothing"; 
}

private bool isDeclarable(str variableName, map[str, SymbolMapEntry] symbolMap) {
	if (variableName notin symbolMap) return true;
	else {
		SymbolMapEntry entry = symbolMap["<variableName>"];
//		debug("possible override of <variableName> originating from line #<symbolMap[variableName].position>");
		return entry.overridable;
	}
}

// SymbolMaps should be overridable because variables can be redefined in the new scope and the javascript convention does not allow double declarations in the same scope
private map[str, SymbolMapEntry] getOverridableSymbolMap(map[str, SymbolMapEntry] symbolMap) = ( key: entry(symbolMap[key].position, true, symbolMap[key].parameter) | key <- symbolMap );

// Creating vertices
private Vertex createVertex(Tree root, map[str, SymbolMapEntry] symbolMap, Maybe[Position] enclosingFunction) {
	if (property(Expression e, Id id) := root) return Prop("<id>");
	elseif ((Expression e := root && id(Id id) := e) || Id id := root) {
		// both top level expressions and ids will match
//		debug("looking up <id> in symbol map: <domain(symbolMap)>");

		foundDeclaration = findVariableDeclaration(id, symbolMap);
		if (foundDeclaration == nothing()) return Prop("<id>");
		else {
			SymbolMapEntry e = unpack(foundDeclaration);
			// find out if its a function parameter
			if (e.parameter > NO_PARAMETER) {
				return Parm(e.position, e.parameter);
			}						
				
			return Var("<id>", e.position);
		}
	}
	elseif (this() := root) {
		foundDeclaration = findVariableDeclaration("this", symbolMap);
		if (foundDeclaration != nothing()) {
			return Parm(unpack(foundDeclaration).position, 0);
		}
	}
	
	return Exp(getNodePosition(root));
}

// Retrieve the position of a node
public Position getNodePosition(Tree t) {
	str filename = "";
	try	filename = t@\loc.file;
	catch: filename = "stdin";

	// We use the same formatting as in the original script	
	return Position(filename, t@\loc.begin.line, t@\loc.offset, (t@\loc.offset + t@\loc.length), t@\loc);
}

private rel[Vertex, Vertex] graph(tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] _] input) = input[0];
private map[str, SymbolMapEntry] modifiedSymbolMap(tuple[rel[Vertex, Vertex] _, map[str, SymbolMapEntry] symbolMap] input) = input[1];