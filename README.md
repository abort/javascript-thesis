# Evaluation of JavaScript Call Graph Algorithms
This repostitory entails the source code and data for the MSc. Thesis on Software Engineering of J. Dijkstra. This has been conducted at Centrum for Wiskunde en Informatica, The Netherlands. The thesis consists of a replication study of ["Efficient Construction of Approximate Call Graphs for JavaScript IDE Services"](http://manu.sridharan.net/files/ICSE-2013-Approximate.pdf)

# Folder Structure
* data: Gathered statistical data for the thesis, the call graphs that were used in the study, input programs for the call graphs and instrumented input programs that were used to gather the thesis data
* dynamic-call-graph: Dynamic call graph Java project that instruments JavaScript programs by using the edited Rhino version. Furthermore it has a post-processor to post-process gathered data, as well as a debugger to create call graphs using a debugging mechanism in Chrome (works on small projects)
* javascript-parser: Contains the prerequisite JavaScript grammar that is used to parse JavaScript input scripts for the flow and call graph algorithms
* edited: Edited Rhino version to instrument JavaScript programs
* project: Actual project for the flow graph algorithms, call graph algorithms and statistical computation

# Gathering Data
How call graphs were computed for each of the input programs is mentioned in thesis.pdf in appendix C. In the thesis this is done with Rascal MPL version 0.6.2.201403240201.

# JavaScript Parser
The workings of this grammar are explained in section 8.1 in the thesis.pdf file. Todo's and future work for the JavaScript grammar are included in appendix E of the thesis.