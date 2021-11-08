/* abstract product
writeLog()
*/

/* concreate product  */
class DatabaseLogger {
    writeLog() {
        console.log('writing log to database');
    }
}

class FileLogger {
    writeLog() {
        console.log('writing log to file');
    }
}

/* abstract factory
createLogger()
*/

/* concrete factory */
const DatabaseLogFactory = {
    createLogger() {
        return new DatabaseLogger();
    },
};

const FileLogFactory = {
    createLogger() {
        return new FileLogger();
    },
};

/* usage code */

const fileLogger = FileLogFactory.createLogger();
fileLogger.writeLog();

const dbLogger = DatabaseLogFactory.createLogger();
dbLogger.writeLog();
