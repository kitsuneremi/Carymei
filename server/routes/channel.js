const express = require('express');
const router = express.Router();

const channelController = require('../app/controllers/ChannelController')
const VideoController = require('../app/controllers/VideoController')
router.get('/test/:slug', channelController.getChannelFromVideo);

module.exports = router;
