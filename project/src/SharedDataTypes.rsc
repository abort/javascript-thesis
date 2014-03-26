module SharedDataTypes

data Position = Position(str filename, int line, int columnStart, int columnEnd) | Inexistent();