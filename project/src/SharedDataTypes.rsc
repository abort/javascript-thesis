module SharedDataTypes

import Set;
import EcmaScript;
import Location;

data Position = Position(str filename, int line, int columnStart, int columnEnd, loc parseTreeLocation) | Inexistent();
data OneShotCall = OneShotCall(Position oneShotCall, Position expressionToCall, set[Expression] args);
data EscapingFunction = EscapingFunction(Position position, set[Id] args);
data UnresolvedCallSite = UnresolvedCallSite(Position position, set[Expression] args);