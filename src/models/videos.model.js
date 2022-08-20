const mongoose = require('mongoose');
const mongooseFuzzySearch = require('mongoose-fuzzy-searching');

const videosSchema = new mongoose.Schema(
  {
    title: String,
    channelId: String,
    channelTitle: String,
    videoId: String,
    description: String,
    thumbnails: {
      default: {
        url: String,
        width: Number,
        height: Number,
      },
      medium: {
        url: String,
        width: Number,
        height: Number,
      },
      high: {
        url: String,
        width: Number,
        height: Number,
      },
    },
    publishedAt: Date,
  },
  {
    timestamps: true,
  }
);

videosSchema.plugin(mongooseFuzzySearch, {
  fields: ['title', 'description'],
});

module.exports = mongoose.model('Videos', videosSchema);
