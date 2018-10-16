'use strict'

const express = require('express')
const bodyParse = require('body-parser')
const app = express();
const api = require('./routes');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())
app.use('/api', api)

module.exports = app;