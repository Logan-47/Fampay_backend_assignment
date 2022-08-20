const dotenv = require('dotenv');
dotenv.config();
const app = require('./src/app');
const utils = require('./src/utils');
const db = require('./src/db');
const crons = require('./src/crons');
const { PORT } = require('./src/constants');
const { port = PORT } = require('./config.json');

app.listen(port, () => {
  db.init();
  utils.apiTokenUtils.resetAPIKey();
  crons.updateVideosCron.start();
  console.log(`server listening on PORT ${port}`);
});
