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

data Vertex = Exp(Position p) | Var(str name, Position p) | Prop(str name) | Fun(Position p) | Empty();
data Position = Position(str filename, int line, int columnStart, int columnEnd) | Inexistent();

private void printStringWithPosition(str string, Position p) = print("<string>(<getPositionString(p)>)");
private str getPositionString(Position p) = "<p.filename>@<p.line>:<p.columnStart>-<p.columnEnd>";

// Creating vertices
private Vertex createVarVertex(Id id) = Var("<id>", getNodePosition(id));
public Vertex createVertex(Tree root, map[str, Tree] symbolTable) {
	if ((Expression)`<Expression e> . <Id id>` := root) return Prop("<id>");
	elseif ((Expression e := root && id(Id id) := e) || Id id := root) {
		// both top level expressions and id's will match
		println("finding variableDeclarations for <id> in <domain(symbolTable)>");

		foundDeclaration = findVariableDeclaration(id, symbolTable);
		if (foundDeclaration == nothing()) return Prop("<id>");
		else return Var("<id>", getNodePosition(unpack(foundDeclaration)));		
	}

	return Exp(getNodePosition(root)); 	
}

// Find variable declaration in symbol map
public Maybe[Tree] findVariableDeclaration(Id variableId, map[str, Tree] symbolTable) {
	if ("<variableId>" in symbolTable) return just(symbolTable["<variableId>"]);
	return nothing();
}

// Unpacking a maybe statement
private &A unpack(Maybe[&A] m) {
	if (just(val) := m) return val;
	throw "Can not unpack nothing"; 
}

public rel[Vertex, Vertex] createFlowGraph(Tree root) {
	rel[Vertex, Vertex] result = {};
	top-down-break visit (root) {
		// R7
		case func(FunctionDeclaration f):{
			// initialize symbolTable with parameters of the function declaration
			map[str, Tree] symbolTable = ("<p>" : p | p <- f.parameters);
			println("Visiting <f.name> with scope: <domain(symbolTable)>");
			
			result += createFlowGraphFromStatements(f.implementation, symbolTable);
			result += <Fun(getNodePosition(f)), Var("<f.name>", getNodePosition(f.name))>;
		}
		// global statements
		case stat(Statement s):{
			// TODO what to do for global for do's and properties
			// R1 on global scope level
			// No symbol table for global statements, thus we provide an empty map
			tuple[rel[Vertex, Vertex] graph, map[str, Tree] _] statementResult = createFlowGraphFromStatement(s, ());
			result += statementResult.graph;
		}
	}
	
	return result;
}

private rel[Vertex, Vertex] createFlowGraphFromStatements(Tree root, map[str, Tree] symbolTable) {
	rel[Vertex, Vertex] result = {};
	
	// Visits all statements
	top-down visit (root) {
		case Statement s:{
			tuple[rel[Vertex, Vertex] relations, map[str, Tree] symbolTableAdditions] visitStatementResult = createFlowGraphFromStatement(s, symbolTable);
			
			// Sadly enough the symbol table is appended by the sibblings :)
			result += visitStatementResult.relations;
			symbolTable += visitStatementResult.symbolTableAdditions;
		}
	}

	return result;
}

// Propagation is not necessary to children that are statements, due to the createFlowGraphFromStatements handling such
private tuple[rel[Vertex, Vertex], map[str, Tree]] createFlowGraphFromStatement(Statement s, map[str, Tree] symbolTable) {
	rel[Vertex, Vertex] result = {};
	if (forDoDeclarations(declarations, _, _, _) := s || variableSemi(declarations) := s || variableNoSemi(declarations) := s) {
		for (declaration <- declarations) {
			// This only works on assigned variables (not on just declared ones)
			// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
			if (/f:filledDeclaration(Id id, Expression expression) := declaration) {
				symbolTable += ("<id>" : id);
				Vertex rhsVertex = createVertex(expression, symbolTable);
				result += <rhsVertex, createVertex(id, symbolTable)>; // TODO check if this was incorrect for real?
				result += <rhsVertex, Exp(getNodePosition(id))>; // maybe getnodeposition decl.id?
				println("added for <id> creating node for <expression>");
				
				result += createFlowGraphFromExpression(expression, symbolTable);
			}
		}
	}
	else if (forInDeclaration(Id id, Statement _) := s) {
		symbolTable += ("<id>" : id);
		Vertex rhsVertex = createVertex(expression, symbolTable);	// TODO: make sure these rules ( like the above ones ) also count for this type of declaration :)
		result += <rhsVertex, createVertex(id, symbolTable)>;
		result += <rhsVertex, Exp(getNodePosition(s))>;
	}
	// TODO necessary?
	elseif (expressionSemi(Expression e) := s || expressionLoose(Expression e) := s ||
			expressionBlockEnd(Expression e) := s || expressionNL(Expression e) := s) {
		result += createFlowGraphFromExpression(e, symbolTable);
	}
	else throw "unidentified statement <s>";
			
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
		println("assignment for <e> with symbol table <domain(symbolTable)>");
		Vertex rhsVertex = createVertex(rhs, symbolTable);
		result += <rhsVertex, createVertex(lhs, symbolTable)>;
		result += <rhsVertex, Exp(getNodePosition(e))>;
		
		// propagate the expression flow creation
		result += createFlowGraphFromExpression(lhs, symbolTable);
		result += createFlowGraphFromExpression(rhs, symbolTable);		
	}
	// R2
	elseif (disjunction(Expression lhs, Expression rhs) := e) {
		Vertex lhsVertex = createVertex(lhs, symbolTable), rhsVertex = createVertex(rhs, symbolTable);
		
		result += <lhsVertex, Exp(getNodePosition(disjunction))>;
		result += <rhsVertex, Exp(getNodePosition(disjunction))>;
		
		// propagate the expression flow creation
		result += createFlowGraphFromExpression(lhs, symbolTable);
		result += createFlowGraphFromExpression(rhs, symbolTable);	
	}
	// R3
	elseif (ternary(Expression condition, Expression conditionSuccess, Expression conditionFail) := e) {
		Vertex successVertex = createVertex(conditionSuccess, symbolTable), failVertex = createVertex(conditionFail, symbolTable);
		
		result += <successVertex, Exp(getNodePosition(e))>;
		result += <failVertex, Exp(getNodePosition(e))>;

		// propagate the expression flow creation
		result += createFlowGraphFromExpression(conditionSuccess, symbolTable);
		result += createFlowGraphFromExpression(conditionFail, symbolTable);
		result += createFlowGraphFromExpression(condition, symbolTable);
	}
	// R4
	elseif (conjunction(Expression lhs, Expression rhs) := e) {
		Vertex rhsVertex = createVertex(rhs, symbolTable);

		result += <rhsVertex, Exp(getNodePosition(e))>;
		
		// propagate
		result += createFlowGraphFromExpression(lhs, symbolTable);
		result += createFlowGraphFromExpression(rhs, symbolTable);				
	}
	// R5
	elseif (objectDefinition({PropertyAssignment ","}* p) := e) {
		// TODO what to do with the get/set
		for (/property(PropertyName name, Expression exp) := p) {
			// todo create vertex check?
			println("property assignment <name>");
			result += <createVertex(exp, symbolTable), Prop("<name>")>;	
			result += createFlowGraphFromExpression(exp, symbolTable);		
		}
	}
	// Functions declared in functions ;)
	// R6
	elseif (functionAnonymous({Id ","}* params, Block block) := e) {
		println("Anonymous function (new sym <domain(("<p>" : p | p <- params) + symbolTable)>)");
		result += createFlowGraphFromStatements(block, ("<p>" : p | p <- params) + symbolTable);
		println("Visiting anonymous with scope: <domain(("<p>" : p | p <- params) + symbolTable)>");
		println("Anonymous function at <getNodePosition(e)>");
		result += <Fun(getNodePosition(e)), createVertex(e, symbolTable)>;
	}
	// R6 #2	
	elseif (function(Id id, {Id ","}* params, Block block) := e) {
		println("Function <id>");
		map[str, Tree] newSymbolTable = ("<p>" : p | p <- params) + ("<id>" : id) + symbolTable;
		result += createFlowGraphFromStatements(block, newSymbolTable);
		println("Visiting <id> with scope: <domain(newSymbolTable)>");

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
	elseif (nestedExpression(Expression nested) := e) {
		result += createFlowGraphFromExpression(nested, symbolTable);
	}
	
	// Assume manual propagation for expressions that are matched due to ruling
	if (result == {}) {
		// Propagate subexpressions to add to the results, in case they are not manually propagated
		for (/Expression subexpression := e) {
			if (subexpression == e) continue;
			println("Recursing to subexpression: <subexpression> part of <e>");
			result += createFlowGraphFromExpression(subexpression, symbolTable);
		}
	}
	
	return result;
}

public void printFlowGraph(rel[Vertex, Vertex] graph) {
	list[tuple[Vertex, Vertex]] printable = [ <x,y> | <x, y> <- graph ];
	for (<x, y> <- sort(printable, lessThanVertex)) {
		printVertex(x);
		print(" -\> ");
		printVertex(y);
		println();
	}
}

private bool lessThanVertex(tuple[Vertex x, Vertex _] vertex1, tuple[Vertex x, Vertex _] vertex2) {
	Position p = getPosition(vertex1.x), q = getPosition(vertex2.x);
	
	if (p != Inexistent() && q != Inexistent()) {
		if (p.line < q.line) return true;
		if (p != Inexistent() && p.line == q.line) return (p.columnStart < q.columnStart);
	}
	
	return false;
}

private Position getPosition(Vertex v) {
	Position position = Inexistent();
	if (Exp(Position p) := v) position = p;
	elseif (Fun(Position p) := v) position = p;
	elseif (Var(_, Position p) := v) position = p;
	return position;
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

