/* -*- Mode: java; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package org.mozilla.javascript.ast;

import org.mozilla.javascript.Token;

/**
 * AST node for a single name:value entry in an Object literal.
 * For simple entries, the node type is {@link Token#COLON}, and
 * the name (left side expression) is either a {@link Name}, a
 * {@link StringLiteral} or a {@link NumberLiteral}.<p>
 *
 * This node type is also used for getter/setter properties in object
 * literals.  In this case the node bounds include the "get" or "set"
 * keyword.  The left-hand expression in this case is always a
 * {@link Name}, and the overall node type is {@link Token#GET} or
 * {@link Token#SET}, as appropriate.<p>
 *
 * The {@code operatorPosition} field is meaningless if the node is
 * a getter or setter.<p>
 *
 * <pre><i>ObjectProperty</i> :
 *       PropertyName <b>:</b> AssignmentExpression
 * <i>PropertyName</i> :
 *       Identifier
 *       StringLiteral
 *       NumberLiteral</pre>
 */
public class ObjectProperty extends InfixExpression {

    {
        type = Token.COLON;
    }

    /**
     * Sets the node type.  Must be one of
     * {@link Token#COLON}, {@link Token#GET}, or {@link Token#SET}.
     * @throws IllegalArgumentException if {@code nodeType} is invalid
     */
    public void setNodeType(int nodeType) {
        if (nodeType != Token.COLON
            && nodeType != Token.GET
            && nodeType != Token.SET)
            throw new IllegalArgumentException("invalid node type: "
                                               + nodeType);
        setType(nodeType);
    }

    public ObjectProperty() {
    }

    public ObjectProperty(int pos) {
        super(pos);
    }

    public ObjectProperty(int pos, int len) {
        super(pos, len);
    }

    /**
     * Marks this node as a "getter" property.
     */
    public void setIsGetter() {
        type = Token.GET;
    }

    /**
     * Returns true if this is a getter function.
     */
    public boolean isGetter() {
        return type == Token.GET;
    }

    /**
     * Marks this node as a "setter" property.
     */
    public void setIsSetter() {
        type = Token.SET;
    }

    /**
     * Returns true if this is a setter function.
     */
    public boolean isSetter() {
        return type == Token.SET;
    }

    @Override
    public String toSource(int depth) {
        StringBuilder sb = new StringBuilder();
        sb.append(makeIndent(depth));
        final boolean stripFunction = isGetter() || isSetter(); 
        if (isGetter()) {
            sb.append("get ");
        } else if (isSetter()) {
            sb.append("set ");
        }
        sb.append(left.toSource(0));
        if (type == Token.COLON) {
            sb.append(": ");
        }
        
        /**
         * Fix for bug #798642
         * AST toSource on getter/setter inserting 'function' keyword 
         * https://bugzilla.mozilla.org/show_bug.cgi?id=798642
         */
        String toAppend;
        if (stripFunction && right instanceof FunctionNode) {
            if (ToSourceConfig.getInstance().isRewriteFunctionCalls()) {
        	// TODO, do add to the source
        	
        	// To unmodified source, we do not add this in the call graph (we do not consider these real functions), but do have to add a reference to this
        	toAppend = ((FunctionNode)right).toUnmodifiedSourceWithThisReference(0);
            }
            else {
        	toAppend = ((FunctionNode)right).toUnmodifiedSource(0);
            }
            System.out.println("To append: " + toAppend);
            toAppend = toAppend.substring(8); // strips 'function'
        }
        else {
            toAppend = right.toSource(0);
        }
        sb.append(toAppend);
        return sb.toString();
    }
    
    public String toUnmodifiedSource(int depth) {
        StringBuilder sb = new StringBuilder();
        sb.append(makeIndent(depth));
        if (isGetter()) {
            sb.append("get ");
        } else if (isSetter()) {
            sb.append("set ");
        }
        sb.append(left.toSource(0));
        if (type == Token.COLON) {
            sb.append(": ");
        }
        sb.append(right.toSource(0));
        return sb.toString();	
    }
}
