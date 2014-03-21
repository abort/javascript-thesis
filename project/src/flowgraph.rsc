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

// TODO use for redefinition
data SymbolMapEntry = entry(Tree tree, bool overridable);

public rel[Vertex, Vertex] createFlowGraph(Source root) {
	rel[Vertex, Vertex] result = {};
	
	// Start with visiting global scope
	top-down-break visit (root) {
		// R7
		case func(FunctionDeclaration f):{
			// initialize symbolMap with parameters of the function declaration
			// TODO: maybe add name of the function to scope
			map[str, SymbolMapEntry] symbolMap = ("<p>" : entry(p, false) | p <- f.parameters) + ("<f.name>" : entry(f, false));
			debug("Visiting <f.name> with scope: <domain(symbolMap)>");
			
			// Discard the returned symbol table because it does not affect the global scope
			tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] _] visitStatementResult = createFlowGraphFromNestedStatements(f.implementation, symbolMap);

			result += visitStatementResult.graph;
			result += <Fun(getNodePosition(f)), Var("<f.name>", getNodePosition(f.name))>;
		}
		// global statements
		case stat(Statement s):{
			// TODO what to do for global for do's and properties
			// R1 on global scope level
			// No symbol table for global statements, thus we provide an empty map
			result += createFlowGraphFromGlobalStatements(s);
		}
	}
	
	return result;
}

private rel[Vertex, Vertex] createFlowGraphFromGlobalStatements(Tree root) {
	// Does not affect the scoping so we discard the returned symbol table
	tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] _] visitStatementResult = createFlowGraphFromStatements(root, (), true);
	return visitStatementResult.graph;
}   
private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromNestedStatements(Tree root, map[str, SymbolMapEntry] symbolMap) = createFlowGraphFromStatements(root, symbolMap, false);
private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromStatements(Tree root, map[str, SymbolMapEntry] symbolMap, bool globalScope) {
	rel[Vertex, Vertex] result = {};
	
	// Visits all top-level statements
	top-down-break visit (root) {
		case FunctionDeclaration f:{
			map[str, SymbolMapEntry] newSymbolMap = getOverridableSymbolMap(symbolMap) + ("<p>" : entry(p, false) | p <- f.parameters) + ("<f.name>" : entry(f, false));
			println("Visiting nested function (in function) <f.name> with scope: <domain(newSymbolMap)>");
			
			tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] _] visitFunctionResult = createFlowGraphFromNestedStatements(f.implementation, newSymbolMap);
			
			// Overall symbol table does not get affected
			// TODO: merge createFlowGraphFromStatements with createFlowGraph?
			result += visitFunctionResult.graph;
			result += <Fun(getNodePosition(f)), Var("<f.name>", getNodePosition(f.name))>;	
		}
		case Statement s:{
			println("Visiting top level statement <s> with symbolMap <domain(symbolMap)>");
			if (globalScope) {
				rel[Vertex, Vertex] graph = createFlowGraphFromGlobalStatement(s);
				result += graph;
			}
			else {
				// Retrieve a correctly scoped graph
				tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] symbolMapAdditions] visitStatementResult = createFlowGraphFromNestedStatement(s, symbolMap); 
	
				// Sadly enough the symbol table is appended by the sibblings :)
				result += visitStatementResult.graph;
				symbolMap += visitStatementResult.symbolMapAdditions;
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
			debug("Sub statements are not necessary and we dont need their expressions just yet, so we stop here (halt recursion)");
		}
		case Expression e:{
			println("Expression <e> as child of <root>");
			result += createFlowGraphFromExpression(e, symbolMap);
		}
	}
	
	return result;
}

// Propagation is not necessary to children that are statements, due to the createFlowGraphFromStatements handling such
// Global scope boolean helps for not appending the symbol table and thus creating wrong vertices
private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromNestedStatement(Statement s, map[str, SymbolMapEntry] symbolMap) = createFlowGraphFromStatement(s, symbolMap, false);
private rel[Vertex, Vertex] createFlowGraphFromGlobalStatement(Statement s) {
	tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] _] result = createFlowGraphFromStatement(s, (), true);
	return result.graph;
}

private tuple[rel[Vertex, Vertex], map[str, SymbolMapEntry]] createFlowGraphFromStatement(Statement s, map[str, SymbolMapEntry] symbolMap, bool globalScope) {
	rel[Vertex, Vertex] result = {};
	
	// TODO: VERY IMPORTANT Why does this not match on variablenosemi (tested with a variable assignment with a object definition that did not end with a ;) but it does on variablesemi
	// TODO:  
	if (forDoDeclarations({VariableDeclarationNoIn ","}+ declarations, _, _, _) := s || variableNoSemi({VariableDeclaration ","}+ declarations, _) := s
		 || variableSemi({VariableDeclaration ","}+ declarations) := s) {
		for (declaration <- declarations) {
			println("declaration: <declaration>");
			// This only works on assigned variables (not on just declared ones)
			// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
			if (filledDeclaration(Id id, Expression expression) := declaration) {
				println("Declaration <id>");
				// Variables can not be redeclared in the same scope
				if (!globalScope && isDeclarable("<id>", symbolMap)) symbolMap += ("<id>" : entry(id, false));
				Vertex rhsVertex = createVertex(expression, symbolMap);
				result += <rhsVertex, createVertex(id, symbolMap)>;	// Does not occur in the provided script but we assume it to be the same as a declaration + expression R1
				result += <rhsVertex, Exp(getNodePosition(id))>;
				debug("variable declaration for <id> creating node for <expression>");
			}
			
			// Add to symbol table
			if (emptyDeclaration(Id id) := declaration) {
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
	elseif (sw:switchCase() := s) {
		// Manually propagate expressions due to deeper nesting (SwitchBlock is a loose syntax thus an extra node)
//		result += createFlowGraphFromExpression(sw.expression, symbolMap);
		println("case block <sw.block>");
		if (c:cases(_) := sw.block) {
			println("cases <c.clauses>");
		}
		// TODO: recurse over statements in cases
	}
	// Recurse over blocks	
	elseif (block(b:filledBlock(_), _, _) := s) {
		debug("visiting nested block <b>");
		println("nested block visit");

		// Recurse on blocks
		tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] symbolMapAdditions] recursionResult = createFlowGraphFromStatements(b.statements, symbolMap, globalScope);

		result += recursionResult.graph;
		symbolMap += recursionResult.symbolMapAdditions;
	}

	// Recurse over substatements
	if (forDoDeclarations(_, _, _, Statement stmnt) := s || forDo(_, _, _, Statement stmnt) := s || 
		ifThen(_, Statement stmnt) := s || ifThenElseBlock(_, Statement stmnt, _) := s || forIn(_, _, Statement stmnt) := s ||
		forInDeclaration(_, _, Statement stmnt) := s
		|| doWhile(Statement stmnt, _) := s || doWhileLoose(Statement stmnt, _) := s) {
		println("Recursing statement for <s>");

		// A statement that is not a block is also possible, which should still work here
		tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] symbolMapAdditions] recursionResult = createFlowGraphFromStatement(stmnt, symbolMap, globalScope);

		result += recursionResult.graph;
		symbolMap += recursionResult.symbolMapAdditions;
	}

	// Recurse over blocks	
	elseif (ifThenBlock(_, Block b) := s || ifThenElseBlock(_, _, Block b) := s) {
		tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] symbolMapAdditions] recursionResult = createFlowGraphFromStatements(b.statements, symbolMap, globalScope);
	
		result += recursionResult.graph;
		// Blocks affect the symbol table for their sibblings
		symbolMap += recursionResult.symbolMapAdditions;				
	}

	// TODO with() statement?
	// Recurse over expressions
	result += createFlowGraphForExpressions(s, symbolMap);	
		
	return <result, symbolMap>;
}

// TODO check if propagations are necessary
private rel[Vertex, Vertex] createFlowGraphFromExpression(Expression e, map[str, SymbolMapEntry] symbolMap) {
	rel[Vertex, Vertex] result = {};
	println("Flow grph: <e>");
	
	// Assignments, NOT DECLARATIONS!
	// R1
	if (variableAssignment(Expression lhs, Expression rhs) := e ||
		variableAssignmentNoSemi(Expression lhs, Expression rhs) := e ||
		variableAssignmentBlockEnd(Expression lhs, Expression rhs) := e ||
		variableAssignmentLoose(Expression lhs, Expression rhs) := e ||
		variableAssignmentMulti(Expression lhs, Expression rhs) := e) {

		debug("assignment for <e> with symbol table <domain(symbolMap)>");

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
		println("conjunction!");
		result += <createVertex(rhs, symbolMap), Exp(getNodePosition(e))>;
	}
	// R5
	elseif (objectDefinition({PropertyAssignment ","}* properties) := e || objectDefinitionCommaSuffix({PropertyAssignment ","}+ properties) := e) {
		debug("obj definition");
		// TODO what to do with the get/set
		for (p <- properties.args) {
			println("Found property <p>");
			if (property(PropertyName name, Expression exp) := p) {
				debug("property assignment <name>");
				result += <createVertex(exp, symbolMap), Prop("<name>")>;
			}
		}
	}
	// Functions declared in functions ;)
	// R6
	elseif (function(Id id, {Id ","}* params, Block block) := e || functionAnonymous({Id ","}* params, Block block) := e) {
		map[str, SymbolMapEntry] inFunctionSymbolMap = getOverridableSymbolMap(symbolMap);
		inFunctionSymbolMap += ("<p>" : entry(p, false) | p <- params);
		
		// Non-anonymous functions need extra processing
		if (function(_, _, _) := e) {
			inFunctionSymbolMap += ("<id>" : entry(id, false));

			// No need for checking in the symbol table, R6 says this is always a var
			result += <Fun(getNodePosition(e)), createVarVertex(id)>;
		}

		// R6 rule #1 (Func -> Exp)
		result += <Fun(getNodePosition(e)), createVertex(e, symbolMap)>;
		println("Visiting function with scope: <domain(inFunctionSymbolMap)>");

		// The function blocks do not affect the current scope of the wrapping context
		// If there is an implementation, add the its graph to the current graph
		tuple[rel[Vertex, Vertex] graph, map[str, SymbolMapEntry] symbolMapAdditions] recursionResult = createFlowGraphFromNestedStatements(block, inFunctionSymbolMap);
		result += recursionResult.graph;
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
		debug("finding variableDeclarations for <id> in <domain(symbolMap)>");

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