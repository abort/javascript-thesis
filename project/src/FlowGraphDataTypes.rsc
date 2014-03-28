module FlowGraphDataTypes

import SharedDataTypes;
import String;
import ParseTree;

data Vertex = Exp(Position p, Tree tree) | Var(str name, Position p, Tree tree) | Prop(str name) | Fun(Position p, Tree tree) |
			  Callee(Position p, Tree tree) | Arg(Position p, int i, Tree tree) | Parm(Position p, int i, Tree tree) | Ret(Position p, Tree tree) | Res(Position p, Tree tree)
			  | Builtin(str canonicalName) | Unknown() | Empty();