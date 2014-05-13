module FlowGraphPrettyPrinter

import FlowGraphDataTypes;
import FlowGraphFast;
import List;
import Relation;
import IO;
import SharedDataTypes;
import ParseTree;
import String;

public void printFlowGraph(rel[Vertex, Vertex] graph) = printFlowGraph(graph, false);
public void printSimpleFlowGraph(rel[Vertex, Vertex] graph) = printFlowGraph(graph, true);
private void printFlowGraph(rel[Vertex, Vertex] graph, bool simplified) {
	print(getFlowGraphString(graph, simplified));
}

public str getSimpleFlowGraph(rel[Vertex, Vertex] graph) = getFlowGraphString(graph, true);
public str getExtensiveFlowGraph(rel[Vertex, Vertex] graph) = getFlowGraphString(graph, false);
public set[str] getFlowGraphSet(rel[Vertex, Vertex] graph) {
	str graphString = getAlphabeticalFlowGraph(graph);
	set[str] result = {};
	
	for (connection <- split("\n", graphString)) {
		if (!isEmpty(connection)) result += connection;
	}
	
	return result;
}

public set[str] getCallGraphRangeSet(rel[Vertex, Vertex] graph) {
	set[str] outputSet = {};
	for (<_, y> <- graph) {
		outputSet += getUnmodifiedPositionString(y);
	}
	
	return outputSet;
}

public set[str] getCallGraphSet(rel[Vertex, Vertex] graph) {
	set[str] outputSet = {};
	for (<x, y> <- graph) {
		outputSet += getUnmodifiedPositionString(x) + " -\> " + getUnmodifiedPositionString(y);	
	}
	
	return outputSet;
}

public str getAlphabeticalFlowGraph(rel[Vertex, Vertex] graph) {
	list[str] outputList = [];
	str output = "";
	for (<x, y> <- graph)
		outputList += "\"" + getVertexString(x, false) + "\" -\> \"" + getVertexString(y, false) + "\"\n";	

	for (str line <- sort(outputList)) output += line;
	
	return output;
}

public void printAlphabeticalFlowGraph(rel[Vertex, Vertex] graph) = print(getAlphabeticalFlowGraph(graph));

private str getFlowGraphString(rel[Vertex, Vertex] graph, bool simplified) {
	list[tuple[Vertex, Vertex]] printable = [ <x,y> | <x, y> <- graph ];
	str result = "";
	for (<x, y> <- sort(printable, lessThanVertex))
		result += "\"" + getVertexString(x, simplified) + "\" -\> \"" + getVertexString(y, simplified) + "\"\n";

	return result;
}

private bool lessThanVertex(tuple[Vertex x, Vertex y] vertex1, tuple[Vertex x, Vertex y] vertex2) {
	PrintablePosition p = getPosition(vertex1.x), q = getPosition(vertex2.x);

	if (p != PrintableInexistentPosition() && q != PrintableInexistentPosition()) {
		if (p.line < q.line) return true;
		if (p.line == q.line) return (p.columnStart < q.columnStart);
	}
	
	if (p == PrintableInexistentPosition() && q != PrintableInexistentPosition()) return true;
	return false;
}

public void printVertexString(Vertex v) {
	print(getVertexString(v, false));
}

private str getVertexString(Vertex v, bool simplified) {
	if (Exp(Position p) := v) return getPrintStringWithPosition("Expr", p, simplified);
	elseif (Prop(str name) := v) return "Prop(<name>)";
	elseif (Fun(Position p) := v) return getPrintStringWithPosition("Func", p, simplified);
	elseif (Var(str name, Position p) := v) return "Var(<name>, <getPositionString(p, simplified)>)";
	elseif (Callee(Position p) := v) return getPrintStringWithPosition("Callee", p, simplified);
	elseif (Arg(Position p, int i) := v) return "Arg(<getPositionString(p, simplified)>, <i>)";
	elseif (Parm(Position p, int i) := v) return "Parm(<getPositionString(p, simplified)>, <i>)";
	elseif (Ret(Position p) := v) return getPrintStringWithPosition("Ret", p, simplified);
	elseif (Res(Position p) := v) return getPrintStringWithPosition("Res", p, simplified);
	elseif (Unknown() := v) return "Unknown";
	elseif (Builtin(str canonicalName) := v) return "Builtin(<canonicalName>)"; 
	elseif (Empty() := v) return "Empty(erroneous)";
}

private PrintablePosition getPosition(Vertex v) {
	Position position = InexistentPosition();
	if (Exp(Position p) := v) position = p;
	elseif (Fun(Position p) := v) position = p;
	elseif (Var(_, Position p) := v) position = p;
	return getPrintablePosition(position);
}

private str getPrintStringWithPosition(str string, Position p, bool simplified) = "<string>(<getPositionString(p, simplified)>)";
private str getPositionString(Position inputPosition, bool simplified) {
	if (inputPosition is ExistingPosition) {
		PrintablePosition p = getPrintablePosition(inputPosition);
		if (p is PrintableExistingPosition) {
			if (simplified) return "<p.filename>@<p.line>";
			else return "<p.filename>@<p.line>:<p.columnStart>-<p.columnEnd>";
		}
	}
	return "Inexistent";
}

public str getUnmodifiedPositionString(Vertex v) {
	if (v has p) return getPositionString(v.p, false);
// 	println("v has no position");
	if (Builtin(str canonicalName) := v) return canonicalName;
	return getVertexString(v, false);
}

private bool hasPosition(Vertex v) {
	visit (v) {
		case Position p:
			if (p is ExistingPosition) return true;
	}
	
	return false;
}
