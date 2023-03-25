const express = require('express');
const route = require('../../routes/index');
const connect = require('../db/index');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');

//connect
// connect()

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors())
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
const port = 5000;




//connect database
const sequelize = new Sequelize('erinasai_zootube', 'erinasai_lily', 'Mochirondesu123', {
    host: '103.200.22.212',
    dialect: 'mysql'
});

try {
    const test = async () => {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    test();
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//router
route(app);