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

data Vertex = Exp(Position p) |
			  Var(str name, Position p) | 
			  Prop(str name) | // prop i not declared as a local variable
			  Fun(Position p) | // function declaration
			  Empty();
data Position = Position(str filename, int line, int columnStart, int columnEnd) | Inexistent();

public void main(list[str] args) = main();
public void main() = println("Hi!");

public node getAST(Tree t) = implode(#node, t);
public node getAST(loc file) = implode(#node, parse(t));

// Make sure these trees start with the expression type
// TODO createVertex might still be broken, maybe due to expression not being the thing that is always inserted, change to visit id's etc instead of expressions
public Vertex createVertex(Tree root, map[str, Tree] symbolTable) {
	// TODO: make sure the symbol table's position of the variable is BEFORE the reference
	// TODO probably not top-down-break but returns are needed
	if ((Expression)`<Expression e> . <Id id>` := root) {
		println("property match");
		return Prop("<id>");
	}
	else if ((Expression e := root && id(Id id) := e) ||
			 Id id := root) {
			 // both top level expressions and id's will match
		println("finding variableDeclarations for <id> in <domain(symbolTable)>");
		foundDeclaration = findVariableDeclaration(id, symbolTable);
		if (foundDeclaration == nothing()) return Prop("<id>");
		else return Var("<id>", getNodePosition(unpack(foundDeclaration)));		
	}

	return Exp(getNodePosition(root)); 	
}

public Maybe[Tree] findVariableDeclaration(Id variableId, map[str, Tree] symbolTable) {
	if ("<variableId>" in symbolTable) {
		return just(symbolTable["<variableId>"]);
	}
	return nothing();
}

private Maybe[Statement] getStatement(BlockStatement stm) {
	if (stm is newLine || stm is semiColon || stm is statementContainingNested) {
		return just(stm.stm);
	}
	return nothing();
}

private Maybe[FunctionDeclaration] getFunctionDeclaration(BlockStatement stm) {
	if (stm is functionDecl) {
		return just(stm.stm);
	}
	return nothing();
}

private &A unpack(Maybe[&A] m) {
	if (just(val) := m) return val;
	throw "Can not unpack nothing"; 
}

public rel[Vertex, Vertex] createFlowGraph(Tree root) {
	rel[Vertex, Vertex] result = {};
	// symbolTable = ();
	top-down-break visit (root) {
		case func(FunctionDeclaration f):{
			// TODO: make sure to clear it after leaving it and make sure that nested functions dont destroy the symbol table
			// Reset symbol table
			map[str, Tree] symbolTable = ("<p>" : p | p <- f.parameters);
			println("Visiting <f.name> with scope: <domain(symbolTable)>");
			
			result += createFlowGraphFromTree(f.implementation, symbolTable);
			result += <Fun(getNodePosition(f)), Var("<f.name>", getNodePosition(f.name))>;
		}
		// R6
		// global statement
		case stat(Statement s):{
			// TODO what to do for global for do's and properties
			if (variableSemi(declarations) := s || variableNoSemi(declarations) := s || forDoDeclarations(declarations, _, _, _) := s) {
				for (declaration <- declarations) {
					if (/f:filledDeclaration(Id id, Expression expression) := declaration) {
						// Global scope so we won't add an id
						println("decl <id>");
						Vertex rhsVertex = createVertex(expression, ());
						result += <rhsVertex, createVertex(id, ())>;
						result += <rhsVertex, Exp(getNodePosition(f))>; // maybe getnodeposition decl.id?
						
						createFlowGraphFromExpression(expression, ());						
					}
				}	
			}
			elseif (expressionSemi(Expression e) := s || expressionLoose(Expression e) := s ||
					expressionBlockEnd(Expression e) := s || expressionNL(Expression e) := s) {
				println("Expressioooooon <e>");
				result += createFlowGraphFromExpression(e, ());
			}
			else {
				throw "unidentified statement <s>";
			}
			
		}
	}
	
	return result;
}

private rel[Vertex, Vertex] createFlowGraphFromTree(Tree root, map[str, Tree] symbolTable) {
	Tree fullTree = root;
	rel[Vertex, Vertex] result = {};
	
	top-down visit (root) {
		case Statement s: {
			// R1 - declarations with fill are also assignments? :)
			tuple[rel[Vertex, Vertex] relations, map[str, Tree] symbolTableAdditions] visitStatementResult = createFlowGraphFromStatement(s, symbolTable);
			// Sadly enough the symbol table is appended by the sibblings :)
			result += visitStatementResult.relations;
			symbolTable += visitStatementResult.symbolTableAdditions;
		}
	}

	return result;
}

private tuple[rel[Vertex, Vertex], map[str, Tree]] createFlowGraphFromStatement(Statement s, map[str, Tree] symbolTable) {
	rel[Vertex, Vertex] result = {};
	if (forDoDeclarations(declarations, _, _, _) := s || variableSemi(declarations) := s || variableNoSemi(declarations) := s) {
		for (declaration <- declarations) {
			// This only works on assigned variables (not on just declared ones)
			// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
			if (/filledDeclaration(Id id, Expression expression) := declaration) {
				symbolTable += ("<id>" : id);
				Vertex rhsVertex = createVertex(expression, symbolTable);
				result += <rhsVertex, createVertex(id, symbolTable)>; // TODO check if this was incorrect for real?
				result += <rhsVertex, Exp(getNodePosition(s))>; // maybe getnodeposition decl.id?
				
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
	else {
		throw "unidentified statement <s>";
	}
			
	return <result, symbolTable>;
}


// TODO check if propagations are necessary
private rel[Vertex, Vertex] createFlowGraphFromExpression(Expression e, map[str, Tree] symbolTable) {
	rel[Vertex, Vertex] result = {};
	if (variableAssignment(Expression lhs, Expression rhs) := e ||
		variableAssignmentNoSemi(Expression lhs, Expression rhs) := e ||
		variableAssignmentBlockEnd(Expression lhs, Expression rhs) := e ||
		variableAssignmentLoose(Expression lhs, Expression rhs) := e ||
		variableAssignmentMulti(Expression lhs, Expression rhs) := e) {
		// TODO this is not declaration!
		println("assignment for <e> with symbol table <domain(symbolTable)>");
		Vertex rhsVertex = createVertex(rhs, symbolTable);
		result += <rhsVertex, createVertex(lhs, symbolTable)>;
		result += <rhsVertex, Exp(getNodePosition(e))>;
		
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
	// R2
	elseif (disjunction(Expression lhs, Expression rhs) := e) {
		Vertex lhsVertex = createVertex(lhs, symbolTable), rhsVertex = createVertex(rhs, symbolTable);
		
		result += <lhsVertex, Exp(getNodePosition(disjunction))>;
		result += <rhsVertex, Exp(getNodePosition(disjunction))>;
		
		// propagate the expression flow creation
		result += createFlowGraphFromExpression(lhs, symbolTable);
		result += createFlowGraphFromExpression(rhs, symbolTable);	
	}
	// R4
	elseif (conjunction(Expression lhs, Expression rhs) := e) {
		Vertex rhsVertex = createVertex(rhs, symbolTable);

		result += <rhsVertex, Exp(getNodePosition(e))>;
		
		// propagate
		result += createFlowGraphFromExpression(lhs, symbolTable);
		result += createFlowGraphFromExpression(rhs, symbolTable);				
	}
	// In function functions
	elseif (function(Id id, {Id ","}* params, Block block) := e) {
		println("Function <id>");
		result += createFlowGraphFromTree(block, ("<p>" : p | p <- params) + symbolTable);
		println("Visiting <id> with scope: <domain(("<p>" : p | p <- params) + symbolTable)>");				
		result += <Fun(getNodePosition(e)), createVertex(id, symbolTable)>;  
	}
	elseif (functionAnonymous({Id ","}* params, Block block) := e) {
		println("Anonymous function (new sym <domain(("<p>" : p | p <- params) + symbolTable)>)");
		result += createFlowGraphFromTree(block, ("<p>" : p | p <- params) + symbolTable);
		println("Visiting anonymous with scope: <domain(("<p>" : p | p <- params) + symbolTable)>");
		result += <Fun(getNodePosition(e)), createVertex(e, symbolTable)>;
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
	elseif (PropertyAssignment(p) := e) {
		if (property(PropertyName name, Expression exp) := p) {
			// todo create vertex check?
			println("property assignment");
			result += <createVertex(exp, symbolTable), Prop("<name>")>;	
			
			result += createFlowGraphFromExpression(exp, symbolTable);		
		}
	}
	elseif (nestedExpression(Expression nested) := e) {
		result += createFlowGraphFromExpression(nested, symbolTable);
	}
	
	return result;
}


private rel[Vertex, Vertex] createFlowVariableAssignment(Tree parent, Expression lhs, Expression rhs) {
	Vertex lhsVertex = createVertex(lhs), rhsVertex = createVertex(rhs);
	
	rel[Vertex, Vertex] result = {};
	result += <rhsVertex, lhsVertex>;
	result += <rhsVertex, Exp(getNodePosition(parent))>;

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
	// println("<vertex1.x1> \< <vertex2.x2>");

	Position p = getPosition(vertex1.x);
	Position q = getPosition(vertex2.x);
	
	if (p != Inexistent() && q != Inexistent()) {
		if (p.line < q.line) {
			return true;
		}
		if (p != Inexistent() && p.line == q.line) {
			return (p.columnStart < q.columnStart);
		}
	}
	
	return false;
}

private Position getPosition(Vertex v) {
	Position position = Inexistent();
	visit (v) {
		case Exp(Position p):{
			position = p;
		}
		case Fun(Position p):{
			position = p;
		}
		case Var(_, Position p):{
			position = p;
		}
	}
	return position;
}

private void printStringWithPosition(str string, Position p) = print("<string>(<getPositionString(p)>)");
private str getPositionString(Position p) = "<p.filename>@<p.line>:<p.columnStart>-<p.columnEnd>";

private void printVertex(Vertex v) {
	visit (v) {
		case Exp(Position p):{
			printStringWithPosition("Expr", p);
		}
		case Prop(str name):{
			print("Prop(<name>)");
		}
		case Fun(Position p):{
			printStringWithPosition("Func", p);
		}
		case Var(str name, Position p):{
			print("Var(<name>, <getPositionString(p)>)");
		}
	}
}

private Position getNodePosition(Tree t) {
	str filename = "";
	try	filename = t@\loc.file;
	catch: filename = "stdin";
	
	return Position(filename, t@\loc.begin.line, t@\loc.offset, (t@\loc.offset + t@\loc.length));
	// This works but we want to have the byte position, rather than per line
	//return Position(filename, t@\loc.begin.line, t@\loc.begin.column, t@\loc.end.column);
}

