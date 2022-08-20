const mongoose = require('mongoose');
const configs = require('../../config.json');

const {
  database: { uri: dbUri },
} = configs;

const init = async () => {
  mongoose
    .connect(dbUri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('[database] connected to mongodb');
    })
    .catch((err) => {
      console.log(`[database][err]: ${err}`);
    });
};

module.exports = {
  init,
};
