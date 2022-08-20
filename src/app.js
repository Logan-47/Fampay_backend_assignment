const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const xss = require('xss-clean');
const constants = require('./constants');
const { NODE_ENV, API_STATUS } = constants;
const { videosRoutes } = require('./routes');

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

app.use('/api/videos', videosRoutes);

app.all('*', (req, res) => {
  res
    .status(404)
    .send({ error: `Can't find ${req.originalUrl} on this server` });
});

module.exports = app;
