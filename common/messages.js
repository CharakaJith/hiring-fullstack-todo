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

  // repository layer messages
  REPO: {
    FAILED: {
      CREATE: (entity, error) => `Failed to create new ${entity}: ${error}`,
      GET: {
        ALL: (entity, error) => `Failed to get all ${entity}: ${error}`,
      },
    },
  },
};
