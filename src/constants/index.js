const PORT = 3000;
const NODE_ENV = {
  PRODUCTION: 'production',
  development: 'development',
};
const API_STATUS = {
  STATUS_OK: 200,
  INTERNAL_SERVER_ERROR: 500,
};

const YT_DEFAULT_CONFIGS = {
  SEARCH_QUERY: 'cricket',
  MAX_RESULT_PER_QUERY: 25,
};

const DB_DEFAULT_CONFIGS = {
  DB_NAME: 'yt_search',
  DB_USERNAME: 'root',
  DB_PASSWORD: 'root',
};

module.exports = {
  PORT,
  NODE_ENV,
  API_STATUS,
  YT_DEFAULT_CONFIGS,
  DB_DEFAULT_CONFIGS,
};
