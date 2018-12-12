var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');



app.get('/', function(req, res){

});

app.post('/', function(req, res){
    console.log("remove this image");
    db.query("UPDATE `profile` SET `path` = 'nopp.jpg' WHERE `username` = '"+sesh.email+"'");
});


module.exports = app;