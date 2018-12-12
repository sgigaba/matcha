var express = require('express');
var app = express();
var db = require('../config/db');
var path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


app.get('/', function(res, req){

sesh = req.session;
sesh.email = '';
    res.send('home', {
        time: "in"
    });
});


module.exports = app;