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

public rel[Vertex, Vertex] createFlowGraph(Source root) {
	rel[Vertex, Vertex] result = {};
	
	// Start with visiting global scope
	top-down-break visit (root) {
		// R7
		case func(FunctionDeclaration f):{
			// initialize symbolTable with parameters of the function declaration
			// TODO: maybe add name of the function to scope
			map[str, Tree] symbolTable = ("<p>" : p | p <- f.parameters) + ("<f.name>" : f);
			debug("Visiting <f.name> with scope: <domain(symbolTable)>");
			
			// Discard the returned symbol table because it does not affect the global scope
			tuple[rel[Vertex, Vertex] graph, map[str, Tree] _] visitStatementResult = createFlowGraphFromNestedStatements(f.implementation, symbolTable);

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
	tuple[rel[Vertex, Vertex] graph, map[str, Tree] _] visitStatementResult = createFlowGraphFromStatements(root, (), true);
	return visitStatementResult.graph;
}   
private tuple[rel[Vertex, Vertex], map[str, Tree]] createFlowGraphFromNestedStatements(Tree root, map[str, Tree] symbolTable) = createFlowGraphFromStatements(root, symbolTable, false);
private tuple[rel[Vertex, Vertex], map[str, Tree]] createFlowGraphFromStatements(Tree root, map[str, Tree] symbolTable, bool globalScope) {
	rel[Vertex, Vertex] result = {};
	
	// Visits all top-level statements
	top-down-break visit (root) {
		case FunctionDeclaration f:{
			map[str, Tree] newSymbolTable = ("<p>" : p | p <- f.parameters) + ("<f.name>" : f);
			debug("Visiting nested function (in function) <f.name> with scope: <domain(newSymbolTable)>");
			
			tuple[rel[Vertex, Vertex] graph, map[str, Tree] _] visitFunctionResult = createFlowGraphFromNestedStatements(f.implementation, symbolTable);
			
			// Overall symbol table does not get affected
			// TODO: merge createFlowGraphFromStatements with createFlowGraph?
			result += visitFunctionResult.graph;
			result += <Fun(getNodePosition(f)), Var("<f.name>", getNodePosition(f.name))>;	
		}
		case Statement s:{
			println("Visiting top level statement <s>");
			// iprintln(s);
			if (globalScope) {
				rel[Vertex, Vertex] graph = createFlowGraphFromGlobalStatement(s);
				result += graph;
			}
			else {
				// Retrieve a correctly scoped graph
				tuple[rel[Vertex, Vertex] graph, map[str, Tree] symbolTableAdditions] visitStatementResult = createFlowGraphFromNestedStatement(s, symbolTable); 
	
				// Sadly enough the symbol table is appended by the sibblings :)
				result += visitStatementResult.graph;
				symbolTable += visitStatementResult.symbolTableAdditions;
			}
			
			result += createFlowGraphForExpressions(s, symbolTable);
		}
	}

	return <result, symbolTable>;
}

private rel[Vertex, Vertex] createFlowGraphForExpressions(Tree root, map[str, Tree] symbolTable) {
	rel[Vertex, Vertex] result = {};

	// Visit top level expressions that are children of statements
	// Expressions will recurse themselves
	top-down-break visit (root.args) {
		case Statement s:{
			debug("Sub statements are not necessary and we dont need their expressions just yet, so we stop here (halt recursion)");
		}
		case Expression e:{
			debug("Expression <e> as child of <root>");
			result += createFlowGraphFromExpression(e, symbolTable);
		}
	}
	
	return result;
} 

// Propagation is not necessary to children that are statements, due to the createFlowGraphFromStatements handling such
// Global scope boolean helps for not appending the symbol table and thus creating wrong vertices
private tuple[rel[Vertex, Vertex], map[str, Tree]] createFlowGraphFromNestedStatement(Statement s, map[str, Tree] symbolTable) = createFlowGraphFromStatement(s, symbolTable, false);
private rel[Vertex, Vertex] createFlowGraphFromGlobalStatement(Statement s) {
	tuple[rel[Vertex, Vertex] graph, map[str, Tree] _] result = createFlowGraphFromStatement(s, (), true);
	return result.graph;
}

private tuple[rel[Vertex, Vertex], map[str, Tree]] createFlowGraphFromStatement(Statement s, map[str, Tree] symbolTable, bool globalScope) {
	rel[Vertex, Vertex] result = {};

	println("statement: <s> new symbol table: <domain(symbolTable)>");
	
	// TODO: VERY IMPORTANT Why does this not match on variablenosemi (tested with a variable assignment with a object definition that did not end with a ;) but it does on variablesemi
	if (forDoDeclarations(declarations, _, _, _) := s || variableNoSemi(declarations, _) := s || variableSemi(declarations) := s) {
		for (declaration <- declarations) {
			// This only works on assigned variables (not on just declared ones)
			// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
			for (/f:filledDeclaration(Id id, Expression expression) := declarations) {
				if (!globalScope) symbolTable += ("<id>" : id);
				Vertex rhsVertex = createVertex(expression, symbolTable);
				result += <rhsVertex, createVertex(id, symbolTable)>;
				result += <rhsVertex, Exp(getNodePosition(id))>;
				debug("variable declaration for <id> creating node for <expression>");
			}
		}
	}
	elseif (forInDeclaration(Id id, Expression e, Statement _) := s) {
		// Assumption to count as a simple declaration (so not R1, TODO: DOCUMENT!)
		if (!globalScope) symbolTable += ("<id>" : id);
		Vertex rhsVertex = createVertex(e, symbolTable);
	}
	elseif (sw:switchCase() := s) {
		// Manually propagate expressions due to deeper nesting (SwitchBlock is a loose syntax thus an extra node)
//		result += createFlowGraphFromExpression(sw.expression, symbolTable);
		println("case block <sw.block>");
		if (c:cases(_) := sw.block) {
			println("cases <c.clauses>");
		}
		// TODO: recurse over statements in cases
	}

	// Recurse over blocks	
	elseif (block(b:filledBlock(_), _, _) := s) {
		debug("visiting nested block");
		println("nested blzkx <b>");

		// Recurse on blocks
		tuple[rel[Vertex, Vertex] graph, map[str, Tree] symbolTableAdditions] recursionResult = createFlowGraphFromStatements(b.statements, symbolTable, globalScope);

		result += recursionResult.graph;
		symbolTable += recursionResult.symbolTableAdditions;
	}
	
	// Recurse over substatements
	if (forDoDeclarations(_, _, _, Statement stmnt) := s || forDo(_, _, _, Statement stmnt) := s || 
		ifThen(_, Statement stmnt) := s || ifThenElseBlock(_, Statement stmnt, _) := s || forIn(_, _, Statement stmnt) := s ||
		forInDeclaration(_, _, Statement stmnt) := s
		|| doWhile(Statement stmnt, _) := s || doWhileLoose(Statement stmnt, _) := s) {
		println("Recursing statement for <s>");
		tuple[rel[Vertex, Vertex] graph, map[str, Tree] symbolTableAdditions] recursionResult = createFlowGraphFromStatements(stmnt, symbolTable, globalScope);

		result += recursionResult.graph;
		symbolTable += recursionResult.symbolTableAdditions;		
	}
	// Recurse over blocks	
	if (ifThenBlock(_, Block b) := s || ifThenElseBlock(_, _, Block b) := s) {
		if (f:filledBlock(_) := b) {
			println("filled if block");
			tuple[rel[Vertex, Vertex] graph, map[str, Tree] symbolTableAdditions] recursionResult = createFlowGraphFromStatements(b.statements, symbolTable, globalScope);
	
			result += recursionResult.graph;
			symbolTable += recursionResult.symbolTableAdditions;				
		}
	}

	// TODO with() statement?

	return <result, symbolTable>;
}

// TODO check if propagations are necessary
private rel[Vertex, Vertex] createFlowGraphFromExpression(Expression e, map[str, Tree] symbolTable) {
	rel[Vertex, Vertex] result = {};
	// Assignments, NOT DECLARATIONS!
	// R1
	if (variableAssignment(Expression lhs, Expression rhs) := e ||
		variableAssignmentNoSemi(Expression lhs, Expression rhs) := e ||
		variableAssignmentBlockEnd(Expression lhs, Expression rhs) := e ||
		variableAssignmentLoose(Expression lhs, Expression rhs) := e ||
		variableAssignmentMulti(Expression lhs, Expression rhs) := e) {
		println("assignment: <e>");
		debug("assignment for <e> with symbol table <domain(symbolTable)>");
		Vertex rhsVertex = createVertex(rhs, symbolTable);
		result += <rhsVertex, createVertex(lhs, symbolTable)>;
		result += <rhsVertex, Exp(getNodePosition(e))>;
	}
	// R2
	elseif (disjunction(Expression lhs, Expression rhs) := e) {
		Vertex lhsVertex = createVertex(lhs, symbolTable), rhsVertex = createVertex(rhs, symbolTable);
		
		result += <lhsVertex, Exp(getNodePosition(disjunction))>;
		result += <rhsVertex, Exp(getNodePosition(disjunction))>;
	}
	// R3
	elseif (ternary(Expression condition, Expression conditionSuccess, Expression conditionFail) := e) {
		debug("ternary");
		Vertex successVertex = createVertex(conditionSuccess, symbolTable), failVertex = createVertex(conditionFail, symbolTable);
		
		result += <successVertex, Exp(getNodePosition(e))>;
		result += <failVertex, Exp(getNodePosition(e))>;
	}
	// R4
	elseif (conjunction(Expression lhs, Expression rhs) := e) {
		Vertex rhsVertex = createVertex(rhs, symbolTable);
		println("conjunction!");
		result += <rhsVertex, Exp(getNodePosition(e))>;
	}
	// R5
	elseif (objectDefinition({PropertyAssignment ","}* properties) := e ||
		objectDefinitionCommaSuffix({PropertyAssignment ","}+ properties) := e) {
		debug("obj definition");
		// TODO what to do with the get/set
		// TODO recurse on properties rather than deep match
		for (p <- properties.args) {
			println("Found property <p>");
			if (property(PropertyName name, Expression exp) := p) {
				debug("property assignment <name>");
				result += <createVertex(exp, symbolTable), Prop("<name>")>;
			}
		}
	}
	// Functions declared in functions ;)
	// R6
	// TODO combine both R6 in one if
	elseif (functionAnonymous({Id ","}* params, Block block) := e) {
		debug("Visiting anonymous with scope: <domain(("<p>" : p | p <- params) + symbolTable)>");

		// the function blocks do not affect the current scope of the wrapping context
		if (f:filledBlock(_) := block) {
			tuple[rel[Vertex, Vertex] graph, map[str, Tree] symbolTableAdditions] recursionResult = createFlowGraphFromNestedStatements(f.statements, ("<p>" : p | p <- params) + symbolTable);
			result += recursionResult.graph;
		}

		result += <Fun(getNodePosition(e)), createVertex(e, symbolTable)>;
	}
	// R6 #2
	elseif (function(Id id, {Id ","}* params, Block block) := e) {
		println("function <e>");
		
		if (f:filledBlock(_) := block) {
			map[str, Tree] newSymbolTable = ("<p>" : p | p <- params) + ("<id>" : id) + symbolTable;
			tuple[rel[Vertex, Vertex] graph, map[str, Tree] symbolTableAdditions] recursionResult = createFlowGraphFromNestedStatements(f.statements, newSymbolTable);
			result += recursionResult.graph;
			
			debug("Visiting function <id> with scope: <domain(newSymbolTable)>");
		}

		// No need for checking in the symbol table, R6 says this is always a var
		result += <Fun(getNodePosition(e)), createVertex(e, symbolTable)>;
		result += <Fun(getNodePosition(e)), createVarVertex(id)>;
		// TODO: check when we refer to it on a global level it should be in the symbol table
	}
	elseif (functionParams(Expression expression, _) := e) {
		//Position p = getNodePosition(e);
		//result += <Fun(p), createVertex(expression, symbolTable)>;
		print("");
	}
	elseif (functionNoParams(Expression expression) := e) {
		// result += <Fun(getNodePosition(e)), createVertex(expression, symbolTable)>;
		print("");
	}

	// Recurse over top level subexpressions
	result += { retval | subtree <- e.args, retval <- createFlowGraphForExpressions(subtree, symbolTable) };
	
	return result;
}

// Find variable declaration in symbol map
private Maybe[Tree] findVariableDeclaration(Id variableId, map[str, Tree] symbolTable) {
	if ("<variableId>" in symbolTable) return just(symbolTable["<variableId>"]);
	return nothing();
}

// Unpacking a maybe statement
private &A unpack(Maybe[&A] m) {
	if (just(val) := m) return val;
	throw "Can not unpack nothing"; 
}

// Creating vertices
private Vertex createVarVertex(Id id) = Var("<id>", getNodePosition(id));
private Vertex createVertex(Tree root, map[str, Tree] symbolTable) {
	if ((Expression)`<Expression e> . <Id id>` := root) return Prop("<id>");
	elseif ((Expression e := root && id(Id id) := e) || Id id := root) {
		// both top level expressions and id's will match
		debug("finding variableDeclarations for <id> in <domain(symbolTable)>");

		foundDeclaration = findVariableDeclaration(id, symbolTable);
		if (foundDeclaration == nothing()) return Prop("<id>");
		else return Var("<id>", getNodePosition(unpack(foundDeclaration)));		
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