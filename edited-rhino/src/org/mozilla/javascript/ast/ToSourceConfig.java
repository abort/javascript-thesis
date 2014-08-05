package org.mozilla.javascript.ast;

import java.util.HashSet;
import java.util.Set;

public class ToSourceConfig
{
  private static ToSourceConfig instance = null;

  private boolean rewriteFunctions = false;
  private boolean rewriteFunctionCalls = false;
  private String filename = null;
  private Set<String> callsites = new HashSet<String>();

  public static ToSourceConfig getInstance() {
    if (instance == null) {
      instance = new ToSourceConfig();
    }
    return instance;
  }

  public boolean isRewriteFunctions() {
    return this.rewriteFunctions;
  }

  public void setRewriteFunctions(boolean rewriteFunctions) {
    this.rewriteFunctions = rewriteFunctions;
  }

  public boolean isRewriteFunctionCalls() {
    return this.rewriteFunctionCalls;
  }

  public void setRewriteFunctionCalls(boolean rewriteFunctionCalls) {
    this.rewriteFunctionCalls = rewriteFunctionCalls;
  }
  
  public void setFilename(final String filename) {
    this.filename = filename;
  }
  
  public String getFilename() {
    return filename;
  }
  
  public Set<String> getCallsites() {
    return callsites;
  }
}
