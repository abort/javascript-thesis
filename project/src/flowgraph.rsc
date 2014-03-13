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
data Position = Position(str filename, int line, int columnStart, int columnEnd);

public void main(list[str] args) = main();
public void main() = println("Hi!");

public node getAST(Tree t) = implode(#node, t);
public node getAST(loc file) = implode(#node, parse(t));

// Make sure these trees start with the expression type
public Vertex createVertex(Tree root, map[str, Tree] symbolTable) {
	assert(Expression := root);
	
	// TODO: make sure the symbol table's position of the variable is BEFORE the reference
	
	Vertex result = Empty();
	top-down-break visit(root) 
	{
		case Expression e:{
			if (id(Id id) := e) {
				println("finding variableDeclarations for <id>");
				foundDeclaration = findVariableDeclaration(id, symbolTable);
				if (foundDeclaration == nothing()) {
					result = Prop("<id>");
				}
				else {				
					if (just(Tree t) := foundDeclaration) { 
						result = Var("<id>", getNodePosition(t));
					}
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

public Maybe[Tree] findVariableDeclaration(Id variableId, map[str, Tree] symbolTable) {
	// Redeclared vars do not affect initial declarance.... hence we need to always visit
	/*
	bottom-up visit(currentPosition) {
		case Statement e: {
			println("stmnt: <e>");
			
			if (block(Block bl) := e) {
				println("block matches!");
				//findVariableinBlock(variableId, ); 
			}
			
			
		}
		case func(FunctionDeclaration f):{
			println("visiting function");
			// TODO: apparently this is a prop, not a var:
			// if (variableId == id) return just(exp);
			for (param <- f.parameters) {
				// TODO make sure we are in the same scope
				if (param == variableId) {
					println("params: <param>");
				
					return just(param);
				}
			}
			
			// We already traversed block b due to recursive bottom-up visits :)
		}	
		case block:(Block)`{ <BlockStatement head> <BlockStatements tail> }`: {
			// Find variable in block?
			return findVariableInBlock(variableId, head, just(tail));
		}
	}
	*/
	// TODO check location of declaration to be before the reference
	if ("<variableId>" in symbolTable) {
		println("found reference");
		return just(symbolTable["<variableId>"]);
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
	// Key: name, value: Tree
	map[str, Tree] symbolTable = ();
	top-down visit (root) {
		// TODO implement R1 for declaration in for loops etc		
		// Type matching is better but returns nodes rather than tree? wtf.
		case func(FunctionDeclaration f):{
			// TODO: make sure to clear it after leaving it
			// Reset symbol table
			symbolTable = ();
			for (param <- f.parameters) {
				symbolTable += ("<param>" : f);
			}
			
			result += <Fun(getNodePosition(f)), createVertex(f.name, symbolTable)>;
		}
		case Statement s: {
			// TODO checks if this counts for for do?
			// R1 - declarations with fill are also assignments? :)
			// TODO: not sure if i need this at all in this flow creation
			if (variableSemi(declarations) := s || variableNoSemi(declarations) := s ||
				forDoDeclarations(declarations, _, _, _) := s) {
				for (declaration <- declarations) {
					// This only works on assigned variables (not on just declared ones)
					// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
					if (/filledDeclaration(Id id, Expression expression) := declaration) {
						symbolTable += ("<id>" : id);
						Vertex rhsVertex = createVertex(expression, symbolTable);
						result += <rhsVertex, createVertex(id, symbolTable)>;
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
				Vertex rhsVertex = createVertex(rhs, symbolTable);
				result += <rhsVertex, createVertex(lhs, symbolTable)>;
				result += <rhsVertex, Exp(getNodePosition(e))>;
			}
			// R3
			elseif (ternary(Expression condition, Expression conditionSuccess, Expression conditionFail) := e) {
				//println("ternary");
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
			elseif (function(Id id, params) := e) {
				Position p = getNodePosition(e);
				result += <Fun(p), createVertex(id, symbolTable)>;
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
				result += <createVertex(exp, symbolTable), Prop("<name>")>;			
			}
			else {
				fail;
			}
		}
		case stat(Statement s):{
			// Used to reset symbol table after leaving a function scope
			// TODO global declarations -> prop
			symbolTable = ();
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

