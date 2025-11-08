const { customAlphabet } = require('nanoid');

// alphabet for 7 digit numbers
const nano7 = customAlphabet('0123456789', 7);

const displayIdGenerator = {
  TASK_ID: async () => {
    return `task-${nano7()}`;
  },
};

module.exports = displayIdGenerator;
