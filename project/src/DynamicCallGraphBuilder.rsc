module DynamicCallGraphBuilder

import String;
import EcmaScript;
import Logger;
import IO;
import ParseTree;
import Set;

@javaClass{jsimpl.DynamicCallGraph}
@reflect
public java void startDebugging(str inputName, set[tuple[int,int]] functionPositions);

@javaClass{jsimpl.DynamicCallGraph}
@reflect{Necessary for IO}
public java void doSomething();

public void buildDynamicCallGraph(loc inputfile) {
	str outputFile = substring(inputfile.file, 0, findLast(inputfile.file, ".")) + ".dcg.js";
	loc output = inputfile.parent + outputFile;
	Source src = parse(inputfile);
	set[tuple[int,int]] functionPositions = {};
	set[tuple[int,int]] functionCallPositions = {};
	
	top-down visit (src) {
		case FunctionDeclaration f:{
			tuple[int, int] firstStatement = <f@\loc.begin.line, f@\loc.begin.column>; //getFirstBlockStatement(f.implementation);
			println("Function declaration <firstStatement>");
			if (firstStatement notin functionPositions) {
				debug("[Dynamic Call Graph] Added function declaration to function positions, position <firstStatement>");
				functionPositions += firstStatement;
			}
		}
		case Expression e:{
			if (function(Id id, {Id ","}* params, Block block) := e || functionAnonymous({Id ","}* params, Block block) := e) {
				tuple[int, int] firstStatement = <e@\loc.begin.line, e@\loc.begin.column>; //getFirstBlockStatement(block);
				if (firstStatement notin functionPositions) {
					debug("[Dynamic Call Graph] Added function expression to function positions, position <firstStatement>");
					functionPositions += firstStatement;	
				}			
			}
			elseif (functionParams(Expression expression, { Expression!comma ","}+ params) := e || functionNoParams(Expression expression) := e) {
				tuple[int, int] callPosition =  <e@\loc.begin.line, e@\loc.begin.column>;
				if (callPosition notin functionPositions) {
					debug("[Dynamic Call Graph] Added function call to function call positions, position <callPosition>");
					functionCallPositions += callPosition;
				}
			}
		}
	}
	println("<functionPositions>");
	startDebugging(inputfile.file, functionPositions);
}

private tuple[int,int] getFirstBlockStatement(Tree block) {
	top-down-break visit (block) {
		case BlockStatement s:{
			return <s@\loc.begin.line, s@\loc.begin.column>;
		}
	}
	
	println("Warning: no statement in this block");
	return <block@\loc.begin.line, block@\loc.begin.column>;
}