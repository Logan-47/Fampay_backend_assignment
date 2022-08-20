const { videosModel } = require('../models');

const insertVideos = async (videos) => {
  try {
    return await videosModel.create(videos);
  } catch (err) {
    console.log(
      `[services][videos.services][insertVideos][err]: ${err.message}`
    );
    throw new Error(err.message);
  }
};

const getAllVideos = async ({ skip, limit, q, sortBy }) => {
  try {
    let videos = [];
    let totalCount = 0;
    if (q) {
      videos = await videosModel
        .fuzzySearch({
          query: q,
        })
        .sort({ [sortBy]: -1 });
      totalCount = videos.length;
      videos = videos.splice(skip, limit);
    } else {
      totalCount = await videosModel.estimatedDocumentCount();
      videos = await videosModel
        .find(
          {},
          {},
          {
            skip: skip,
            limit: limit,
          }
        )
        .sort({ [sortBy]: -1 });
    }

    return {
      videos,
      totalCount,
    };
  } catch (err) {
    console.log(
      `[services][videos.services][getAllVideos][err]: ${err.message}`
    );
    throw new Error(err.mesage);
  }
};

module.exports = {
  insertVideos,
  getAllVideos,
};
