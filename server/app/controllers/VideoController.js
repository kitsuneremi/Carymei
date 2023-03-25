const Video = require('../models/Video');
const {Model} = require('sequelize');

class VideoController {

     getVideo(req, res, next) {
        Video.findOne({ videoId: req.params.slug })
            .lean()
            .then(video => {
                res.json(video)
            })
            .catch(next)
    }

    async getListVideo(req, res, next) {
        const model = await Model.findAll()
        res.json(model)
    }
}

module.exports = new VideoController();