const mongoose = require('mongoose');
const logger = require('../middleware/log/logger');
const { DATABASE } = require('../common/messages');
const { LOG_TYPE } = require('../constants/logger.constants');
const { STATUS_CODE } = require('../constants/app.constants');

class MongoDB {
  static async connect() {
    const uri = process.env.MONGO_URI;

    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log(DATABASE.CONN.SUCCESS);
    } catch (error) {
      const errorMessage = DATABASE.CONN.FAILED(error.message);

      logger(LOG_TYPE.ERROR, false, STATUS_CODE.SERVER_ERROR, errorMessage);

      console.error(errorMessage);
      process.exit(1);
    }
  }
}

module.exports = MongoDB;
