const dotenv = require('dotenv');
dotenv.config();
const app = require('./src/app');
const utils = require('./src/utils');
const db = require('./src/db');
const crons = require('./src/crons');
const { PORT } = require('./src/constants');
const { port = PORT } = require('./config.json');
const mongoose = require('mongoose');

const server = app.listen(port, () => {
  db.init();
  utils.apiTokenUtils.resetAPIKey();
  crons.updateVideosCron.start();
  console.log(`server listening on PORT ${port}`);
});

process.on('uncaughtException', (err) => {
  console.log('Unhandled Exception!  Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    console.log('Server Closed.');
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
    });
    process.exit(1);
  });
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('unhandled REJECTION! Shutting down...');
  server.close(() => {
    console.log('Server Closed.');
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
    });
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing server.');
  server.close(() => {
    console.log('Server Closed.');

    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
    });

    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.info('SIGINT signal received.');
  console.log('Closing server.');
  server.close(() => {
    console.log('Server Closed.');

    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
    });

    process.exit(0);
  });
});
