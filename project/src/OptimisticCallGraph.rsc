module OptimisticCallGraph

import FlowGraphDataTypes;
import FlowGraphFast;
import Logger;
import IO;
import String;
import Map;
import Relation;
import ParseTree;
import Node;
import EcmaScript;
import SharedDataTypes;
import Set;
import FlowGraphPrettyPrinter;
import CallGraphDataTypes;
import SharedCallGraphFunctions;
import Map;
import List;
import Location;
import analysis::graphs::Graph;

public CallGraphResult createOptimisticCallGraph(loc location) = createOptimisticCallGraph(parse(location));
public CallGraphResult createOptimisticCallGraphWithoutNatives(loc location) = createOptimisticCallGraphWithoutNatives(parse(location));
public CallGraphResult createOptimisticCallGraph2(loc location) = createOptimisticCallGraph2(parse(location));

public CallGraphResult createOptimisticCallGraphWithoutNatives(list[Source] sources, list[loc] files) {
	rel[Vertex, Vertex] callGraph = {};
	set[EscapingFunction] escapingFunctions = {};
	set[UnresolvedCallSite] unresolvedCallSites = {};
	
	rel[Vertex, Vertex] flowGraph = createFlowGraphFromMultipleFiles(files); 

	bool fixpoint = false;
	int iterations = 0;
	while (!fixpoint) {
		// Store old situation
		rel[Vertex, Vertex] oldCallGraph = callGraph;
		rel[Vertex, Vertex] oldFlowGraph = flowGraph;

		// Convert the old result to provide as a parameter to the add interprocedural edge function
		set[OneShotCall] callGraphParam = { OneShotCall(px, py, getArguments(getSourceFromPosition(sources, px), px)) | <x, y> <- callGraph, Fun(Position py) := y, Callee(Position px) := x };
		flowGraph += addInterproceduralEdges(callGraphParam, escapingFunctions, unresolvedCallSites);

	 	//rel[Vertex, Vertex] flowGraphTransitiveClosure = flowGraph+;
	 	callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };	
		//escapedOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Fun(Position _) := x, Unknown() := y };
		//unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Unknown() := x, Callee(Position _) := y };
		iterations += 1;
		// Check whether something has changed or not to conclude
		if (oldCallGraph == callGraph && oldFlowGraph == flowGraph)
			fixpoint = true;
	}
	println("Fixpoint reached after <iterations> iterations");
	
	return CallGraphResult(callGraph, getEscapingFunctionsAsRelation(flowGraph), getUnresolvedCallSitesAsRelation(flowGraph));
}

public CallGraphResult createOptimisticCallGraphWithoutNativesOptimized(list[Source] sources, list[loc] files) {
	bool changed = false;
	int iterations = 0;
	rel[Vertex, Vertex] flowGraph = createFlowGraphFromMultipleFiles(files);
	set[Tree] functions = { f | source <- sources, f <- getFunctions(source) };
	do {
		changed = false;
		for (Tree function <- functions) {
			Position functionPosition = getPosition(function);
			Vertex functionVertex = Fun(functionPosition);
			for (Vertex calleeVertex <- reach(flowGraph, { functionVertex }), Callee(Position callPosition) := calleeVertex) {
				tuple[Vertex, Vertex] calleeCandidate = <Ret(functionPosition), Res(callPosition)>;
				if (calleeCandidate notin flowGraph) {
					// println("Added candidate");
					flowGraph += calleeCandidate;
					changed = true;
				}
				
				int argnum = 1;
	
				set[Id] parameters = getParameters(function);
				set[Expression] arguments = getArguments(getSourceFromPosition(sources, callPosition), callPosition);
				while (argnum <= size(parameters)) {
					if (argnum > size(arguments)) break;
					
					tuple[Vertex, Vertex] candidateTuple = <Arg(callPosition, argnum), Parm(functionPosition, argnum)>;
					if (candidateTuple notin flowGraph) {
						flowGraph += candidateTuple;
						changed = true;
					}
					argnum += 1;
				}		
			}
		}
		println("Finished iteration #<iterations>");
		
		iterations += 1; 
	} while (changed);

	println("Fixpoint reached after <iterations+1> iterations");
	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };
	
	return CallGraphResult(callGraph, {}, {});
}

private Source getSourceFromPosition(list[Source] sources, Position position) {
	for (Source src <- sources) {
		if (ExistingPosition(loc location) := position) {
			if (location.path == src@\loc.path) return src;
		} 
	}
	
	throw "Impossibru";
}

public CallGraphResult createOptimisticCallGraph(rel[Vertex, Vertex] flowGraph, Source source) {
	rel[Vertex, Vertex] callGraph = {};
	set[EscapingFunction] escapingFunctions = {};
	set[UnresolvedCallSite] unresolvedCallSites = {};
	
	bool fixpoint = false;
	int iterations = 0;
	while (!fixpoint) {
		// Store old situation
		rel[Vertex, Vertex] oldCallGraph = callGraph;
		set[EscapingFunction] oldEscapingFunctions = escapingFunctions;
		set[UnresolvedCallSite] oldUnresolvedCallSites = unresolvedCallSites;

		rel[Vertex, Vertex] oldFlowGraph = flowGraph;

		// Convert the old result to provide as a parameter to the add interprocedural edge function
		set[OneShotCall] callGraphParam = { OneShotCall(px, py, getArguments(source, px)) | <x, y> <- callGraph, Fun(Position py) := y, Callee(Position px) := x };
		flowGraph += addInterproceduralEdges(callGraphParam, escapingFunctions, unresolvedCallSites);

	 	rel[Vertex, Vertex] flowGraphTransitiveClosure = flowGraph+;
	 	callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };	
		escapedOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Fun(Position _) := x, Unknown() := y };
		unresolvedCallSitesOutput = { <x, y> | <x, y> <- flowGraphTransitiveClosure, Unknown() := x, Callee(Position _) := y };
		iterations += 1;
		//println("\nFlow Graph iteration <iterations>:");
		//printAlphabeticalFlowGraph(flowGraph);
		// Check whether something has changed or not to conclude
		if (oldCallGraph == callGraph && oldEscapingFunctions == escapingFunctions && oldUnresolvedCallSites == unresolvedCallSites && oldFlowGraph == flowGraph)
			fixpoint = true;
	}
	//printAlphabeticalFlowGraph(flowGraph);

	println("Fixpoint reached after <iterations> iterations");
	
	return CallGraphResult(callGraph, getEscapingFunctionsAsRelation(flowGraph), getUnresolvedCallSitesAsRelation(flowGraph));	
}

public CallGraphResult createOptimisticCallGraph(Source source) {
	rel[Vertex, Vertex] flowGraph = createFlowGraphWithNativeFunctions(|project://thesis/src/native-functions.txt|, source);
	return createOptimisticCallGraph(flowGraph, source);
}

public CallGraphResult createOptimisticCallGraphWithoutNatives(Source source) {
	rel[Vertex, Vertex] flowGraph = createFlowGraph(source);
	return createOptimisticCallGraph(flowGraph, source);
}

public CallGraphResult createOptimisticCallGraph2(rel[Vertex, Vertex] flowGraph, Source source) {
	bool changed = false;
	int iterations = 0;
	set[Tree] functions = getFunctions(source);
		do {
		changed = false;
		for (Tree function <- functions) {
			Position functionPosition = getPosition(function);
			Vertex functionVertex = Fun(functionPosition);
			for (Vertex calleeVertex <- reach(flowGraph, { functionVertex }), Callee(Position callPosition) := calleeVertex) {
				tuple[Vertex, Vertex] calleeCandidate = <Ret(functionPosition), Res(callPosition)>;
				if (calleeCandidate notin flowGraph) {
					// println("Added candidate");
					flowGraph += calleeCandidate;
					changed = true;
				}
				
				int argnum = 1;
	
				set[Id] parameters = getParameters(function);
				set[Expression] arguments = getArguments(source, callPosition);
				while (argnum <= size(parameters)) {
					if (argnum > size(arguments)) break;
					
					tuple[Vertex, Vertex] candidateTuple = <Arg(callPosition, argnum), Parm(functionPosition, argnum)>;
					if (candidateTuple notin flowGraph) {
						flowGraph += candidateTuple;
						changed = true;
					}
					argnum += 1;
				}		
			}
		}
		iterations += 1; 
	} while (changed);

	println("Fixpoint reached after <iterations> iterations");
	rel[Vertex, Vertex] callGraph = { <y, x> | <x,y> <- optimisticTransitiveClosure(flowGraph), (Fun(Position _) := x || Builtin(str _) := x), Callee(Position _) := y };
	
	return CallGraphResult(callGraph, {}, {});
}

public CallGraphResult createOptimisticCallGraph2(Source source) {
	rel[Vertex, Vertex] flowGraph = createFlowGraphWithNativeFunctions(|project://thesis/src/native-functions.txt|, source);	
	return createOptimisticCallGraph2(flowGraph, source);
}

private set[Id] getParameters(Tree f) {
	//if (Expression e := tree && e is functionAnonymous) return {};
	set[Id] retval = {};
	// println("function or function decl");
	if (Expression e := f) {
		if (e is function || e  is functionAnonymous) {
			for (Id id <- e.parameters) {
				retval += id;
			}
		}
	}
	elseif (FunctionDeclaration func := f) {
		for (Id id <- func.parameters) {
			retval += id;
		}	
	} 
	
	return retval;
}

private set[Expression] getArguments(Source src, Position p) {
	loc treeLoc = p.position;
	set[Expression] arguments = {};
	TreeSearchResult[Expression] searchResult = treeAt(#Expression, treeLoc, src);
	Tree tree;
	if (treeFound(Expression foundTree) := searchResult) tree = foundTree;
	else throw "The given position (loc) is not found in the tree";

	if (Expression e := tree && (functionParams(Expression _, { Expression!comma ","}+ args) := e
		|| new(functionParams(Expression _, { Expression!comma ","}+ args)) := tree)) {
		// println("func params");
		for (Expression arg <- args) 
			arguments += arg;
	}
		
	return arguments;
}

