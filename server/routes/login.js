const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');
router.post('/', loginController.find);

module.exports = router;
