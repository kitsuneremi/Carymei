const { sequelize, Video } = require('../models/index');


class UpController {
    async up(req, res, next) {
        await sequelize.sync();
        await Video.create(req.body)
            .then((result) => {
                res.json(result);   
            }).catch((err) => {
                res.json(err);
            });
        
    }

    async test(req, res, next) {
        res.send("ok");
    }
}

module.exports = new UpController();