const {sequelize, Video} = require('../models/index');


class UpController {
    up(req, res, next) {
       res.send('ok');
       res.status(200);
    }
}

module.exports = new UpController();