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
import util::Maybe;

data Vertex = Exp(Position p) |
			  Var(str name, Position p) | 
			  Prop(str name) | // prop i not declared as a local variable
			  Fun(Position p) | // function declaration
			  Empty();
data Position = Position(str filename, int line, int columnStart, int columnEnd);

public void main(list[str] args) = main();
public void main() = println("Hi!");

public node getAST(Tree t) = implode(#node, t);
public node getAST(loc file) = implode(#node, parse(t));

// Make sure these trees start with the expression type
public Vertex createVertex(Tree root, Tree fullTree) {
	assert(Expression := root);

	Vertex result = Empty();
	top-down-break visit(root) 
	{
		case (Id)`<Id id>`:{
			println("finding variableDeclarations for <id>");
			// findVariableUpwards(id, id);
			foundDeclaration = findVariableDeclaration(id, fullTree);
			if (foundDeclaration == nothing()) {
				result = Prop("<id>");
			}
			else {				
				if (just(Tree t) := foundDeclaration) { 
					result = Var("<id>", getNodePosition(t));
				}
			}
		}
		case (Expression)`<Expression e> . <Id id>`: 
			result = Prop("<id>"); // We ignore the prefix expression
		case exp:(FunctionDeclaration)`function <Id id> ( <{Id ","}* params> ) <Block b>`:
			result = Fun(getNodePosition(exp));
		case exp:(Expression)`function ( <{Id ","}* params> ) <Block b>`:
			result = Fun(getNodePosition(exp));
		case functionExpression:(Expression)`<Id id> ( <{Expression ","}* params> )`:
			result = Fun(getNodePosition(functionExpression));
	}
	
	if (result == Empty()) result = Exp(getNodePosition(root));
	
	return result;
}

public Maybe[Tree] findVariableUpwards(Id variableId, Tree idPosition) {
	bottom-up visit(idPosition) {
		case Statement s: {
			println("visit statement");
			for (child <- getChildren(s)) {
				println("children: <child>");
			}
		}
	
		case exp:(FunctionDeclaration)`function <Id _> ( <{Id ","}* params> ) <Block _>`: {
			// found in params
			for (id <- params) {
				if (id == variableId) return just(id);
			}
		
			// We do not have access outside the function scope :)
			break;
		}
	}
	
	return nothing();
}

public Maybe[Tree] findVariableDeclaration(Id variableId, Tree currentPosition) {
	// Redeclared vars do not affect initial declarance.... hence we need to always visit
	top-down visit(currentPosition) {
		case exp:(FunctionDeclaration)`function <Id id> ( <{Id ","}* params> ) <Block _>`: {
			println("visiting function");
			// TODO: apparently this is a prop, not a var:
			// if (variableId == id) return just(exp);
			for (param <- params) {
				// TODO make sure we are in the same scope
				if (param == variableId) {
					println("params: <param>");
				
					return just(param);
				}
			}
			
			// We already traversed block b due to recursive bottom-up visits :)
		}	
		//case block:(Block)`{ 
		case block:(Block)`{ <BlockStatement head> <BlockStatements tail> }`: {
			return findVariableInBlock(variableId, head, just(tail));
		}
	}
	
	
	// TODO temporary!
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

// TODO traverse variableNoIn etc
private Maybe[Tree] findVariableInBlock(Id variableId, BlockStatement statement, Maybe[BlockStatements] statementsTail) {
	actualStatement = getStatement(statement);
	if (actualStatement != nothing() && (variableSemi(declarations) := unpack(actualStatement)
		|| variableNoSemi(declarations) := unpack(actualStatement))) { 	
		println("<unpack(actualStatement)>");
		for (decl <- declarations) {
			// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
			if (/filledDeclaration(Id id, Expression expression) := decl || /emptyDeclaration(Id id) := decl) {
				if (id == variableId) return just(id);
			}
		}
	}
	
	/*
	if (actualStatement != nothing() && (BlockStatement)`for ( var <{VariableDeclarationNoIn ","}+ declarations> ; <{Expression ","}* _> ; <{Expression ","}* _> ) <Statement stmnt>` := actualStatement) {
	println("a2");
		for (decl <- declarations) {
			if ((VariableDeclarationNoIn)`<Id id> = <Expression _>` := decl) {
				if (id == variableId) return just(statement);
			} 
		}
	}
	*/
	if ((BlockStatement)`{ <BlockStatement head> <BlockStatements tail> }` := statement) {
		// blocks also have no scoping, thus sibling blocks can affect variable instantiation :(
		return findVariableInBlock(variableId, head, just(tail));
	}	

	// Stop recursion here 
	if (statementsTail := nothing()) return nothing();

	if (just(BlockStatements unboxedTail) := statementsTail) {
		// recurse
		if (blockStatements(BlockStatement head, BlockStatements tail) := unboxedTail) {
			return findVariableInBlock(variableId, head, just(tail));
		}
		if (blockStatementLast(LastBlockStatement head) := unboxedTail ||
			tailEnd(BlockStatement head) := unboxedTail) {
			// TODO lastblockstatement wont match correctly here
			return findVariableInBlock(variableId, head, nothing()); 	
		}
		
	}
	
	return nothing();
}

// do not forget: 
// TODO   | forIn: "for" "(" "var" Id "in" Expression ")" Statement
// Dangerous case that could be missed
public rel[Vertex, Vertex] createFlowGraphFromTree(Tree root) {
	Tree fullTree = root;
	rel[Vertex, Vertex] result = {};
	top-down visit (root) {
		// TODO implement R1 for declaration in for loops etc		
		// Type matching is better but returns nodes rather than tree? wtf.
		case func(FunctionDeclaration f):{
			result += <Fun(getNodePosition(f)), createVertex(f.name, fullTree)>;
		}
		case Statement s: {
			// TODO checks if this counts for for do?
			// R1 - declarations with fill are also assignments? :)
			// TODO: not sure if i need this at all in this flow creation
			if (variableSemi(declarations) := s || variableNoSemi(declarations) := s) {
				for (declaration <- declarations) {				
					// This only works on assigned variables (not on just declared ones)
					// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
					if (/filledDeclaration(Id id, Expression expression) := declaration) {
						Vertex rhsVertex = createVertex(expression, fullTree);
						result += <rhsVertex, createVertex(id, fullTree)>;
						result += <rhsVertex, Exp(getNodePosition(s))>; // maybe getnodeposition decl.id?
					}					
				}
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
				Vertex rhsVertex = createVertex(rhs, fullTree);
				result += <rhsVertex, createVertex(lhs, fullTree)>;
				result += <rhsVertex, Exp(getNodePosition(e))>;
			}
			// R3
			elseif (ternary(Expression condition, Expression conditionSuccess, Expression conditionFail) := e) {
				//println("ternary");
				Vertex successVertex = createVertex(conditionSuccess, fullTree), failVertex = createVertex(conditionFail, fullTree);
				
				result += <successVertex, Exp(getNodePosition(e))>;
				result += <failVertex, Exp(getNodePosition(e))>;							
			}
			// R2
			elseif (disjunction(Expression lhs, Expression rhs) := e) {
				Vertex lhsVertex = createVertex(lhs, fullTree), rhsVertex = createVertex(rhs, fullTree);
				
				result += <lhsVertex, Exp(getNodePosition(disjunction))>;
				result += <rhsVertex, Exp(getNodePosition(disjunction))>;			
			}
			// R4
			elseif (conjunction(Expression lhs, Expression rhs) := e) {
				Vertex rhsVertex = createVertex(rhs, fullTree);
	
				result += <rhsVertex, Exp(getNodePosition(e))>;				
			}
			elseif (function(Id id, params) := e) {
				Position p = getNodePosition(e);
				result += <Fun(p), createVertex(id, fullTree)>;
			}
			else {
				fail;
			}
		}
		// R5
		case PropertyAssignment p:{
			if (property(PropertyName name, Expression exp) := p) {
				// todo create vertex check?
				println("property assignment");
				result += <createVertex(exp, fullTree), Prop("<name>")>;			
			}
			else {
				fail;
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
	for (<x, y> <- graph) {
		printVertex(x);
		print(" -\> ");
		printVertex(y);
		println();
	}
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

