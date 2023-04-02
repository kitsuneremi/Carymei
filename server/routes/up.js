const express = require('express');
const router = express.Router();
const UpController = require('../app/controllers/UpController');
const multer = require('multer');
const path = require('path');

const VideoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"Storage/video")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
const ImageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"Storage/img")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const VideoUpload = multer({storage: VideoStorage})
const ImageUpload = multer({storage: ImageStorage})
router.post('/video',VideoUpload.single("video"), (req, res, next) => {
    res.send({name: VideoStorage._handleFile.name})
});
router.post('/img',ImageUpload.single("file"), (req, res, next) => {
    res.send({name: ImageStorage._handleFile.name})
});

module.exports = router;
