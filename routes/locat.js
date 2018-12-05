var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');
var session = require('express-session');
const multer = require('multer');
const formidable = require('formidable');
var fs = require('fs');

app.get('/', function(req, res){
});



app.post('/', function(request, res){
    console.log("here");
console.log(request.body.sav);
console.log(request.body.long);
console.log(request.body.lat);

db.query("UPDATE profile SET `latitude` = '"+request.body.lat+"' WHERE username = '"+sesh.email+"'");
db.query("UPDATE profile SET `longitude` = '"+request.body.long+"' WHERE username = '"+sesh.email+"'");
});

module.exports = app;