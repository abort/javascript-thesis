module FlowGraphDataTypes

data Vertex = Exp(Position p) | Var(str name, Position p) | Prop(str name) | Fun(Position p) | Empty();
data Position = Position(str filename, int line, int columnStart, int columnEnd) | Inexistent();
