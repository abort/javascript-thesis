module FlowGraphDataTypes

import SharedDataTypes;

data Vertex = Exp(Position p) | Var(str name, Position p) | Prop(str name) | Fun(Position p) |
			  Callee(Position p) | Arg(Position p, int i) | Parm(Position p, int i) | Ret(Position p) | Res(Position p)
			  | Unknown() | Empty();