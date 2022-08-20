const axios = require('axios').default;
const { ERROR_CONSTANTS } = require('../constants');
const { apiTokenUtils } = require('../utils');
const youtube = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
});

const search = async (options) => {
  try {
    let url = '/search';
    url += `?key=${process.env.apiKey}`;
    Object.keys(options).forEach((key) => {
      url += `&${key}=${options[key]}`;
    });

    const response = await youtube.get(url);
    return response.data;
  } catch (err) {
    const errData = err?.response?.data;
    if (errData && errData.error.errors) {
      const errors = errData.error.errors[0];
      if (errors && errors.reason === ERROR_CONSTANTS.QUOTA_EXCEEDED) {
        console.log(`[youtube][search][err]: ${errors.message}`);
        apiTokenUtils.resetAPIKey();
      } else {
        console.log(`[youtube][search][err]: ${errors}`);
      }
    } else {
      console.log(`[youtube][search][err]: ${err.message}`);
    }

    throw new Error(err.message);
  }
};

module.exports = {
  search,
};
