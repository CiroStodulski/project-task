const express = require('express'),
    app = express(),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    cors = require('../config/cors'),
    helmet = require('helmet');

// load required middleware 
app.use(helmet());
app.use(cors);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// load required modules
consign()
    .include('config/dbconnection.js')
    .include('src/models')
    .then('src')
    .into(app);

module.exports = app;