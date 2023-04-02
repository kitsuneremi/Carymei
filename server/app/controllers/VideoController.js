const {sequelize, Video} = require('../models/index');

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
        const model = await Video.findAll()
        res.json(model)
    }
}

module.exports = new VideoController();