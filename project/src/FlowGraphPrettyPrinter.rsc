module FlowGraphPrettyPrinter

import FlowGraphDataTypes;
import flowgraph;
import List;
import Relation;
import IO;

public void printFlowGraph(rel[Vertex, Vertex] graph) = printFlowGraph(graph, false);
public void printSimpleFlowGraph(rel[Vertex, Vertex] graph) = printFlowGraph(graph, true);
private void printFlowGraph(rel[Vertex, Vertex] graph, bool simplified) {
	list[tuple[Vertex, Vertex]] printable = [ <x,y> | <x, y> <- graph ];
	for (<x, y> <- sort(printable, lessThanVertex)) {
		printVertex(x, simplified);
		print(" -\> ");
		printVertex(y, simplified);
		println();
	}
}

private bool lessThanVertex(tuple[Vertex x, Vertex _] vertex1, tuple[Vertex x, Vertex _] vertex2) {
	Position p = getPosition(vertex1.x), q = getPosition(vertex2.x);
	
	if (p != Inexistent() && q != Inexistent()) {
		if (p.line < q.line) return true;
		if (p != Inexistent() && p.line == q.line) return (p.columnStart < q.columnStart);
	}
	
	return false;
}

private void printVertex(Vertex v, bool simplified) {
	if (Exp(Position p) := v) printStringWithPosition("Expr", p, simplified);
	elseif (Prop(str name) := v) print("Prop(<name>)");
	elseif (Fun(Position p) := v) printStringWithPosition("Func", p, simplified);
	elseif (Var(str name, Position p) := v) print("Var(<name>, <getPositionString(p, simplified)>)");
}

private Position getPosition(Vertex v) {
	Position position = Inexistent();
	if (Exp(Position p) := v) position = p;
	elseif (Fun(Position p) := v) position = p;
	elseif (Var(_, Position p) := v) position = p;
	return position;
}

private void printStringWithPosition(str string, Position p, bool simplified) = print("<string>(<getPositionString(p, simplified)>)");
private str getPositionString(Position p, bool simplified) {
	if (simplified) return "<p.filename>@<p.line>";
	else return "<p.filename>@<p.line>:<p.columnStart>-<p.columnEnd>";
}