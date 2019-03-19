const winston = require('winston')

const logger = winston.createLogger({
    transports:[
        new winston.transports.Console()
    ]
})

logger.info('App starts');
logger.error('Nešto neće');
logger.info('End');
