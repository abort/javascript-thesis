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

// TODO clean up
// TODO stop storing trees but store node positions?

// Entries are needed to know if certain entries in the symbol map are overridable
private data SymbolMapEntry = entry(Tree tree, bool overridable);
private SymbolMapEntry createEntry(Tree tree) = entry(tree, false);
private SymbolMapEntry createOverridableEntry(Tree tree) = entry(tree, true);

public rel[Vertex, Vertex] createFlowGraphWithNativeFunctions(Source root) {
	// TODO implement native constructs add
	return createFlowGraph(source);
}
public rel[Vertex, Vertex] createFlowGraph(Source root) = createFlowGraphFromGlobalStatements(root);

// Does not affect the scoping so we discard the returned symbol map
private rel[Vertex, Vertex] createFlowGraphFromGlobalStatements(Tree root) = graph(createFlowGraphFromStatements(root, (), true, Inexistent()));

private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromNestedStatements(Tree root, map[str, SymbolMapEntry] symbolMap, Position enclosingFunction) = createFlowGraphFromStatements(root, symbolMap, false, enclosingFunction);
private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromStatements(Tree root, map[str, SymbolMapEntry] symbolMap, bool globalScope, Position enclosingFunction) {
	rel[Vertex, Vertex] result = {};

	// Visits all top-level statements
	top-down-break visit (root) {
		case FunctionDeclaration f:{
			// functions symbol map: old symbol map (with overriding permission + parameters + name)
			map[str, SymbolMapEntry] newSymbolMap = getOverridableSymbolMap(symbolMap) + ("<f.name>" : createOverridableEntry(f)) + ("<p>" : createEntry(f) | p <- f.parameters); // TODO name might be overridable by parameters or inside the function

			debug("visiting function declaration <f.name> with scope: <domain(newSymbolMap)>");

			// In non-global scope, the symbol map gets appended
			if (!globalScope) symbolMap += ("<f.name>" : createEntry(f));

			// R7
			result += graph(createFlowGraphFromNestedStatements(f.implementation, newSymbolMap, getNodePosition(f)));
			result += <Fun(getNodePosition(f)), Var("<f.name>", getNodePosition(f))>; // get node position f instead of f.name?

			// result += createVertex("<p>" : createEntry(p) | p <- f.parameters)
			
		}
		case Statement s:{
			debug ("visiting statement <s> with symbolMap <domain(symbolMap)>");

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

private rel[Vertex, Vertex] createFlowGraphFromSubExpressions(Tree root, map[str, SymbolMapEntry] symbolMap, Position enclosingFunction) {
	rel[Vertex, Vertex] result = {};

	// Visit top level expressions that are children of statements
	// Expressions will recurse themselves
	try {
		top-down-break visit(root.args) {
			case Statement s:{
				// Do not include the input item (in case its a statement, for convenience).... we need its children, hence why
				debug("we dont need expressions of statements just yet (due to statements being recursive), so we stop at the branch over here (halt recursion) @ <s>");
			}
			case Expression e:{	
				if (e == root) fail; // makes sure the top statement doesnt get visited in some way 
				result += createFlowGraphFromExpression(e, symbolMap, enclosingFunction);
			}
		}
	}
	catch: return result;
	
	return result;
}

// Global scope boolean as parameter helps for not appending the symbol map and thus creating wrong vertices
private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromNestedStatement(Statement s, map[str, SymbolMapEntry] symbolMap, Position enclosingFunction) = createFlowGraphFromStatement(s, symbolMap, false, enclosingFunction);
private rel[Vertex, Vertex] createFlowGraphFromGlobalStatement(Statement s) {
	tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] _] result = createFlowGraphFromStatement(s, (), true, Inexistent());
	return result.graph;
}

private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromStatement(Statement s, map[str, SymbolMapEntry] symbolMap, bool globalScope, Position enclosingFunction) {
	rel[Vertex, Vertex] result = {};
	
	if (forDoDeclarations({VariableDeclarationNoIn ","}+ declarations, _, _, _) := s || variableNoSemi({VariableDeclaration ","}+ declarations, _) := s
		 || variableSemi({VariableDeclaration ","}+ declarations) := s) {
		for (declaration <- declarations) {
			debug("declaration: <declaration>");
			// This only works on assigned variables (not on just declared ones)
			// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
			if (filledDeclaration(Id id, Expression expression) := declaration) {
				// Variables can not be redeclared in the same scope
				if (!globalScope && isDeclarable("<id>", symbolMap)) symbolMap += ("<id>" : createEntry(id));
				Vertex rhsVertex = createVertex(expression, symbolMap, enclosingFunction);
				result += <rhsVertex, createVertex(id, symbolMap, enclosingFunction)>;	// Does not occur in the provided script but we assume it to be the same as a declaration + expression R1
				result += <rhsVertex, Exp(getNodePosition(id))>;
				debug("variable declaration for <id> (assigned to: <expression>)");
			}
			
			// Add to symbol map
			if (emptyDeclaration(Id id) := declaration) {
				debug("empty declaration for <id>");
				// Variables can not be redeclared in the same scope
				if (!globalScope && isDeclarable("<id>", symbolMap)) symbolMap += ("<id>" : entry(id, false));
			}
		}
	}
	elseif (forInDeclaration(Id id, Expression e, Statement _) := s) {
		// Assumption to count as a simple declaration (so not R1, TODO: DOCUMENT!)
		if (!globalScope && isDeclarable("<id>", symbolMap)) symbolMap += ("<id>" : entry(id, false));
		Vertex rhsVertex = createVertex(e, symbolMap, enclosingFunction);
	}
	// R10
	elseif (returnExp(Expression e) := s || returnExpNoSemi(Expression e) := s || returnExpNoSemiBlockEnd(Expression e) := s) {
		debug("return expression");
		result += <createVertex(e, symbolMap, enclosingFunction), Ret(enclosingFunction)>;
	}

	// TODO with() statement?
	// Recurse over expressions
	result += createFlowGraphFromSubExpressions(s, symbolMap, enclosingFunction);
	
	// Recurse over substatements and blocks (the reason this is after the expressions is because they can not affect expressions as direct children, symbolmap wise)
	// I.e. we can not refer to a variable in an expression that is in a statement when it is defined in a substatement of that statement
	nestedResult = createFlowGraphFromSubStatementsAndBlocks(s, symbolMap, globalScope, enclosingFunction); 
	result += graph(nestedResult);
	symbolMap += modifiedSymbolMap(nestedResult);	
		
	return <result, symbolMap>;
}

private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromSubStatementsAndBlocks(Statement s, map[str, SymbolMapEntry] symbolMap, bool globalScope, Position enclosingFunction) {
	rel[Vertex, Vertex] result = {};
	
	// Sad but true: Inner block statements affect the symbol map for their sibblings
	// Recurse over substatements
	if (forDoDeclarations(_, _, _, Statement stmnt) := s || forDo(_, _, _, Statement stmnt) := s || 
		ifThen(_, Statement stmnt) := s || ifThenElseBlock(_, Statement stmnt, _) := s || forIn(_, _, Statement stmnt) := s ||
		forInDeclaration(_, _, Statement stmnt) := s
		|| doWhile(Statement stmnt, _) := s || doWhileLoose(Statement stmnt, _) := s) {
		debug("recursing on statement <stmnt>");

		// A statement that is not a block is also possible, which should still work here
		recursionResult = createFlowGraphFromStatement(stmnt, symbolMap, globalScope, enclosingFunction);

		result += graph(recursionResult);
		symbolMap += modifiedSymbolMap(recursionResult);	// TODO this does not have to be a plus operation does it?
	}
	// Recurse over blocks in if and then
	elseif (ifThenBlock(_, Block b) := s || ifThenElseBlock(_, _, Block b) := s) {
		debug("visiting nested block <b>");
		recursionResult = createFlowGraphFromStatements(b.statements, symbolMap, globalScope, enclosingFunction);
	
		result += graph(recursionResult);
		symbolMap += modifiedSymbolMap(recursionResult);	// TODO this does not have to be a plus operation does it?
	}
	elseif (tryBlock(TryBlock trBlock) := s) {
		debug("Try block");
		if (tryCatch(Block tryBlock, Id id, Block catchBlock, _, _) := trBlock) {
			debug("Try catch block");
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
		debug("visiting nested block <b>");

		// Recurse on blocks
		recursionResult = createFlowGraphFromStatements(b.statements, symbolMap, globalScope, enclosingFunction);

		result += graph(recursionResult);
		symbolMap += modifiedSymbolMap(recursionResult);
		
		debug("new symbol map: <domain(symbolMap)>");
	}
	elseif (switchCase(switchBlock(Expression e, c:cases(_))) := s) {
		// Due to deeper nesting we can not visit expressions automatically here
		result += createFlowGraphFromExpression(e, symbolMap, enclosingFunction);
		debug("switching on expression <e>");
	
		for (clause <- c.clauses) {
			if (caseclause(filledCase(_, Statement+ statements)) := clause || defaultclause(filledDefault(Statement+ statements)) := clause) {
				
				debug("	clause: <clause>");
				
				// If it is a case expression; visit the expression that defines the "case"
				if (caseclause(filledCase(Expression exp, Statement+ statements)) := clause) { 
					debug("Case clause: <exp>");
					result += createFlowGraphFromExpression(exp, symbolMap, enclosingFunction);
				}

				// Create a graph for each statement and add it to our results
				for (Statement statement <- statements) {
					recursionResult = createFlowGraphFromStatement(statement, symbolMap, globalScope, enclosingFunction);
					debug("		statement: <statements>");
					result += graph(recursionResult);
					symbolMap += modifiedSymbolMap(recursionResult);
				}
			} 
		}
	}
	
	return <result, symbolMap>;
}

// TODO check if propagations are necessary
private rel[Vertex, Vertex] createFlowGraphFromExpression(Expression e, map[str, SymbolMapEntry] symbolMap, Position enclosingFunction) {
	rel[Vertex, Vertex] result = {};

	// Assignments, NOT DECLARATIONS!
	// R1
	if (variableAssignment(Expression lhs, Expression rhs) := e ||
		variableAssignmentNoSemi(Expression lhs, Expression rhs) := e ||
		variableAssignmentBlockEnd(Expression lhs, Expression rhs) := e ||
		variableAssignmentLoose(Expression lhs, Expression rhs) := e) {

		debug("assignment for <e> with symbol map <domain(symbolMap)>");
		debug("assignment -\> <rhs>");

		Vertex rhsVertex = createVertex(rhs, symbolMap, enclosingFunction);
		result += <rhsVertex, createVertex(lhs, symbolMap, enclosingFunction)>;
		result += <rhsVertex, Exp(getNodePosition(e))>;

		// TODO visiting subexpressions doesnt happen well here!
		// TODO TEST MULTIASSIGNMENTS
		// result += createFlowGraphFromExpression(rhs, symbolMap);
	}
	elseif (variableAssignmentMulti(VariableAssignment assignment, {VariableAssignment ","}+ assignments) := e) {
		debug("multi assignment <e> with symbol map <domain(symbolMap)>");
		assignments += assignment;
		for (filledAssignment(Expression lhs, Expression rhs) <- assignments) {
			Vertex rhsVertex = createVertex(rhs, symbolMap, enclosingFunction);
			result += <rhsVertex, createVertex(lhs, symbolMap, enclosingFunction)>;
			result += <rhsVertex, Exp(getNodePosition(e))>;
		}
	}
	// R2
	elseif (disjunction(Expression lhs, Expression rhs) := e) {
		debug("disjunction");
		result += <createVertex(lhs, symbolMap, enclosingFunction), Exp(getNodePosition(e))>;
		result += <createVertex(rhs, symbolMap, enclosingFunction), Exp(getNodePosition(e))>;
	}
	// R3
	elseif (ternary(Expression condition, Expression conditionSuccess, Expression conditionFail) := e) {
		debug("ternary");

		Vertex successVertex = createVertex(conditionSuccess, symbolMap, enclosingFunction), failVertex = createVertex(conditionFail, symbolMap, enclosingFunction);
		
		result += <successVertex, Exp(getNodePosition(e))>;
		result += <failVertex, Exp(getNodePosition(e))>;
	}
	// R4
	elseif (conjunction(Expression lhs, Expression rhs) := e) {
		debug("conjunction!");
		result += <createVertex(rhs, symbolMap, enclosingFunction), Exp(getNodePosition(e))>;
	}
	// R5
	elseif (objectDefinition({PropertyAssignment ","}* properties) := e || objectDefinitionCommaSuffix({PropertyAssignment ","}+ properties) := e) {
		debug("obj definition");
		// TODO what to do with the get/set
		for (p <- properties.args) {
			debug("	property <p>");
			if (property(PropertyName name, Expression exp) := p) {
				debug("		assignment <name>");
				result += <createVertex(exp, symbolMap, enclosingFunction), Prop("<name>")>;
			}
		}
	}
	// Functions expressions assigned (possibly through variable declaration) in functions ;)
	// R6
	elseif (function(Id id, {Id ","}* params, Block block) := e || functionAnonymous({Id ","}* params, Block block) := e) {
		map[str, SymbolMapEntry] inFunctionSymbolMap = getOverridableSymbolMap(symbolMap);
		
		// Non-anonymous functions need extra processing
		if (function(_, _, _) := e) {
			inFunctionSymbolMap += ("<id>" : createEntry(id));

			// No need for checking in the symbol map, R6 says this is always a var
			result += <Fun(getNodePosition(e)), Var("<id>", getNodePosition(e))>; // getNodePosition e instead of id?
		}

		inFunctionSymbolMap += ("<p>" : createEntry(e) | p <- params);

		// R6 rule #1 (Func -> Exp)
		result += <Fun(getNodePosition(e)), createVertex(e, symbolMap, enclosingFunction)>;
		debug("visiting function with scope: <domain(inFunctionSymbolMap)>");

		// The function blocks do not affect the current scope of the wrapping context
		// If there is an implementation, add the its graph to the current graph
		result += graph(createFlowGraphFromStatements(block, inFunctionSymbolMap, false, getNodePosition(e)));
	}
	// R8
	elseif (functionParams(Expression expression, { Expression!comma ","}+ params) := e || functionNoParams(Expression expression) := e) {
		Position p = getNodePosition(e);
		result += <createVertex(expression, symbolMap, enclosingFunction), Callee(getNodePosition(e))>;

		if (e is functionParams) {
			int argnum = 0;
			for (Expression param <- params) {
				argnum += 1;
				result += <createVertex(param, symbolMap, enclosingFunction), Arg(getNodePosition(e), argnum)>; // TODO getNodePosition(e) or (param)?
			}
		}
		else {
			debug("<e> is a function without params but no worries :)!");
		}
		result += <Res(getNodePosition(e)), Exp(getNodePosition(e))>;
		
		// R9
		if (property(Expression lhs, Id _) := expression) {
			debug("lhs of function call is a property");
			result += <createVertex(lhs, symbolMap, enclosingFunction), Arg(getNodePosition(e), 0)>;
		}
		//result += <createVertex(expression, symbolMap), >;
		print("");
	}
	elseif (id(Id id) := e) {
		// TODO: e.g. return does not do anything
		debug("Just found an id, what now?");
	}

	// Recurse over top level subexpressions
	result += createFlowGraphFromSubExpressions(e, symbolMap, enclosingFunction); 
	return result;
}

// Find variable declaration in symbol map
private Maybe[SymbolMapEntry] findVariableDeclaration(Id variableId, map[str, SymbolMapEntry] symbolMap) {
	if ("<variableId>" in symbolMap) return just(symbolMap["<variableId>"]);
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
		debug("possible override of <variableName> originating from line #<symbolMap[variableName].tree@\loc.begin.line>");
		return entry.overridable;
	}
}

// SymbolMaps should be overridable because variables can be redefined in the new scope and the javascript convention does not allow double declarations in the same scope
private map[str, SymbolMapEntry] getOverridableSymbolMap(map[str, SymbolMapEntry] symbolMap) = ( key: entry(symbolMap[key].tree, true) | key <- symbolMap );

// Creating vertices
private Vertex createVarVertex(Id id) = Var("<id>", getNodePosition(id));
private Vertex createVertex(Tree root, map[str, SymbolMapEntry] symbolMap, Position enclosingFunction) {
	if ((Expression)`<Expression e> . <Id id>` := root) return Prop("<id>");
	elseif (Expression e := root && this() := e) return Parm(enclosingFunction, 0);
	elseif ((Expression e := root && id(Id id) := e) || Id id := root) {
		// both top level expressions and id's will match
		debug("looking up <id> in symbol map: <domain(symbolMap)>");

		foundDeclaration = findVariableDeclaration(id, symbolMap);
		if (foundDeclaration == nothing()) return Prop("<id>");
		else {
			Tree originalDeclaration = unpack(foundDeclaration).tree;
			Vertex parmAttempt = Empty();

			// find out if its a function parameter
			if (function(Id _, {Id ","}* params, Block _) := originalDeclaration 
				|| functionAnonymous({Id ","}* params, Block_) := originalDeclaration) {
				parmAttempt = createParm(getNodePosition(originalDeclaration), params, id);
			}						
			elseif (FunctionDeclaration f := originalDeclaration) {
				parmAttempt = createParm(getNodePosition(originalDeclaration), f.parameters, id);
			}
			
			// If we found it as parameter, return it, otherwise we fallback to var :)
			if (parmAttempt !:= Empty()) return parmAttempt;
			
			return Var("<id>", getNodePosition(originalDeclaration));
		}
	}

	return Exp(getNodePosition(root));
}

private Vertex createParm(Position variableOrigin, {Id ","}* functionParameters, Id paramName) {
	int i = 1;
	debug("looking for <paramName> in <functionParameters>");
	for (Id id <- functionParameters) {
		if (id == paramName) {
			return Parm(variableOrigin, i);
		}
		i += 1;
	}
	
	// This will only occur if we refered to the name of the function
	return Empty();
}

// Retrieve the position of a node
public Position getNodePosition(Tree t) {
	str filename = "";
	try	filename = t@\loc.file;
	catch: filename = "stdin";

	// We use the same formatting as in the original script	
	return Position(filename, t@\loc.begin.line, t@\loc.offset, (t@\loc.offset + t@\loc.length));
}

private rel[Vertex, Vertex] graph(tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] _] input) = input[0];
private map[str, SymbolMapEntry] modifiedSymbolMap(tuple[rel[Vertex, Vertex] _, map[str, SymbolMapEntry] symbolMap] input) = input[1];