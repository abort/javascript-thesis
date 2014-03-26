/**
 * Software Evolution: Session 1
 *
 * Module:      logger::logger
 * Date:        November 22, 2012
 *
 * Authors:     Vladimir Komsiyski   &   Jimi van der Woning
 * Student IDs: 10335668             &   6061400
 */

module Logger

import IO;

public int LOG_LEVEL_CRITICAL   = 0;
public int LOG_LEVEL_ERROR      = 1;
public int LOG_LEVEL_WARNING    = 2;
public int LOG_LEVEL_INFO       = 3;
public int LOG_LEVEL_DEBUG      = 4;

public int LOG_LEVEL_DEFAULT = LOG_LEVEL_INFO;

public int logLevel = LOG_LEVEL_INFO; 

/*
 * Print the given message if the log level is higher than the given level
 */
public void log(value msg, int level) {
    if(logLevel >= level)
        println(msg);
}

/*
 * Print the given message if the log level is higher than the default level
 */
public void log(value msg) =
    log(msg, LOG_LEVEL_DEFAULT);

/*
 * Print the given message if the log level is higher than critical
 */
public void critical(value msg) =
    log(msg, LOG_LEVEL_CRITICAL);

/*
 * Print the given message if the log level is higher than error
 */
public void error(value msg) =
    log(msg, LOG_LEVEL_ERROR);

/*
 * Print the given message if the log level is higher than warning
 */
public void warning(value msg) =
    log(msg, LOG_LEVEL_WARNING);

/*
 * Print the given message if the log level is higher than info
 */
public void info(value msg) =
    log(msg, LOG_LEVEL_INFO);

/*
 * Print the given message if the log level is higher than debug
 */
public void debug(value msg) =
    log(msg, LOG_LEVEL_DEBUG);