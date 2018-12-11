var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');

app.get('/', function(req, res){
    user = req.param('username');
    console.log(user);
    res.render('pchange', {
        off : true
    });
});

app.post('/', function(req, res){
console.log(user);
console.log(req.body.password);
console.log(req.body.confirmpassword);
});

module.exports = app;