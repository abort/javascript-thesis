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
	//assert(Expression := root);
	
	// TODO: make sure the symbol table's position of the variable is BEFORE the reference
	
	// TODO probably not top-down-break but returns are needed
	top-down visit(root) 
	{
		case Id id: {
			println("finding variableDeclarations for <id>");
			foundDeclaration = findVariableDeclaration(id, symbolTable);
			if (foundDeclaration == nothing()) {
				return Prop("<id>");
			}
			else {				
				if (just(Tree t) := foundDeclaration) { 
					return Var("<id>", getNodePosition(t));
				}
			}				
		}
		case (Expression)`<Expression e> . <Id id>`: 
			return Prop("<id>"); // We ignore the prefix expression
		case exp:(FunctionDeclaration)`function <Id id> ( <{Id ","}* params> ) <Block b>`:
			return Fun(getNodePosition(exp));
		case exp:(Expression)`function ( <{Id ","}* params> ) <Block b>`:
			return Fun(getNodePosition(exp));
		case functionExpression:(Expression)`<Id id> ( <{Expression ","}* params> )`:
			return Fun(getNodePosition(functionExpression));
		default: return Exp(getNodePosition(root));
	}
	
	return Exp(getNodePosition(root));
}

public Maybe[Tree] findVariableDeclaration(Id variableId, map[str, Tree] symbolTable) {
	// TODO check location of declaration to be before the reference
	if ("<variableId>" in symbolTable) {
		println("found reference");
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

// do not forget: 
// TODO   | forIn: "for" "(" "var" Id "in" Expression ")" Statement
// Dangerous case that could be missed
public rel[Vertex, Vertex] createFlowGraphFromTree(Tree root) {
	Tree fullTree = root;
	rel[Vertex, Vertex] result = {};
	// Key: name, value: Tree
	map[str, Tree] symbolTable = ();
	top-down visit (root) {
		// TODO implement R1 for declaration in for loops etc		
		case func(FunctionDeclaration f):{
			// TODO: make sure to clear it after leaving it and make sure that nested functions dont destroy the symbol table
			// Reset symbol table
			symbolTable = ();
			for (param <- f.parameters) {
				symbolTable += ("<param>" : f);
			}

			result += <Fun(getNodePosition(f)), Var("<f.name>", getNodePosition(f.name))>;
		}
		case Statement s: {
			// TODO checks if this counts for for do?
			// R1 - declarations with fill are also assignments? :)
			// Just add id's to symbol table, they will be filled by assignment expressions later thus the verteci are created afterwards		
			if (forDoDeclarations(declarations, _, _, _) := s || variableSemi(declarations) := s || variableNoSemi(declarations) := s) {
				for (declaration <- declarations) {
					// This only works on assigned variables (not on just declared ones)
					// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
					if (/filledDeclaration(Id id, Expression expression) := declaration) {
						symbolTable += ("<id>" : id);
						Vertex rhsVertex = createVertex(expression, symbolTable);
						result += <rhsVertex, createVertex(id, symbolTable)>; // TODO check if this was incorrect for real?
						result += <rhsVertex, Exp(getNodePosition(s))>; // maybe getnodeposition decl.id?
						// result += <rhsVertex, Var("<id>", getNodePosition(id))>;
					}					
				}
			}
			else if (forInDeclaration(Id id, Statement _) := s) {
				symbolTable += ("<id>" : id);
				Vertex rhsVertex = createVertex(expression, symbolTable);	// TODO: make sure these rules ( like the above ones ) also count for this type of declaration :)
				result += <rhsVertex, createVertex(id, symbolTable)>;
				result += <rhsVertex, Exp(getNodePosition(s))>;
			}
		}
		case Expression e: {
			// R1
			if (variableAssignment(Expression lhs, Expression rhs) := e ||
				variableAssignmentNoSemi(Expression lhs, Expression rhs) := e ||
				variableAssignmentBlockEnd(Expression lhs, Expression rhs) := e ||
				variableAssignmentLoose(Expression lhs, Expression rhs) := e ||
				variableAssignmentMulti(Expression lhs, Expression rhs) := e) {
				// TODO this is not declaration!
				println("assignment for <e>");
				Vertex rhsVertex = createVertex(rhs, symbolTable);
				result += <rhsVertex, createVertex(lhs, symbolTable)>;
				result += <rhsVertex, Exp(getNodePosition(e))>;
			}
			// R3
			elseif (ternary(Expression condition, Expression conditionSuccess, Expression conditionFail) := e) {
				Vertex successVertex = createVertex(conditionSuccess, symbolTable), failVertex = createVertex(conditionFail, symbolTable);
				
				result += <successVertex, Exp(getNodePosition(e))>;
				result += <failVertex, Exp(getNodePosition(e))>;							
			}
			// R2
			elseif (disjunction(Expression lhs, Expression rhs) := e) {
				Vertex lhsVertex = createVertex(lhs, symbolTable), rhsVertex = createVertex(rhs, symbolTable);
				
				result += <lhsVertex, Exp(getNodePosition(disjunction))>;
				result += <rhsVertex, Exp(getNodePosition(disjunction))>;			
			}
			// R4
			elseif (conjunction(Expression lhs, Expression rhs) := e) {
				Vertex rhsVertex = createVertex(rhs, symbolTable);
	
				result += <rhsVertex, Exp(getNodePosition(e))>;				
			}
			// R6
			elseif (function(Id id, params, block) := e) {
				println("Function <id>");
				result += <Fun(getNodePosition(e)), createVertex(id, symbolTable)>;  
			}
			elseif (functionAnonymous(params, block) := e) {
				println("Function <e>");
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
			else {
				// Probably not necessary :)
				fail;
			}
		}
		// R5
		case PropertyAssignment p:{
			if (property(PropertyName name, Expression exp) := p) {
				// todo create vertex check?
				// println("property assignment");
				result += <createVertex(exp, symbolTable), Prop("<name>")>;			
			}
			else {
				fail;
			}
		}
		case stat(Statement s):{ // Only matches on top level "SourceElements"
			// Used to reset symbol table after leaving a function scope
			// TODO global declarations -> prop
			// TODO check nested functions and statements (e.g. check if we are in a function by line / char number
			symbolTable = ();
			println("Visiting statement <s>");
			// Global scope
			// TODO: verify
			if (variableSemi(declarations) := s || variableNoSemi(declarations) := s || forDoDeclarations(declarations, _, _, _) := s) {
				for (declaration <- declarations) {
					if (/f:filledDeclaration(Id id, Expression expression) := declaration) {
						symbolTable += ("<id>" : id);
						Vertex rhsVertex = createVertex(expression, symbolTable);
						result += <rhsVertex, createVertex(id, symbolTable)>;
						result += <rhsVertex, Exp(getNodePosition(f))>; // maybe getnodeposition decl.id?
						
						println("\n\n");
					}
				}	
			}
		}
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

