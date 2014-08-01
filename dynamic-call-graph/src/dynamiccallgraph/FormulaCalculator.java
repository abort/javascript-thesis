package dynamiccallgraph;

import java.io.File;
import java.util.HashSet;
import java.util.Set;

import org.apache.commons.io.FileUtils;

import com.google.common.collect.Sets;

public class FormulaCalculator {

    public static void main(String[] args) throws Exception {
	File dynamicCGFile = new File(args[0]);
	File staticCGFile = new File(args[1]);
	
	Set<String> dynamicCallGraph = new HashSet<String>(FileUtils.readLines(dynamicCGFile));
	Set<String> staticCallGraph = new HashSet<String>(FileUtils.readLines(staticCGFile));
	Set<String> callees = new HashSet<String>();
	
	double precision = 0.0;
	double recall = 0.0;
	for (String callEdge : dynamicCallGraph) {
	    String callee = callEdge.split("->")[0].trim();
	    if (callees.contains(callee)) continue;
	    callees.add(callee);
	    Set<String> dynamicCallTargetsForSite = new HashSet<String>();
	    for (String callEdgeWithCallSite : dynamicCallGraph) {
		String[] splitted = callEdgeWithCallSite.split("->");
		if (!callee.equals(splitted[0].trim())) continue;
		
		// Same call site
		
		dynamicCallTargetsForSite.add(splitted[1].trim());
	    }

	    Set<String> staticCallTargetsForSite = new HashSet<String>();
	    for (String callEdgeWithCallSite : staticCallGraph) {
		String[] splitted = callEdgeWithCallSite.split("->");
		if (!callee.equals(splitted[0].trim())) continue;
		
		// Same call site
		
		staticCallTargetsForSite.add(splitted[1].trim());
	    }
	    
	    double intersection = Sets.intersection(dynamicCallTargetsForSite, staticCallTargetsForSite).size();
	    precision += (staticCallTargetsForSite.size() == 0 ? 0.0 : intersection / (staticCallTargetsForSite.size() * 1.0));
	    recall += (intersection / (dynamicCallTargetsForSite.size() * 1.0));
	}

	precision /= callees.size();
	recall /= callees.size();
	System.out.println("Precision: " + (precision * 100.0) + " recall: " + (recall * 100.0));
    }

}
