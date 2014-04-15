module FlowGraphFast

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
import FlowGraphNativeImporter;

private str THIS_KEYWORD = "this";

private data SymbolMapEntry = parameterEntry(Position position, bool overridable, int parameter) | entry(Position position, bool overridable);
private data Scope = global() | scoped(map[str, SymbolMapEntry] symbolMap); 
private data ScopedResult = result(rel[Vertex, Vertex] graph, Scope scope);

private map[str, SymbolMapEntry] getSymbolMap(Scope scope) {
	if (scope is scoped) return scope.symbolMap; // In case of scoped
	return (); // In case of global
}

private Position getEnclosingFunction(Scope scope) {
	if (scope is scoped) return scope.symbolMap[THIS_KEYWORD];
	else throw "No enclosing function to provide"; // should never be called
}

private SymbolMapEntry createEntry(Tree tree) = entry(getPosition(tree), false);
private SymbolMapEntry createParameterEntry(Tree tree, int argnum) = createParameterEntry(getPosition(tree), argnum);
private SymbolMapEntry createParameterEntry(Position position, int argnum) = parameterEntry(position, false, argnum);
private SymbolMapEntry createOverridableEntry(Tree tree) = entry(getPosition(tree), true);

public rel[Vertex, Vertex] createFlowGraphWithNativeFunctions(loc nativeGraphLocation, loc input) = createFlowGraphWithNativeFunctions(nativeGraphLocation, parse(input));
public rel[Vertex, Vertex] createFlowGraphWithNativeFunctions(loc nativeGraphLocation, Source source) = createFlowGraphFromFunctionList(nativeGraphLocation) + createFlowGraph(source);
public rel[Vertex, Vertex] createFlowGraph(loc input) = createFlowGraphWithNativeFunctions(|project://thesis/src/native-functions.txt|, input); // default assumption that we need native functions
public rel[Vertex, Vertex] createFlowGraph(Source source) = createFlowGraph(source, global());
public rel[Vertex, Vertex] createFlowGraph(Tree source, Scope scope) {
	rel[Vertex, Vertex] flowGraph = {};
	map[str, SymbolMapEntry] symbolMap = getSymbolMap(scope);

	top-down-break visit (source) {
		case FunctionDeclaration f:{
			map[str, SymbolMapEntry] inFunctionSymbolMap = getOverridableSymbolMap(symbolMap);
			inFunctionSymbolMap["<f.name>"] = createOverridableEntry(f);
			inFunctionSymbolMap[THIS_KEYWORD] = createParameterEntry(f, 0);
			inFunctionSymbolMap = addParametersToSymbolMap(inFunctionSymbolMap, f.parameters, getPosition(f));
			
			if (scope is scoped && isDeclarable("<f.name>", symbolMap))
				symbolMap["<f.name>"] = createEntry(f);
			flowGraph += <Fun(getPosition(f)), Var("<f.name>", getPosition(f))>;

			// println("In function <f> symbol map: <domain(inFunctionSymbolMap)> (new symbol map: <domain(symbolMap)>)");				
			flowGraph += createFlowGraph(f.implementation, scoped(inFunctionSymbolMap));
		}
		case Expression e:{
			if (function(_, {Id ","}* parameters, _) := e || functionAnonymous({Id ","}* parameters, _) := e) {			
				map[str, SymbolMapEntry] inFunctionSymbolMap = getOverridableSymbolMap(symbolMap);
				inFunctionSymbolMap[THIS_KEYWORD] = createParameterEntry(e, 0);
				inFunctionSymbolMap = addParametersToSymbolMap(inFunctionSymbolMap, parameters, getPosition(e));
				if (e is function) {
					inFunctionSymbolMap["<e.id>"] = createOverridableEntry(e);
					// No need for checking in the symbol map, R6 says this is always a var
					flowGraph += <Fun(getPosition(e)), Var("<e.id>", getPosition(e))>;
				}
				
				flowGraph += <Fun(getPosition(e)), Exp(getPosition(e))>;
				
				// println("In function exp <e> symbol map: <domain(inFunctionSymbolMap)> (new symbol map: <domain(symbolMap)>)");				
				flowGraph += createFlowGraph(e.block, scoped(inFunctionSymbolMap));				
			}
			else {
				// No functions that have to be visited
				ScopedResult result = createFlowGraphFromExpression(e, scoped(symbolMap));
				flowGraph += result.graph;
				symbolMap += getSymbolMap(result.scope);
				
				// Do not break!
				fail;
			}
		}
		case Statement s:{
			ScopedResult result = createFlowGraphFromStatement(s, scoped(symbolMap));
			flowGraph += result.graph;
			symbolMap += getSymbolMap(result.scope); // TODO: or append?
		
			// Do not break!
			fail;
		}		
	}
	
	return flowGraph;
}

private ScopedResult createFlowGraphFromStatement(Statement statement, Scope scope) {
	rel[Vertex, Vertex] flowGraph = {};
	map[str, SymbolMapEntry] symbolMap = getSymbolMap(scope);
	
	if (forDoDeclarations({VariableDeclarationNoIn ","}+ declarations, _, _, _) := statement
	 	|| variableNoSemi({VariableDeclaration ","}+ declarations, _) := statement
	 	|| variableSemi({VariableDeclaration ","}+ declarations) := statement) {
		for (declaration <- declarations) {
			// This only works on assigned variables (not on just declared ones)
			// Use deep matching to ignore the literals like the comma (this wont hurt in this case)
			if (filledDeclaration(Id id, Expression expression) := declaration) {
				// Variables can not be redeclared in the same scope
			//	println("For loop <id> (statement: <statement>)!");
				if (scope is scoped && isDeclarable("<id>", symbolMap)) 
					symbolMap["<id>"] = createEntry(id);

				Vertex rhsVertex = createVertex(expression, symbolMap);
				flowGraph += <rhsVertex, createVertex(id, symbolMap)>;
				flowGraph += <rhsVertex, Exp(getPosition(declaration))>;
			}
			
			// Add to symbol map
			if (emptyDeclaration(Id id) := declaration) {
				// Variables can not be redeclared in the same scope
				if (scope is scoped && isDeclarable("<id>", symbolMap))
					symbolMap["<id>"] = createEntry(id);
			}
		}
	}
	elseif (forInDeclaration(Id id, Expression _, Statement _) := statement) {
		// Assumption to count as a simple declaration (so not R1, TODO: DOCUMENT!)
		if (scope is scoped && isDeclarable("<id>", symbolMap))
			symbolMap["<id>"] = createEntry(id);	
	}
	elseif (returnExp(Expression e) := statement || returnExpNoSemi(Expression e) := statement
			 || returnExpNoSemiBlockEnd(Expression e) := statement) {
		Position thisPosition = getThisPosition(scope);
		if (thisPosition != Inexistent())
			flowGraph += <createVertex(e, symbolMap), Ret(thisPosition)>;
	}
	
	return result(flowGraph, scoped(symbolMap));
}

private Position getThisPosition(Scope scope) {
	map[str, SymbolMapEntry] symbolMap = getSymbolMap(scope);
	if (THIS_KEYWORD in symbolMap) return symbolMap[THIS_KEYWORD].position;
	return Inexistent(); 
}

public ScopedResult createFlowGraphFromExpression(Expression e, Scope scope) {
	rel[Vertex, Vertex] flowGraph = {};
	map[str, SymbolMapEntry] symbolMap = getSymbolMap(scope);
	
	// R1
	if (variableAssignment(Expression lhs, Expression rhs) := e ||
		variableAssignmentNoSemi(Expression lhs, Expression rhs) := e ||
		variableAssignmentBlockEnd(Expression lhs, Expression rhs) := e ||
		variableAssignmentLoose(Expression lhs, Expression rhs) := e) {
		Vertex rhsVertex = createVertex(rhs, symbolMap);
		flowGraph += <rhsVertex, createVertex(lhs, symbolMap)>;
		flowGraph += <rhsVertex, Exp(getPosition(e))>;
	}
	elseif (variableAssignmentMulti(VariableAssignment assignment, {VariableAssignment ","}+ assignments) := e) {
		assignments += assignment;
		for (f:filledAssignment(Expression lhs, Expression rhs) <- assignments) {
			Vertex rhsVertex = createVertex(rhs, symbolMap);
			flowGraph += <rhsVertex, createVertex(lhs, symbolMap)>;
			flowGraph += <rhsVertex, Exp(getPosition(f))>;	
		}
	}
	// R2
	elseif (disjunction(Expression lhs, Expression rhs) := e) {
		flowGraph += <createVertex(lhs, symbolMap), Exp(getPosition(e))>;
		flowGraph += <createVertex(rhs, symbolMap), Exp(getPosition(e))>;		
	}
	// R3
	elseif (ternary(Expression condition, Expression conditionSuccess, Expression conditionFail) := e) {
		Vertex successVertex = createVertex(conditionSuccess, symbolMap);
		Vertex failVertex = createVertex(conditionFail, symbolMap);
		
		flowGraph += <successVertex, Exp(getPosition(e))>;
		flowGraph += <failVertex, Exp(getPosition(e))>;	
	}
	// R4
	elseif (conjunction(Expression lhs, Expression rhs) := e) {
		flowGraph += <createVertex(rhs, symbolMap), Exp(getPosition(e))>;			
	}
	// R5
	elseif (objectDefinition({PropertyAssignment ","}* properties) := e || objectDefinitionCommaSuffix({PropertyAssignment ","}+ properties) := e) {
		for (p <- properties.args) {
			if (property(PropertyName name, Expression exp) := p) {
				flowGraph += <createVertex(exp, symbolMap), Prop("<name>")>;
			}
			elseif (getProperty(PropertyName name, Block block) := p) {
				flowGraph += <createVertex(block, symbolMap), Prop("<name>")>;	// TODO block ye?	
			}
		}
	}
	// R8
	// TODO does this not count for functions without parameters?
	elseif (new(Expression expression) := e) {
		// TODO check if createFlowGraphFromFunctionCall does return something... if so make it break on in the top-down-break :)
		flowGraph += createFlowGraphFromFunctionCall(expression, e, scope);
	}
	elseif (functionParams(Expression expression, _) := e || functionNoParams(Expression expression) := e) {
		flowGraph += createFlowGraphFromFunctionCall(e, e, scope);
	}

	return result(flowGraph, scoped(symbolMap));	
}

private rel[Vertex, Vertex] createFlowGraphFromFunctionCall(Expression callExpression, Expression fullExpression, Scope scope) {
	rel[Vertex, Vertex] flowGraph = {};
	map[str, SymbolMapEntry] symbolMap = getSymbolMap(scope);
	if (functionParams(Expression funcExpression, { Expression!comma ","}+ parameters) := callExpression
		 || functionNoParams(Expression funcExpression) := callExpression) {
		// In case of one shot closures, we have to consider the subexpression (nested) as the function being called
		if (nestedExpression(Expression sub) := funcExpression) {
			funcExpression = sub;
		}

		Position expressionPosition = getPosition(fullExpression);
		flowGraph += <createVertex(funcExpression, symbolMap), Callee(expressionPosition)>;

		if (callExpression is functionParams) {
			int argnum = 1;
			for (Expression parameter <- parameters) {
				// println("Arg <parameter> on line <getPosition(parameter).line>");
				flowGraph += <createVertex(parameter, symbolMap), Arg(expressionPosition, argnum)>; // TODO getPosition(e) or (param)?
				argnum += 1;
			}
		}

		flowGraph += <Res(expressionPosition), Exp(expressionPosition)>;
		
		// R9
		// TODO: check
		if (property(Expression lhs, Id _) := funcExpression) {
			flowGraph += <createVertex(lhs, symbolMap), Arg(expressionPosition, 0)>;
		}		
	}
	
	return flowGraph;
}


private Vertex createVertex(Tree root, map[str, SymbolMapEntry] symbolMap) {
	if (Expression e := root && property(_, Id id) := root) return Prop("<id>");
	elseif ((Expression e := root && id(Id id) := e) || Id id := root) {
		if (!inSymbolMap(id, symbolMap)) return Prop("<id>");
		else {
			SymbolMapEntry mapValue = symbolMap["<id>"];
			// find out if its a function parameter
			if (mapValue is parameterEntry)
				return Parm(mapValue.position, mapValue.parameter);
				
			return Var("<id>", mapValue.position);
		}
	}
	elseif (Expression e := root && this() := e) {
		if (THIS_KEYWORD in symbolMap) {
			return Parm(symbolMap[THIS_KEYWORD].position, 0);
		}
		else {
			debug("Reference to this without a this scope... fallback");
		}
	}
	
	return Exp(getPosition(root));
}

private bool inSymbolMap(Id id, map[str, SymbolMapEntry] symbolMap) = "<id>" in symbolMap;
private bool isDeclarable(str variableName, map[str, SymbolMapEntry] symbolMap) {
	if (variableName notin symbolMap) return true;
	// Overridability should be returned from the table
	return symbolMap["<variableName>"].overridable;
}

// SymbolMaps should be overridable because variables can be redefined in the new scope and the javascript convention does not allow double declarations in the same scope
private map[str, SymbolMapEntry] getOverridableSymbolMap(map[str, SymbolMapEntry] symbolMap) {
	map[str, SymbolMapEntry] newSymbolMap = ();
	for (str entryName <- symbolMap) {
		SymbolMapEntry entryValue = symbolMap[entryName];
		if (entryValue is parameterEntry) {
			newSymbolMap[entryName] = parameterEntry(entryValue.position, true, entryValue.parameter);
		}
		elseif (entryValue is entry) {
			newSymbolMap[entryName] = entry(entryValue.position, true);
		}	
	}

	return newSymbolMap;	
}

private map[str, SymbolMapEntry] addParametersToSymbolMap(map[str, SymbolMapEntry] symbolMap, {Id ","}* parameters, Position position) {
	int argnum = 1;
	for (Id param <- parameters) {
		symbolMap["<param>"] = createParameterEntry(position, argnum);
		argnum += 1;
	}

	return symbolMap;
} 

// Retrieve the position of a node
public Position getPosition(Tree t) {
	str filename = "";
	try	filename = t@\loc.file;
	catch: filename = "stdin";

	// We use the same formatting as in the original script	
	return Position(filename, t@\loc.begin.line, t@\loc.offset, (t@\loc.offset + t@\loc.length), t@\loc);
}