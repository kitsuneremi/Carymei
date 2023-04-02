const express = require('express');
const route = require('../../routes/index');
// const connect = require('../db/index');
const app = express();
const cors = require('cors');

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors())
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
const port = 5000;
app.listen(port)
//router
route(app);