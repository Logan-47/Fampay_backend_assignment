const express = require('express');
const { videosController } = require('../controllers');
const router = express.Router();

router.get('/', videosController.getAllVideos);

module.exports = router;
