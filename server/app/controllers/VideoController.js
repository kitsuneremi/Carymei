const { sequelize, Video, Channel, Account } = require('../models/index');

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
        Channel.findOne({
            include: {
                model: Video,
                where: {
                    link: req.params.slug
                }
            }
        })
            .then(channel => {
                res.json(channel)
            })
            .catch(next)
    }

    async getStudioListVideo(req, res, next) {
        await Account.findOne({
            where: {
                username: req.body.username
            }
        })
            .then(acc => {
                Channel.findOne({
                    where: {
                        accountId: acc.id
                    }
                })
                    .then(channel => {
                        Video.findAll({
                            where: {
                                channelId: channel.id
                            }
                        })
                            .then(video => { res.json(video)})
                    })
            })

    }
}

module.exports = new VideoController();