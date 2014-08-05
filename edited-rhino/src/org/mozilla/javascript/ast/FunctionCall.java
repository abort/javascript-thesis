/* -*- Mode: java; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package org.mozilla.javascript.ast;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.mozilla.javascript.Token;

/**
 * AST node for a function call.  Node type is {@link Token#CALL}.<p>
 */
public class FunctionCall extends AstNode {

    protected static final List<AstNode> NO_ARGS =
        Collections.unmodifiableList(new ArrayList<AstNode>());

    protected AstNode target;
    protected List<AstNode> arguments;
    protected int lp = -1;
    protected int rp = -1;

    {
        type = Token.CALL;
    }

    public FunctionCall() {
    }

    public FunctionCall(int pos) {
        super(pos);
    }

    public FunctionCall(int pos, int len) {
        super(pos, len);
    }

    /**
     * Returns node evaluating to the function to call
     */
    public AstNode getTarget() {
        return target;
    }

    /**
     * Sets node evaluating to the function to call, and sets
     * its parent to this node.
     * @param target node evaluating to the function to call.
     * @throws IllegalArgumentException} if target is {@code null}
     */
    public void setTarget(AstNode target) {
        assertNotNull(target);
        this.target = target;
        target.setParent(this);
    }

    /**
     * Returns function argument list
     * @return function argument list, or an empty immutable list if
     *         there are no arguments.
     */
    public List<AstNode> getArguments() {
        return arguments != null ? arguments : NO_ARGS;
    }

    /**
     * Sets function argument list
     * @param arguments function argument list.  Can be {@code null},
     *        in which case any existing args are removed.
     */
    public void setArguments(List<AstNode> arguments) {
        if (arguments == null) {
            this.arguments = null;
        } else {
            if (this.arguments != null)
                this.arguments.clear();
            for (AstNode arg : arguments) {
                addArgument(arg);
            }
        }
    }

    /**
     * Adds an argument to the list, and sets its parent to this node.
     * @param arg the argument node to add to the list
     * @throws IllegalArgumentException} if arg is {@code null}
     */
    public void addArgument(AstNode arg) {
        assertNotNull(arg);
        if (arguments == null) {
            arguments = new ArrayList<AstNode>();
        }
        arguments.add(arg);
        arg.setParent(this);
    }

    /**
     * Returns left paren position, -1 if missing
     */
    public int getLp() {
        return lp;
    }

    /**
     * Sets left paren position
     * @param lp left paren position
     */
    public void setLp(int lp) {
        this.lp = lp;
    }

    /**
     * Returns right paren position, -1 if missing
     */
    public int getRp() {
        return rp;
    }

    /**
     * Sets right paren position
     */
    public void setRp(int rp) {
        this.rp = rp;
    }

    /**
     * Sets both paren positions
     */
    public void setParens(int lp, int rp) {
        this.lp = lp;
        this.rp = rp;
    }

    public String toSource(int depth)
    {
      StringBuilder sb = new StringBuilder();
      sb.append(makeIndent(depth));
      sb.append(this.target.toSource(0));
      sb.append("(");
      if (this.arguments != null) {
        printList(this.arguments, sb);
      }
      sb.append(")");
      String originalCall = sb.toString();
      if (ToSourceConfig.getInstance().isRewriteFunctionCalls()) {
        StringBuffer buff = new StringBuffer();
        //buff.append("(function() {\nvar _wrap_oldLastCall = _wrap_lastCall;\n");
        buff.append("(_wrap_setLastFunctionCall(\"" + ToSourceConfig.getInstance().getFilename() + "\"," + this.target.getLineno() + "," + getRealAbsolutePositionOfPossibleParenthesizedExpression(target) + "," + (getAbsolutePosition() + getLength()) + "," + getPropertyTarget(this.target) + "," + (new Boolean(this.getEnclosingFunction() == null)).toString() + "," + isProxyFunction(target) + ")");
        buff.append(" || _wrap_popCallStack(");
        buff.append(originalCall);
        buff.append("))");
        /*buff.append("\nvar _wrap_result = ");
        buff.append(originalCall + ";\n");
        buff.append("_wrap_lastCall = _wrap_oldLastCall;\nreturn _wrap_result;\n}).apply(this, typeof arguments === 'undefined' ? undefined : [].slice.call(arguments))");
        */
        return buff.toString();
      }

      return sb.toString();
    }
    
    protected boolean isProxyFunction(AstNode target) {

	if (target instanceof ParenthesizedExpression) {
	    return isProxyFunction(((ParenthesizedExpression) target).getExpression());
	}
	if (target instanceof PropertyGet) {
	    Name property = (((PropertyGet) target).getProperty());

	    if ("call".equals(property.getIdentifier())) {
		// System.out.println("found call");
		return true;
	    }
	    if ("apply".equals(property.getIdentifier())) {
		// System.out.println("found apply");
		return true;
	    }
	}
	if (target instanceof Name) {
	    if ("eval".equals(((Name) target).getIdentifier()))
		return true;
	}

	return false;
    }
    
    protected int getRealAbsolutePositionOfPossibleParenthesizedExpression(AstNode target) {
	int amount = 0;
	if (target instanceof ParenthesizedExpression) {
	    AstNode node = target;
	    while (node instanceof ParenthesizedExpression) {
		amount++;
		node = ((ParenthesizedExpression)node).getExpression();
	    }
	}
	
	// Correct bug #129 https://github.com/mozilla/rhino/issues/129
	return target.getAbsolutePosition() - amount;
    }
    
    protected String getPropertyTarget(AstNode target) {
	if (!isSimpleTarget(target)) return "null";

	// semantical change... prevent
	String src = target.toSource();
	if (src.contains("\"") || src.contains("\'") || src.contains("(") || src.contains(")") ||
		src.contains("++") || src.contains("--") || src.contains("+=") || src.contains("-=")
		|| src.contains("%=") || src.contains("/=") || src.contains("*=")) return "null";

//	System.out.print(" reference: " + target.toSource() + "\n");
	
	if (target instanceof FunctionCall) return "null";
	
	return target.toSource();
    }
    
    private boolean isSimpleTarget(AstNode target) {
	final boolean[] targetIsSimple = { false };

	target.visit(new NodeVisitor() {
	    @Override
	    public boolean visit(AstNode node) {
		if (node instanceof Name || node instanceof PropertyGet) {		  
		    targetIsSimple[0] = true;
		    return true;
		}
		if (node instanceof ParenthesizedExpression) {
		    // Sub expressions of parentheses do not get visited well, so we do it recursively 
		    targetIsSimple[0] = isSimpleTarget(((ParenthesizedExpression)node).getExpression());
		    if (!targetIsSimple[0]) return false;
		    return true;
		}
		// Otherwise stop visiting as its not simple
		targetIsSimple[0] = false;
		return false;
	    }
	});	
	
	return targetIsSimple[0];
    }
    
    public String toUnmodifiedSource(int depth) {
        StringBuilder sb = new StringBuilder();
        sb.append(makeIndent(depth));
        sb.append(target.toSource(0));
        sb.append("(");
        if (arguments != null) {
            printList(arguments, sb);
        }
        sb.append(")");
        return sb.toString();
    }

    public static String getCallTargetRepresentation(AstNode target)
    {
      String targetString = getCallTarget(target);
      if ("null".equals(targetString)) {
        return "";
      }

      return targetString;
    }

    public static String getCallTarget(AstNode target) {
      if ((target instanceof Name)) {
        return ((Name)target).getIdentifier();
      }

      return "null";
    }

    public static String getLongCallTarget(AstNode target) {
      String targetString = getCallTarget(target);
      if (("null".equals(targetString)) || (targetString == null)) {
        return "null";
      }

      String[] longCallTarget = targetString.split("\\.");
      if (longCallTarget.length <= 2) return longCallTarget[0];

      StringBuffer buff = new StringBuffer();
      for (int i = 0; i < longCallTarget.length - 1; i++) {
        buff.append(longCallTarget[i]);
        buff.append('.');
      }
      buff.deleteCharAt(buff.length() - 1);
      return buff.toString();
    }


    /**
     * Visits this node, the target object, and the arguments.
     */
    @Override
    public void visit(NodeVisitor v) {
        if (v.visit(this)) {
            target.visit(v);
            for (AstNode arg : getArguments()) {
                arg.visit(v);
            }
        }
    }
}
