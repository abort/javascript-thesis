/* -*- Mode: java; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package org.mozilla.javascript.ast;

import org.mozilla.javascript.Token;

/**
 * New expression. Node type is {@link Token#NEW}.<p>
 *
 * <pre><i>NewExpression</i> :
 *      MemberExpression
 *      <b>new</b> NewExpression</pre>
 *
 * This node is a subtype of {@link FunctionCall}, mostly for internal code
 * sharing.  Structurally a {@code NewExpression} node is very similar to a
 * {@code FunctionCall}, so it made a certain amount of sense.
 */
public class NewExpression extends FunctionCall {

    private ObjectLiteral initializer;

    {
        type = Token.NEW;
    }

    public NewExpression() {
    }

    public NewExpression(int pos) {
        super(pos);
    }

    public NewExpression(int pos, int len) {
        super(pos, len);
    }

    /**
     * Returns initializer object, if any.
     * @return extra initializer object-literal expression, or {@code null} if
     * not specified.
     */
    public ObjectLiteral getInitializer() {
      return initializer;
    }

    /**
     * Sets initializer object.  Rhino supports an experimental syntax
     * of the form {@code new expr [ ( arglist ) ] [initializer]},
     * in which initializer is an object literal that is used to set
     * additional properties on the newly-created {@code expr} object.
     *
     * @param initializer extra initializer object.
     * Can be {@code null}.
     */
    public void setInitializer(ObjectLiteral initializer) {
      this.initializer = initializer;
      if (initializer != null)
          initializer.setParent(this);
    }

    @Override
    public String toSource(int depth)
    {
      StringBuilder sb = new StringBuilder();
      sb.append(makeIndent(depth));
      sb.append("new ");
      sb.append(this.target.toSource(0));
      sb.append("(");
      if (this.arguments != null) {
        printList(this.arguments, sb);
      }
      sb.append(")");
      if (this.initializer != null) {
        sb.append(" ");
        sb.append(this.initializer.toSource(0));
      }

      String originalCall = sb.toString();
      if (ToSourceConfig.getInstance().isRewriteFunctionCalls()) {
        StringBuffer buff = new StringBuffer();
       /* buff.append("(function() {\nvar _wrap_oldLastCall = _wrap_lastCall;\n");
        buff.append("_wrap_setLastFunctionCall(\"" + ToSourceConfig.getInstance().getFilename() + "\"," + getLineno() + "," + getAbsolutePosition() + "," + (getAbsolutePosition() + getLength()) + ");\n");
        buff.append("\nvar _wrap_result = ");
        buff.append(originalCall + ";\n");
        buff.append("_wrap_lastCall = _wrap_oldLastCall;\nreturn _wrap_result;\n}).apply(this, typeof arguments === 'undefined' ? undefined : [].slice.call(arguments))");
        */
        
        buff.append("(_wrap_setLastFunctionCall(\"" + ToSourceConfig.getInstance().getFilename() + "\"," + this.target.getLineno() + "," + getRealAbsolutePositionOfPossibleParenthesizedExpression(this) + "," + (getAbsolutePosition() + getLength()) + "," + getPropertyTarget(this.getTarget()) + "," + (new Boolean(this.getEnclosingFunction() == null)).toString() + "," + isProxyFunction(target) + ")");
        buff.append(" || _wrap_popCallStack(");
        buff.append(originalCall);
        buff.append("))");
        //	+ " typeof arguments === 'undefined' ? undefined : arguments)");
        return buff.toString();
      }
      return sb.toString();
    }

    /**
     * Visits this node, the target, and each argument.  If there is
     * a trailing initializer node, visits that last.
     */
    @Override
    public void visit(NodeVisitor v) {
        if (v.visit(this)) {
            target.visit(v);
            for (AstNode arg : getArguments()) {
                arg.visit(v);
            }
            if (initializer != null) {
                initializer.visit(v);
            }
        }
    }
}