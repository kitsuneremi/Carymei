const { Account } = require('../models/index')
const jwt = require('jsonwebtoken')

require('dotenv').config()

class LoginController {
    async find(req, res, next) {
        if (req.body.username != '') {
            const acc = await Account.findOne({ where: { username: req.body.username } })
            if (!acc) { return res.sendStatus(401) }
            //create jwt
            const accessToken = jwt.sign(acc.dataValues, process.env.ACCESS_TOKEN_SECRECT)
            res.json({ accessToken })
        }

    }


}

module.exports = new LoginController();