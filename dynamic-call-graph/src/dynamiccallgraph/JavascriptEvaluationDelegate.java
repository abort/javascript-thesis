package dynamiccallgraph;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.chromium.sdk.JsEvaluateContext.EvaluateCallback;
import org.chromium.sdk.JsVariable;

public class JavascriptEvaluationDelegate implements EvaluateCallback {
    private static final Logger logger = Logger.getLogger(JavascriptEvaluationDelegate.class.getName());

    private JsVariable evaluationResult = null;
    
    public JsVariable getEvaluationResult() {
	return evaluationResult;
    }
    
    @Override
    public void success(JsVariable result) {
	this.evaluationResult = result;
    }

    @Override
    public void failure(String error) {
	logger.log(Level.WARNING, "Failure: " + error);
	evaluationResult = null;
    }
}
