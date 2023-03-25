const homeRouter = require('./home.js');
const searchRouter = require('./search.js');
const loginRouter = require('./login.js');

function route(app) {
    app.use('/api/video', homeRouter);
    app.use('/api/searchbar', searchRouter);
    app.use('/api/login', loginRouter);
}

module.exports = route;
 