var express = require('express');
var app = express();
var db = require('../config/db');
var path = require('path');
var expressValidator = require('express-validator');
var expressSession = require('express-sessions');


app.get('/', function(res, req){
    res.send('home', {
        time: "in"
    });
});


module.exports = app;