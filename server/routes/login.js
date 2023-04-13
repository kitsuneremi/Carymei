const express = require('express');
const router = express.Router();
const multer = require('multer');

const x = multer()
const loginController = require('../app/controllers/LoginController');
router.post('/', x.none(),loginController.find);

module.exports = router;
