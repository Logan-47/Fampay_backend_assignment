const db = require('../db');
const { DataTypes, Sequelize } = require('sequelize');

const Videos = db.define('videos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  channelId: {
    type: DataTypes.STRING,
  },
  VideoId: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  publishedAt: {
    type: DataTypes.DATE,
  },
  thumbnails: {
    type: DataTypes.STRING,
  },
});

module.exports = Videos;
