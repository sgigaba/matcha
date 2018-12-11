var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');


app.get('/', function(req, res){
    res.render('reanb', {
        in : true
    });
});

app.post('/', function(req, res){
    console.log(req.body.rpyo + ":");
    console.log(req.body.block);
    var name = req.body.block;
    db.query("SELECT * FROM `profile` WHERE `username` = '"+req.body.block+"'", function(req, rza){
    res.render('reanb', {
        in : true,
        Profile : name,
        pp: rza[0].path
    });
});
});


module.exports = app;