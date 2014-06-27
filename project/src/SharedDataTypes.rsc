module SharedDataTypes

import Set;
import EcmaScript;
import Location;

data Position = ExistingPosition(loc position) | InexistentPosition();
data PrintablePosition = PrintableExistingPosition(str filename, int line, int columnStart, int columnEnd) | PrintableInexistentPosition();
// Real call position is stored as sometimes a target may have parentheses.
data OneShotCall = OneShotCall(Position oneShotCall, Position expressionToCall, set[Expression] args);
data EscapingFunction = EscapingFunction(Position position, set[Id] args);
data UnresolvedCallSite = UnresolvedCallSite(Position position, int args);

public PrintablePosition getPrintablePosition(Position p) {
	if (p is ExistingPosition) {
		loc location = p.position;	
		str filename;
		try	filename = location.file;
		catch: filename = "stdin";
	
		// We use the same formatting as in the original script
		return PrintableExistingPosition(filename, location.begin.line, location.offset, (location.offset + location.length));
	}
	return PrintableInexistentPosition();
}