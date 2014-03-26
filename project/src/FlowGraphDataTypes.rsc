module FlowGraphDataTypes

data Vertex = Exp(Position p) | Var(str name, Position p) | Prop(str name) | Fun(Position p) |
			  Callee(Position p) | Arg(Position p, int i) | Parm(Position p, int i) | Ret(Position p) | Res(Position p)
			  | Empty();
data Position = Position(str filename, int line, int columnStart, int columnEnd) | Inexistent();