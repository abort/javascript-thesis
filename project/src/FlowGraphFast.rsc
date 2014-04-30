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
private data ScopedResult = result(rel[Vertex, Vertex] graph, Scope scope, Position nextNodeToSkip);

public rel[Vertex, Vertex] createFlowGraphWithNativeFunctions(loc nativeGraphLocation, loc input) = createFlowGraphWithNativeFunctions(nativeGraphLocation, parse(input));
public rel[Vertex, Vertex] createFlowGraphWithNativeFunctions(loc nativeGraphLocation, Source source) = createFlowGraphFromFunctionList(nativeGraphLocation) + createFlowGraph(source);
public rel[Vertex, Vertex] createFlowGraph(loc input) = createFlowGraphWithNativeFunctions(|project://thesis/src/native-functions.txt|, input); // default assumption that we need native functions
public rel[Vertex, Vertex] createFlowGraph(Source source) = createFlowGraph(source, global());

// Retrieve the position of a node
public Position getPosition(Tree t) = ExistingPosition(t@\loc);

public rel[Vertex, Vertex] createFlowGraph(Tree source, Scope scope) {
	rel[Vertex, Vertex] flowGraph = {};
	map[str, SymbolMapEntry] symbolMap = getSymbolMap(scope);
	Position nextNodeToSkip = InexistentPosition();

	top-down-break visit (source) {
		case FunctionDeclaration f:{
			Position functionPosition = getPosition(f);
			map[str, SymbolMapEntry] inFunctionSymbolMap = getOverridableSymbolMap(symbolMap);
			inFunctionSymbolMap["<f.name>"] = createOverridableEntry(f);
			inFunctionSymbolMap = addParametersToSymbolMap(inFunctionSymbolMap, f.parameters, functionPosition);
			
			// Add the function to the current scope
			if (isDeclarableInScope("<f.name>", symbolMap, scope)) symbolMap["<f.name>"] = createEntry(f);

			flowGraph += <Fun(functionPosition), Var("<f.name>", functionPosition)>;
			flowGraph += createFlowGraph(f.implementation, scoped(inFunctionSymbolMap));
		}
		case Expression e:{
			if (e is function || e is functionAnonymous) {
				Position functionPosition = getPosition(e);
				map[str, SymbolMapEntry] inFunctionSymbolMap = getOverridableSymbolMap(symbolMap);
				inFunctionSymbolMap = addParametersToSymbolMap(inFunctionSymbolMap, e.parameters, functionPosition);
				
				if (e is function) {
					// Function name is available in the scope of the function
					inFunctionSymbolMap["<e.id>"] = createOverridableEntry(e);
					// No need for checking in the symbol map, R6 says this is always a var
					flowGraph += <Fun(functionPosition), Var("<e.id>", functionPosition)>;
				}
				
				flowGraph += <Fun(functionPosition), Exp(functionPosition)>;
				flowGraph += createFlowGraph(e.block, scoped(inFunctionSymbolMap));				
			}
			else {
				// Next node is used to skip underlying nodes (use inexistent matching for short circuit evaluation to enhance speed)
				if (nextNodeToSkip == InexistentPosition() || nextNodeToSkip != getPosition(e)) {
					ScopedResult result = createFlowGraphFromExpression(e, scoped(symbolMap));
					flowGraph += result.graph;
					if (scope is scoped) symbolMap += getSymbolMap(result.scope);
					nextNodeToSkip = result.nextNodeToSkip;
				}
				else nextNodeToSkip = InexistentPosition(); // reset the next node to skip after matching
				
				fail; // continues to visit more deeply nested nodes (prevent breaking)
			}
		}
		case Statement s:{
			ScopedResult result = createFlowGraphFromStatement(s, scoped(symbolMap));
			flowGraph += result.graph;
			if (scope is scoped) symbolMap += getSymbolMap(result.scope);
		
			fail; // continues to visit more deeply nested nodes (prevent breaking)
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
			if (filledDeclaration(Id id, Expression expression) := declaration) {
				if (isDeclarableInScope("<id>", symbolMap, scope)) symbolMap["<id>"] = createEntry(id);

				flowGraph += createFlowGraphFromAssignment(id, expression, declaration, symbolMap);
			}
			elseif (emptyDeclaration(Id id) := declaration) {
				if (isDeclarableInScope("<id>", symbolMap, scope)) symbolMap["<id>"] = createEntry(id);
			}
		}
	}
	elseif (forDo({VariableDeclarationNoIn ","}* assignments, _, _, _) := statement) {
		for (assignment <- assignments) {
			if (filledDeclaration(Id id, Expression expression) := assignment)
				flowGraph += createFlowGraphFromAssignment(id, expression, assignment, symbolMap);
		}
	}
	elseif (forInDeclaration(Id id, Expression _, Statement _) := statement) {
		// Assumption to count as a simple declaration (so not R1, TODO: DOCUMENT!)
		if (isDeclarableInScope("<id>", symbolMap, scope)) symbolMap["<id>"] = createEntry(id);	
	}
	// TODO normal forIn not necessary?
	elseif (returnExp(Expression e) := statement || returnExpNoSemi(Expression e, _) := statement
			 || returnExpNoSemiBlockEnd(Expression e, _) := statement) {
		Position thisPosition = getThisPosition(symbolMap);
		if (thisPosition != InexistentPosition()) flowGraph += <createVertex(e, symbolMap), Ret(thisPosition)>;
	}
	
	return result(flowGraph, scoped(symbolMap), InexistentPosition());
}

private rel[Vertex, Vertex] createFlowGraphFromAssignment(Tree lhs, Tree rhs, Tree assignment, map[str, SymbolMapEntry] symbolMap) {
	Vertex rhsVertex = createVertex(rhs, symbolMap);
	rel[Vertex, Vertex] flowGraph = { <rhsVertex, createVertex(lhs, symbolMap)> };
	flowGraph += <rhsVertex, Exp(getPosition(assignment))>;
	return flowGraph;
}

private Position getThisPosition(map[str, SymbolMapEntry] symbolMap) {
	if (THIS_KEYWORD in symbolMap) return symbolMap[THIS_KEYWORD].position;
	return InexistentPosition(); 
}

public ScopedResult createFlowGraphFromExpression(Expression e, Scope scope) {
	rel[Vertex, Vertex] flowGraph = {};
	map[str, SymbolMapEntry] symbolMap = getSymbolMap(scope);
	Position nextNodeToSkip = InexistentPosition();
	
	// R1
	if (variableAssignment(Expression lhs, Expression rhs) := e ||
		variableAssignmentNoSemi(Expression lhs, Expression rhs) := e ||
		variableAssignmentBlockEnd(Expression lhs, Expression rhs, _) := e ||
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
		Position position = getPosition(e);
		flowGraph += <createVertex(lhs, symbolMap), Exp(position)>;
		flowGraph += <createVertex(rhs, symbolMap), Exp(position)>;		
	}
	// R3
	elseif (ternary(Expression condition, Expression conditionSuccess, Expression conditionFail) := e) {
		Position position = getPosition(e);
		Vertex successVertex = createVertex(conditionSuccess, symbolMap);
		Vertex failVertex = createVertex(conditionFail, symbolMap);
		flowGraph += <successVertex, Exp(position)>;
		flowGraph += <failVertex, Exp(position)>;	
	}
	// R4
	elseif (conjunction(Expression lhs, Expression rhs) := e) {
		flowGraph += <createVertex(rhs, symbolMap), Exp(getPosition(e))>;			
	}
	// R5
	elseif (objectDefinition({PropertyAssignment ","}* properties) := e || objectDefinitionCommaSuffix({PropertyAssignment ","}+ properties) := e) {
		for (PropertyAssignment p <- properties) {
			if (property(PropertyName name, Expression exp) := p) {
				// println("property assignment");
				flowGraph += <createVertex(exp, symbolMap), Prop("<name>")>;
			}
			elseif (getProperty(PropertyName name, Block block) := p) {
				flowGraph += <createVertex(block, symbolMap), Prop("<name>")>;	// TODO block ye?	
			}
		}
	}
	elseif (new(Expression expression) := e) {
		if (expression is functionParams || expression is functionNoParams) {
			// R8
			rel[Vertex, Vertex] functionCallFlowGraph = createFlowGraphFromFunctionCall(expression, e, scope);
	
			if (size(functionCallFlowGraph) != 0) {
				flowGraph += functionCallFlowGraph;
				nextNodeToSkip = getPosition(expression); // Stop visiting branch in case we have a new function call
			}
		}
		else {
			// Syntactic sugar fix for new jQuery (which is the same as new jQuery());
			Position expressionPosition = getPosition(e);
			flowGraph += <createVertex(expression, symbolMap), Callee(expressionPosition)>;
			flowGraph += <Res(expressionPosition), Exp(expressionPosition)>;
			
			if (property(Expression lhs, Id _) := expression) {
				// TODO: changed 29 april... to be checked 
				flowGraph += <createVertex(lhs, symbolMap), Arg(expressionPosition, 0)>;		
//				flowGraph += <createVertex(lhs, symbolMap), Arg(getPosition(expression), 0)>;
			}			
		}
	}
	elseif (e is functionParams || e is functionNoParams) {
		// R8
		flowGraph += createFlowGraphFromFunctionCall(e, e, scope);

		// R9
		if (property(Expression lhs, Id _) := getCallSite(e)) {
			// TODO: changed 29 april... to be checked 
			flowGraph += <createVertex(lhs, symbolMap), Arg(getPosition(e), 0)>;
			//flowGraph += <createVertex(lhs, symbolMap), Arg(getPosition(getCallSite(e)), 0)>;
		}
	}

	return result(flowGraph, scoped(symbolMap), nextNodeToSkip);	
}

private Expression getCallSite(Expression callExpression) {
	if (functionParams(Expression funcExpression, _) := callExpression || functionNoParams(Expression funcExpression) := callExpression) {
		return funcExpression;	 
	}
	throw "Could not retrieve call site"; // should never occur
}

private rel[Vertex, Vertex] createFlowGraphFromFunctionCall(Expression callExpression, Expression fullExpression, Scope scope) {
	rel[Vertex, Vertex] flowGraph = {};
	map[str, SymbolMapEntry] symbolMap = getSymbolMap(scope);
	if (functionParams(Expression funcExpression, { Expression!comma ","}+ parameters) := callExpression
		 || functionNoParams(Expression funcExpression) := callExpression) {
		// In case of one shot closures, we have to consider the subexpression (nested) as the function being called
		if (nestedExpression(Expression sub) := funcExpression) funcExpression = sub;

		Position expressionPosition = getPosition(fullExpression);
		flowGraph += <createVertex(funcExpression, symbolMap), Callee(expressionPosition)>;

		if (callExpression is functionParams) {
			int argnum = 1;
			for (Expression parameter <- parameters) {
				flowGraph += <createVertex(parameter, symbolMap), Arg(expressionPosition, argnum)>;
				argnum += 1;
			}
		}

		flowGraph += <Res(expressionPosition), Exp(expressionPosition)>;
	}
	
	return flowGraph;
}

private Vertex createVertex(Tree root, map[str, SymbolMapEntry] symbolMap) {
	if (Expression e := root && property(_, Id id) := root) return Prop("<id>");
	elseif ((Expression e := root && id(Id id) := e) || Id id := root) {
		if ("<id>" notin symbolMap) return Prop("<id>");
		else {
			SymbolMapEntry mapValue = symbolMap["<id>"];
			// find out if its a function parameter
			if (mapValue is parameterEntry)	return Parm(mapValue.position, mapValue.parameter);
			return Var("<id>", mapValue.position);
		}
	}
	elseif (Expression e := root && e is this) {
		if (THIS_KEYWORD in symbolMap) return Parm(symbolMap[THIS_KEYWORD].position, 0);
		else debug("Reference to this without a this scope... fallback");
	}
	
	return Exp(getPosition(root));
}

// SymbolMaps should be overridable because variables can be redefined in the new scope and the javascript convention does not allow double declarations in the same scope
private map[str, SymbolMapEntry] getOverridableSymbolMap(map[str, SymbolMapEntry] symbolMap) {
	map[str, SymbolMapEntry] newSymbolMap = ();

	for (str entryName <- symbolMap) {
		SymbolMapEntry entryValue = symbolMap[entryName];
		if (entryValue is parameterEntry) newSymbolMap[entryName] = parameterEntry(entryValue.position, true, entryValue.parameter);
		elseif (entryValue is entry) newSymbolMap[entryName] = entry(entryValue.position, true);
	}

	return newSymbolMap;	
}

private map[str, SymbolMapEntry] addParametersToSymbolMap(map[str, SymbolMapEntry] symbolMap, {Id ","}* parameters, Position position) {
	symbolMap[THIS_KEYWORD] = createParameterEntry(position, 0);

	int argnum = 1;
	for (Id param <- parameters) {
		symbolMap["<param>"] = createParameterEntry(position, argnum);
		argnum += 1;
	}

	return symbolMap;
}

private bool isDeclarableInScope(str variableName, map[str, SymbolMapEntry] symbolMap, Scope scope) = scope is scoped && isDeclarable(variableName, symbolMap);
private bool isDeclarable(str variableName, map[str, SymbolMapEntry] symbolMap) {
	if (variableName notin symbolMap) return true;
	// Overridability should be returned from the table
	return symbolMap["<variableName>"].overridable;
}
private map[str, SymbolMapEntry] getSymbolMap(Scope scope) = scope is scoped ? scope.symbolMap : (); // returns an empty symbol map for global scope

private SymbolMapEntry createEntry(Tree tree) = entry(getPosition(tree), false);
private SymbolMapEntry createParameterEntry(Tree tree, int argnum) = createParameterEntry(getPosition(tree), argnum);
private SymbolMapEntry createParameterEntry(Position position, int argnum) = parameterEntry(position, false, argnum);
private SymbolMapEntry createOverridableEntry(Tree tree) = entry(getPosition(tree), true);