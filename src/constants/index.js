const PORT = 3000;
const NODE_ENV = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
};
const API_STATUS = {
  STATUS_OK: 200,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
};

const YT_DEFAULT_CONFIGS = {
  SEARCH_QUERY: 'cricket',
  MAX_RESULT_PER_QUERY: 25,
};

const ERROR_CONSTANTS = {
  QUOTA_EXCEEDED: 'quotaExceeded',
};

module.exports = {
  PORT,
  NODE_ENV,
  API_STATUS,
  YT_DEFAULT_CONFIGS,
  ERROR_CONSTANTS,
};
