module CallGraphDataTypes

import Relation;
import FlowGraphDataTypes;

data CallGraphResult = CallGraphResult(rel[Vertex, Vertex] graph, rel[Vertex, Vertex] escapingFunctions, rel[Vertex, Vertex] unresolvedCallSites); 