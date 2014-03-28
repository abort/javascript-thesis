module FlowGraphDataTypes

import SharedDataTypes;
import String;

data Vertex = Exp(Position p) | Var(str name, Position p) | Prop(str name) | Fun(Position p) |
			  Callee(Position p) | Arg(Position p, int i) | Parm(Position p, int i) | Ret(Position p) | Res(Position p)
			  | Builtin(str canonicalName) | Unknown() | Empty();