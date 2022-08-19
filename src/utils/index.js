const configs = require('../../config.json');

const { api_keys } = configs;

const resetAPIKey = () => {
  let i = 0;
  const apiKeysSize = api_keys.length;
  const currAPIKeyInx = i % apiKeysSize;
  process.env.apiKey = api_keys[currAPIKeyInx];
};

module.exports = {
  resetAPIKey,
};
