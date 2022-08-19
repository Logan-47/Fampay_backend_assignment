const dotenv = require('dotenv');
dotenv.config();
const app = require('./src/app');
const utils = require('./src/utils');
const db = require('./src/db');
const models = require('./src/models');

app.listen(3000, () => {
  db.sync({ alter: true });
  utils.resetAPIKey();
  console.log('server listening on PORT 3000');
});
