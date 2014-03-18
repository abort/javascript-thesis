module flowgraph

import EcmaScript;
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

data Vertex = Exp(Position p) | Var(str name, Position p) | Prop(str name) | Fun(Position p) | Empty();
data Position = Position(str filename, int line, int columnStart, int columnEnd) | Inexistent();

public void printFlowGraph(rel[Vertex, Vertex] graph) {
	list[tuple[Vertex, Vertex]] printable = [ <x,y> | <x, y> <- graph ];
	for (<x, y> <- sort(printable, lessThanVertex)) {
		printVertex(x);
		print(" -\> ");
		printVertex(y);
		println();
	}
}

public rel[Vertex, Vertex] createFlowGraph(Tree root) {
	rel[Vertex, Vertex] result = {};
	top-down-break visit (root) {
		// R7
		case func(FunctionDeclaration f):{
			// initialize symbolTable with parameters of the function declaration
			map[str, Tree] symbolTable = ("<p>" : p | p <- f.parameters);
			debug("Visiting <f.name> with scope: <domain(symbolTable)>");
			
			result += createFlowGraphFromNestedStatements(f.implementation, symbolTable);
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

private rel[Vertex, Vertex] createFlowGraphFromGlobalStatements(Tree root) = createFlowGraphFromStatements(root, (), true);   
private rel[Vertex, Vertex] createFlowGraphFromNestedStatements(Tree root, map[str, Tree] symbolTable) = createFlowGraphFromStatements(root, symbolTable, false);
private rel[Vertex, Vertex] createFlowGraphFromStatements(Tree root, map[str, Tree] symbolTable, bool globalScope) {
	rel[Vertex, Vertex] result = {};
	
	// Visits all statements
	top-down visit (root) {
		case Statement s:{
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
	// TODO Recurse on direct expression children
	rel[Vertex, Vertex] result = {};
	if (forDoDeclarations(declarations, _, _, _) := s || variableSemi(declarations) := s || variableNoSemi(declarations) := s) {
		for (declaration <- declarations) {
			// This only works on assigned variables (not on just declared ones)
			// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
			if (/f:filledDeclaration(Id id, Expression expression) := declaration) {
				if (!globalScope) symbolTable += ("<id>" : id);
				Vertex rhsVertex = createVertex(expression, symbolTable);
				result += <rhsVertex, createVertex(id, symbolTable)>; // TODO check if this was incorrect for real?
				result += <rhsVertex, Exp(getNodePosition(id))>; // maybe getnodeposition decl.id?
				debug("added for <id> creating node for <expression>");
			}
		}
	}
	else if (forInDeclaration(Id id, Expression e, Statement _) := s) {
		debug("forIn Decl");
	
		// Assumption to count as a simple declaration (so not R1, TODO: DOCUMENT!)
		if (!globalScope) symbolTable += ("<id>" : id);
		Vertex rhsVertex = createVertex(e, symbolTable);
	}
	
	// Propagate flowgraph creation to immediate expression children
	for (Expression e <- s.args) {
		debug("Propagating flow graph creation for expression <e> as direct child of <s>");
		result += createFlowGraphFromExpression(e, symbolTable);
	}
	for ({Expression ","}* expressions <- s.args) {
		for (Expression e <- expressions) {
			debug("Propagating flow graph creation for expression <e> as direct child of <s>");
			result += createFlowGraphFromExpression(e, symbolTable);
		}
	}

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
		Vertex successVertex = createVertex(conditionSuccess, symbolTable), failVertex = createVertex(conditionFail, symbolTable);
		
		result += <successVertex, Exp(getNodePosition(e))>;
		result += <failVertex, Exp(getNodePosition(e))>;
	}
	// R4
	elseif (conjunction(Expression lhs, Expression rhs) := e) {
		Vertex rhsVertex = createVertex(rhs, symbolTable);

		result += <rhsVertex, Exp(getNodePosition(e))>;		
	}
	// R5
	elseif (objectDefinition({PropertyAssignment ","}* p) := e) {
		// TODO what to do with the get/set
		for (/property(PropertyName name, Expression exp) := p) {
			// todo create vertex check?
			debug("property assignment <name>");
			result += <createVertex(exp, symbolTable), Prop("<name>")>;	
		}
	}
	// Functions declared in functions ;)
	// R6
	elseif (functionAnonymous({Id ","}* params, Block block) := e) {
		result += createFlowGraphFromNestedStatements(block, ("<p>" : p | p <- params) + symbolTable);
		debug("Visiting anonymous with scope: <domain(("<p>" : p | p <- params) + symbolTable)>");
		result += <Fun(getNodePosition(e)), createVertex(e, symbolTable)>;
	}
	// R6 #2	
	elseif (function(Id id, {Id ","}* params, Block block) := e) {
		map[str, Tree] newSymbolTable = ("<p>" : p | p <- params) + ("<id>" : id) + symbolTable;
		result += createFlowGraphFromNestedStatements(block, newSymbolTable);
		debug("Visiting function <id> with scope: <domain(newSymbolTable)>");

		// No need for checking in the symbol table, R6 says this is always a var
		result += <Fun(getNodePosition(e)), createVarVertex(id)>;  
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

private bool lessThanVertex(tuple[Vertex x, Vertex _] vertex1, tuple[Vertex x, Vertex _] vertex2) {
	Position p = getPosition(vertex1.x), q = getPosition(vertex2.x);
	
	if (p != Inexistent() && q != Inexistent()) {
		if (p.line < q.line) return true;
		if (p != Inexistent() && p.line == q.line) return (p.columnStart < q.columnStart);
	}
	
	return false;
}

private void printVertex(Vertex v) {
	if (Exp(Position p) := v) printStringWithPosition("Expr", p);
	elseif (Prop(str name) := v) print("Prop(<name>)");
	elseif (Fun(Position p) := v) printStringWithPosition("Func", p);
	elseif (Var(str name, Position p) := v) print("Var(<name>, <getPositionString(p)>)");
}

private Position getNodePosition(Tree t) {
	str filename = "";
	try	filename = t@\loc.file;
	catch: filename = "stdin";

	// We use the same formatting as in the original script	
	return Position(filename, t@\loc.begin.line, t@\loc.offset, (t@\loc.offset + t@\loc.length));
}

private Position getPosition(Vertex v) {
	Position position = Inexistent();
	if (Exp(Position p) := v) position = p;
	elseif (Fun(Position p) := v) position = p;
	elseif (Var(_, Position p) := v) position = p;
	return position;
}

private void printStringWithPosition(str string, Position p) = print("<string>(<getPositionString(p)>)");
private str getPositionString(Position p) = "<p.filename>@<p.line>:<p.columnStart>-<p.columnEnd>";