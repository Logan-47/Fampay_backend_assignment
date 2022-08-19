const { Sequelize } = require('sequelize');
const configs = require('../../config.json');
const constants = require('../constants');

const { DB_NAME, DB_PASSWORD, DB_USERNAME } = constants.DB_DEFAULT_CONFIGS;

const {
  database: {
    name: dbName = DB_NAME, // if name is undefined set DB_NAME as default value
    username: dbUserName = DB_USERNAME,
    password: dbPassword = DB_PASSWORD,
  },
} = configs;

const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
  dialect: 'sqlite',
  storage: 'database.sqlite', // Will be saving DB as a File
  loggin: console.log,
});

module.exports = sequelize;
