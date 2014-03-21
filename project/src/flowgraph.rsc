module flowgraph

import EcmaScript;
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

// Entries are needed to know if certain entries in the symbol map are overridable
private data SymbolMapEntry = entry(Tree tree, bool overridable);
private SymbolMapEntry createEntry(Tree tree) = entry(tree, false);

public rel[Vertex, Vertex] createFlowGraph(Source root) = createFlowGraphFromGlobalStatements(root);

// Does not affect the scoping so we discard the returned symbol map
private rel[Vertex, Vertex] createFlowGraphFromGlobalStatements(Tree root) = graph(createFlowGraphFromStatements(root, (), true));

private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromNestedStatements(Tree root, map[str, SymbolMapEntry] symbolMap) = createFlowGraphFromStatements(root, symbolMap, false);
private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromStatements(Tree root, map[str, SymbolMapEntry] symbolMap, bool globalScope) {
	rel[Vertex, Vertex] result = {};
	
	// Visits all top-level statements
	top-down-break visit (root) {
		case FunctionDeclaration f:{
			// functions symbol map: old symbol map (with overriding permission + parameters + name)
			map[str, SymbolMapEntry] newSymbolMap = getOverridableSymbolMap(symbolMap) + ("<p>" :createEntry(p) | p <- f.parameters) + ("<f.name>" : createEntry(f));

			debug("visiting function declaration <f.name> with scope: <domain(newSymbolMap)>");

			// Overall symbol map does not get affected
			// TODO: merge createFlowGraphFromStatements with createFlowGraph?
			result += graph(createFlowGraphFromNestedStatements(f.implementation, newSymbolMap));
			result += <Fun(getNodePosition(f)), Var("<f.name>", getNodePosition(f.name))>;	
		}
		case Statement s:{
			debug ("visiting statement <s> with symbolMap <domain(symbolMap)>");

			if (globalScope) result += createFlowGraphFromGlobalStatement(s);
			else {
				// Retrieve a correctly scoped graph
				visitStatementResult = createFlowGraphFromNestedStatement(s, symbolMap); 
	
				// Sadly enough the symbol map is appended by the sibblings :)
				result += graph(visitStatementResult);
				symbolMap += modifiedSymbolMap(visitStatementResult);
			}
		}
	}

	return <result, symbolMap>;
}

private rel[Vertex, Vertex] createFlowGraphForExpressions(Tree root, map[str, SymbolMapEntry] symbolMap) {
	rel[Vertex, Vertex] result = {};

	// Visit top level expressions that are children of statements
	// Expressions will recurse themselves
	top-down-break visit(root.args) {
		case Statement s:{
			// Do not include the input item (in case its a statement, for convenience).... we need its children, hence why
			debug("we dont need expressions of statements just yet (due to statements being recursive), so we stop at the branch over here (halt recursion)");
		}
		case Expression e: result += createFlowGraphFromExpression(e, symbolMap);
	}
	
	return result;
}

// Global scope boolean as parameter helps for not appending the symbol map and thus creating wrong vertices
private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromNestedStatement(Statement s, map[str, SymbolMapEntry] symbolMap) = createFlowGraphFromStatement(s, symbolMap, false);
private rel[Vertex, Vertex] createFlowGraphFromGlobalStatement(Statement s) {
	tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] _] result = createFlowGraphFromStatement(s, (), true);
	return result.graph;
}

private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromStatement(Statement s, map[str, SymbolMapEntry] symbolMap, bool globalScope) {
	rel[Vertex, Vertex] result = {};
	
	if (forDoDeclarations({VariableDeclarationNoIn ","}+ declarations, _, _, _) := s || variableNoSemi({VariableDeclaration ","}+ declarations, _) := s
		 || variableSemi({VariableDeclaration ","}+ declarations) := s) {
		for (declaration <- declarations) {
			debug("declaration: <declaration>");
			// This only works on assigned variables (not on just declared ones)
			// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
			if (filledDeclaration(Id id, Expression expression) := declaration) {
				// Variables can not be redeclared in the same scope
				if (!globalScope && isDeclarable("<id>", symbolMap)) symbolMap += ("<id>" : entry(id, false));
				Vertex rhsVertex = createVertex(expression, symbolMap);
				result += <rhsVertex, createVertex(id, symbolMap)>;	// Does not occur in the provided script but we assume it to be the same as a declaration + expression R1
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
		Vertex rhsVertex = createVertex(e, symbolMap);
	}

	// TODO with() statement?
	// Recurse over expressions
	result += createFlowGraphForExpressions(s, symbolMap);
	
	// Recurse over substatements and blocks (the reason this is after the expressions is because they can not affect expressions as direct children, symbolmap wise)
	// I.e. we can not refer to a variable in an expression that is in a statement when it is defined in a substatement of that statement 
	result += graph(createFlowGraphForSubStatementsAndBlocks(s, symbolMap, globalScope));	
		
	return <result, symbolMap>;
}

private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphForSubStatementsAndBlocks(Statement s, map[str, SymbolMapEntry] symbolMap, bool globalScope) {
	rel[Vertex, Vertex] result = {};
	
	// Sad but true: Blocks affect the symbol map for their sibblings
	// Recurse over substatements
	if (forDoDeclarations(_, _, _, Statement stmnt) := s || forDo(_, _, _, Statement stmnt) := s || 
		ifThen(_, Statement stmnt) := s || ifThenElseBlock(_, Statement stmnt, _) := s || forIn(_, _, Statement stmnt) := s ||
		forInDeclaration(_, _, Statement stmnt) := s
		|| doWhile(Statement stmnt, _) := s || doWhileLoose(Statement stmnt, _) := s) {
		debug("recursing on statement <stmnt>");

		// A statement that is not a block is also possible, which should still work here
		recursionResult = createFlowGraphFromStatement(stmnt, symbolMap, globalScope);

		result += graph(recursionResult);
		symbolMap += modifiedSymbolMap(recursionResult);	// TODO this does not have to be a plus operation does it?
	}
	// Recurse over blocks in if and then
	elseif (ifThenBlock(_, Block b) := s || ifThenElseBlock(_, _, Block b) := s) {
		debug("visiting nested block <b>");
		recursionResult = createFlowGraphFromStatements(b.statements, symbolMap, globalScope);
	
		result += graph(recursionResult);
		symbolMap += modifiedSymbolMap(recursionResult);	// TODO this does not have to be a plus operation does it?
	}
	// Recurse over blocks	
	elseif (block(b:filledBlock(_), _, _) := s) {
		debug("visiting nested block <b>");

		// Recurse on blocks
		recursionResult = createFlowGraphFromStatements(b.statements, symbolMap, globalScope);

		result += graph(recursionResult);
		symbolMap += modifiedSymbolMap(recursionResult);
	}
	elseif (switchCase(switchBlock(Expression e, c:cases(_))) := s) {
		// Due to deeper nesting we can not visit expressions automatically here
		result += createFlowGraphFromExpression(e, symbolMap);
		debug("switching on expression <e>");
	
		for (clause <- c.clauses) {
			if (caseclause(filledCase(_, Statement+ statements)) := clause ||
				defaultclause(filledDefault(Statement+ statements)) := clause) {
				
				debug("	clause: <clause>");
				
				// If it is a case expression; visit the expression that defines the "case"
				if (caseclause(filledCase(Expression exp, Statement+ statements)) := clause) 
					result += createFlowGraphFromExpression(exp, symbolMap);
				
				// Create a graph for each statement and add it to our results
				for (Statement statement <- statements) {
					recursionResult = createFlowGraphFromStatement(statement, symbolMap, false);
				
				//for (Statement statement <- statements) {
					debug("		statement: <statements>");
					result += graph(recursionResult);
					symbolMap += modifiedSymbolMap(recursionResult);
				}
				//}
			} 
		}
		// TODO: recurse over statements in cases
	}
	
	return <result, symbolMap>;
}

// TODO check if propagations are necessary
private rel[Vertex, Vertex] createFlowGraphFromExpression(Expression e, map[str, SymbolMapEntry] symbolMap) {
	rel[Vertex, Vertex] result = {};

	// Assignments, NOT DECLARATIONS!
	// R1
	if (variableAssignment(Expression lhs, Expression rhs) := e ||
		variableAssignmentNoSemi(Expression lhs, Expression rhs) := e ||
		variableAssignmentBlockEnd(Expression lhs, Expression rhs) := e ||
		variableAssignmentLoose(Expression lhs, Expression rhs) := e ||
		variableAssignmentMulti(Expression lhs, Expression rhs) := e) {

		debug("assignment for <e> with symbol map <domain(symbolMap)>");

		Vertex rhsVertex = createVertex(rhs, symbolMap);
		result += <rhsVertex, createVertex(lhs, symbolMap)>;
		result += <rhsVertex, Exp(getNodePosition(e))>;
	}
	// R2
	elseif (disjunction(Expression lhs, Expression rhs) := e) {
		result += <createVertex(lhs, symbolMap), Exp(getNodePosition(disjunction))>;
		result += <createVertex(rhs, symbolMap), Exp(getNodePosition(disjunction))>;
	}
	// R3
	elseif (ternary(Expression condition, Expression conditionSuccess, Expression conditionFail) := e) {
		debug("ternary");

		Vertex successVertex = createVertex(conditionSuccess, symbolMap), failVertex = createVertex(conditionFail, symbolMap);
		
		result += <successVertex, Exp(getNodePosition(e))>;
		result += <failVertex, Exp(getNodePosition(e))>;
	}
	// R4
	elseif (conjunction(Expression lhs, Expression rhs) := e) {
		debug("conjunction!");
		result += <createVertex(rhs, symbolMap), Exp(getNodePosition(e))>;
	}
	// R5
	elseif (objectDefinition({PropertyAssignment ","}* properties) := e || objectDefinitionCommaSuffix({PropertyAssignment ","}+ properties) := e) {
		debug("obj definition");
		// TODO what to do with the get/set
		for (p <- properties.args) {
			println("	property <p>");
			if (property(PropertyName name, Expression exp) := p) {
				debug("		assignment <name>");
				result += <createVertex(exp, symbolMap), Prop("<name>")>;
			}
		}
	}
	// Functions declared in functions ;)
	// R6
	elseif (function(Id id, {Id ","}* params, Block block) := e || functionAnonymous({Id ","}* params, Block block) := e) {
		map[str, SymbolMapEntry] inFunctionSymbolMap = getOverridableSymbolMap(symbolMap);
		inFunctionSymbolMap += ("<p>" : createEntry(p) | p <- params);
		
		// Non-anonymous functions need extra processing
		if (function(_, _, _) := e) {
			inFunctionSymbolMap += ("<id>" : createEntry(id));

			// No need for checking in the symbol map, R6 says this is always a var
			result += <Fun(getNodePosition(e)), createVarVertex(id)>;
		}

		// R6 rule #1 (Func -> Exp)
		result += <Fun(getNodePosition(e)), createVertex(e, symbolMap)>;
		debug("visiting function with scope: <domain(inFunctionSymbolMap)>");

		// The function blocks do not affect the current scope of the wrapping context
		// If there is an implementation, add the its graph to the current graph
		result += graph(createFlowGraphFromNestedStatements(block, inFunctionSymbolMap));
	}
	elseif (functionParams(Expression expression, _) := e) {
		//Position p = getNodePosition(e);
		//result += <Fun(p), createVertex(expression, symbolMap)>;
		print("");
	}
	elseif (functionNoParams(Expression expression) := e) {
		// result += <Fun(getNodePosition(e)), createVertex(expression, symbolMap)>;
		print("");
	}

	// Recurse over top level subexpressions	
	result += { retval | subtree <- e.args, retval <- createFlowGraphForExpressions(subtree, symbolMap) };
	
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
private Vertex createVertex(Tree root, map[str, SymbolMapEntry] symbolMap) {
	if ((Expression)`<Expression e> . <Id id>` := root) return Prop("<id>");
	elseif ((Expression e := root && id(Id id) := e) || Id id := root) {
		// both top level expressions and id's will match
		debug("looking up <id> in symbol map: <domain(symbolMap)>");

		foundDeclaration = findVariableDeclaration(id, symbolMap);
		if (foundDeclaration == nothing()) return Prop("<id>");
		else return Var("<id>", getNodePosition(unpack(foundDeclaration).tree));		
	}

	return Exp(getNodePosition(root)); 	
}

// Retrieve the position of a node
private Position getNodePosition(Tree t) {
	str filename = "";
	try	filename = t@\loc.file;
	catch: filename = "stdin";

	// We use the same formatting as in the original script	
	return Position(filename, t@\loc.begin.line, t@\loc.offset, (t@\loc.offset + t@\loc.length));
}

private rel[Vertex, Vertex] graph(tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] _] input) = fst(input);
private map[str, SymbolMapEntry] modifiedSymbolMap(tuple[rel[Vertex, Vertex] _, map[str, SymbolMapEntry] symbolMap] input) = snd(input);
private &T fst(tuple[&T, &U] input) = input[0];
private &U snd(tuple[&T, &U] input) = input[1];