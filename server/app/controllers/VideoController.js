const { sequelize, Video, Channel } = require('../models/index');

class VideoController {

    getVideo(req, res, next) {
        Video.findOne({ videoId: req.params.slug })
            .then(video => {
                res.json(video)
            })
            .catch(next)
    }

    async getListVideo(req, res, next) {
        const model = await Video.findAll({
            where: {
                status: 0
            }
        })
        res.json(model)
    }

    getChannelFromVideo(req, res, next) {
        Channel.findOne({ include: {
            model: Video,
            where: {
                link: req.params.slug
            } 
        } })
            .then(channel => {
                res.json(channel)
            })
            .catch(next)
    }
}

module.exports = new VideoController();