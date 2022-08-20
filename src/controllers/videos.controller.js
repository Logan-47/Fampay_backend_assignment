const { API_STATUS } = require('../constants');
const { videoServices } = require('../services');

const getAllVideos = async (req, res) => {
  try {
    const { page = 0, limit = 10, q, sortBy = 'publishedAt' } = req.query;

    const skip = parseInt(page) * parseInt(limit);
    const { videos, totalCount } = await videoServices.getAllVideos({
      skip,
      limit: parseInt(limit),
      q,
      sortBy,
    });

    const totalPages = Math.floor(totalCount / limit);
    const hasPrev = page > 0;
    const hasNext = page < totalPages;

    res.status(API_STATUS.STATUS_OK).send({
      videos,
      hasPrev,
      hasNext,
      totalCount,
      totalPages,
    });
  } catch (err) {
    console.log(
      `[controllers][videos.controller][getAllVideos][err]: ${err.message}`
    );
    return res.status(API_STATUS.INTERNAL_SERVER_ERROR).send({
      message: 'Something Went Wrong',
    });
  }
};

module.exports = {
  getAllVideos,
};
