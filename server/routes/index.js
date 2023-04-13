const homeRouter = require('./home.js');
const searchRouter = require('./search.js');
const loginRouter = require('./login.js');
const UpRouter = require('./up.js');
const fileRouter = require('./file.js');
const channelRouter = require('./channel.js');
const accountRouter = require('./account.js');
const verifyToken = require('../middleware/auth')

function route(app) {
    app.use('/api/video', homeRouter);
    app.use('/api/searchbar', searchRouter);
    app.use('/api/login', loginRouter);
    app.use('/api/upload', verifyToken, UpRouter);
    app.use('/api/file', fileRouter);
    app.use('/api/channel', channelRouter);
    app.use('/api/account', accountRouter);
}

module.exports = route;
 