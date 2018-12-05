var express = require('express');
var app = express();
var db = require('../config/db');
var mysql = require('mysql');

app.get('/', function(req, res){
    res.render('report', {
        in : true
    });
});

app.post('/', function(req, res){
    console.log("reporting yo ass");
    console.log(req.body.name);
    res.render('report', {
        in :true
    });
    console.log(req.body.rpyo);
});




module.exports = app;