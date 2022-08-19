const youtube = require('../youtube');
const { API_STATUS } = require('../constants');
const { YT_DEFAULT_CONFIGS } = require('../constants');
const configs = require('../../config.json');
const services = require('../services');

const { videoServices } = services;

const { MAX_RESULT_PER_QUERY, SEARCH_QUERY } = YT_DEFAULT_CONFIGS;
const {
  yt_max_result_per_query = MAX_RESULT_PER_QUERY,
  yt_search_category = SEARCH_QUERY,
} = configs;

const updateVideosJob = async (req, res) => {
  try {
    const response = await youtube.search.list({
      auth: req.apiKey,
      q: yt_search_category,
      type: 'video',
      part: 'snippet',
      maxResults: yt_max_result_per_query,
    });

    // if(response && response.items && response.items.length > 0) {
    //   const items = response.items;
    //   items.
    // }

    return res.status(API_STATUS.STATUS_OK).send(response.data);
  } catch (err) {
    return res.status(API_STATUS.INTERNAL_SERVER_ERROR).send({
      error: err.message,
    });
  }
};

module.exports = updateVideosJob;
