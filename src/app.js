const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const xss = require('xss-clean');
const constants = require('./constants');
const jobs = require('./jobs');
const middlewares = require('./middlewares');

const { apiTokenMiddleWare } = middlewares;

const { NODE_ENV, API_STATUS } = constants;

const app = express();
app.use(helmet()); // HTTP Security Headers

if (process.env.NODE_ENV === NODE_ENV.PRODUCTION) {
  app.use(morgan('dev'));
}

app.use(express.json()); // parse JSON
app.use(xss());

// routes
app.get('/api/ping', (req, res) => {
  return res.status(API_STATUS.STATUS_OK).send({
    message: 'pong',
  });
});

app.get(
  '/api/interal-job/updateVideos',
  apiTokenMiddleWare.setAPIToken,
  async (req, res) => {
    return await jobs.updateVideosJob(req, res);
  }
);

app.all('*', (req, res) => {
  res
    .status(404)
    .send({ error: `Can't find ${req.originalUrl} on this server` });
});

module.exports = app;
