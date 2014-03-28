module FlowGraphPrettyPrinter

import FlowGraphDataTypes;
import flowgraph;
import List;
import Relation;
import IO;
import SharedDataTypes;

public void printFlowGraph(rel[Vertex, Vertex] graph) = printFlowGraph(graph, false);
public void printSimpleFlowGraph(rel[Vertex, Vertex] graph) = printFlowGraph(graph, true);
private void printFlowGraph(rel[Vertex, Vertex] graph, bool simplified) {
	print(getFlowGraphString(graph, simplified));
}

public str getSimpleFlowGraph(rel[Vertex, Vertex] graph) = getFlowGraphString(graph, true);

private str getFlowGraphString(rel[Vertex, Vertex] graph, bool simplified) {
	list[tuple[Vertex, Vertex]] printable = [ <x,y> | <x, y> <- graph ];
	str result = "";
	for (<x, y> <- sort(printable, lessThanVertex)) {
		result += getVertexString(x, simplified);
		result += " -\> ";
		result += getVertexString(y, simplified);
		result += "\n";
	}
	
	return result;
}

private bool lessThanVertex(tuple[Vertex x, Vertex y] vertex1, tuple[Vertex x, Vertex y] vertex2) {
	Position p = getPosition(vertex1.x), q = getPosition(vertex2.x);

	if (p != Inexistent() && q != Inexistent()) {
		if (p.line < q.line) return true;
		if (p.line == q.line) return (p.columnStart < q.columnStart);
	}
	
	if (p == Inexistent() && q != Inexistent()) return true;
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
}

private Position getPosition(Vertex v) {
	Position position = Inexistent();
	if (Exp(Position p) := v) position = p;
	elseif (Fun(Position p) := v) position = p;
	elseif (Var(_, Position p) := v) position = p;
	return position;
}

private str getPrintStringWithPosition(str string, Position p, bool simplified) = "<string>(<getPositionString(p, simplified)>)";
private str getPositionString(Position p, bool simplified) {
	if (simplified) return "<p.filename>@<p.line>";
	else return "<p.filename>@<p.line>:<p.columnStart>-<p.columnEnd>";
}