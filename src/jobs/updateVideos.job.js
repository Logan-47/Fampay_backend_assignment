const yt = require('../youtube');
const dayjs = require('dayjs');
const { YT_DEFAULT_CONFIGS } = require('../constants');
const configs = require('../../config.json');
const services = require('../services');
const { videoServices } = services;

const { MAX_RESULT_PER_QUERY, SEARCH_QUERY } = YT_DEFAULT_CONFIGS;
const { yt: ytConfigs } = configs;

const {
  yt_max_result_per_query = MAX_RESULT_PER_QUERY,
  yt_search_category = SEARCH_QUERY,
} = ytConfigs;

const updateVideosJob = async () => {
  try {
    const publishedAfter = dayjs().subtract(1, 'minute').toISOString();

    const searchOptions = {
      q: yt_search_category,
      type: 'video',
      part: 'snippet',
      maxResults: yt_max_result_per_query,
      publishedAfter: publishedAfter,
    };

    const data = await yt.search(searchOptions);
    let videos = [];
    if (data && data.items && data.items.length > 0) {
      const items = data.items;
      items.forEach((item) => {
        const {
          id: { videoId },
          snippet: { publishedAt, channelId, title, description, thumbnails },
        } = item;

        videos.push({
          title: title,
          channelId: channelId,
          videoId: videoId,
          description: description,
          publishedAt: publishedAt,
          thumbnails: thumbnails,
        });
      });
    }

    await videoServices.insertVideos(videos);
    console.log(`[${publishedAfter}][jobs][updateVideosJob]]: Success`);
    return {
      message: `${videos.length} Videos Updated Successfully`,
    };
  } catch (err) {
    console.log(`[jobs][updateVideosJob][err]: ${err.message}`);
  }
};

module.exports = updateVideosJob;
