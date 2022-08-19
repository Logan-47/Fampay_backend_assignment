const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app');

app.listen(3000, () => {
  console.log('server listening on PORT 3000');
});
