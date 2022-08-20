const cron = require('node-cron');
const { updateVideosJob } = require('../jobs');

const updateVideosTask = cron.schedule(
  ' * * * * *',
  async () => {
    const res = await updateVideosJob();
    console.log(`Cron Ran Successfully: ${res?.message || res.error}`);
  },
  {
    scheduled: false,
  }
);

module.exports = updateVideosTask;
