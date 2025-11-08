module.exports = {
  // cors
  CORS: {
    INVALID: 'Not allowed by CORS!',
  },

  // database configuration messages
  DATABASE: {
    CONN: {
      SUCCESS: 'Connection has been established successfully.',
      FAILED: (error) => `Unable to connect to the database: ${error}`,
    },
  },

  // validations
  VALIDATION: {
    FAILED: 'Validation failed.',
  },

  // payload messages
  PAYLOAD: {
    TASK: {
      NOT_FOUND: 'Task not found!',
      DELETED: 'Task deleted successfully!',
    },
  },

  // auth messages
  AUTH: {
    FAILED: 'Authentication failed!',
    FORBIDDEN: 'Access denied!',
  },

  // repository layer messages
  REPO: {
    FAILED: {
      CREATE: (entity, error) => `Failed to create new ${entity}: ${error}`,
      GET: {
        ALL: (entity, error) => `Failed to get all ${entity}: ${error}`,
        BY_ID: (entity, error) => `Failed to get ${entity} by ID: ${error}`,
      },
      UPDATE: (entity, error) => `Failed to update ${entity} by ID: ${error}`,
    },
  },
};
