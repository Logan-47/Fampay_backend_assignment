const configs = require('../../config.json');

const { api_keys } = configs;
let inx = -1;
let apiKeysSize = api_keys.length;
let currAPIKeyInx = 0;

const resetAPIKey = () => {
  if (process.env.apiKey) {
    console.log(
      `[Utils][resetAPIKey][keyQuotaExceeded]: ${process.env.apiKey}`
    );
  }
  // TODO: Add logic to handle when all apis keys are exhausted
  inx += 1;
  currAPIKeyInx = inx % apiKeysSize;

  const newApiKey = api_keys[currAPIKeyInx];
  process.env.apiKey = newApiKey;
  console.log(`[Utils][resetAPIKey][newApiKey]: ${process.env.apiKey}`);
};

module.exports = { resetAPIKey };
