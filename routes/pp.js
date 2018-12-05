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


app.post('/', function(req, res){
   
    var ses = sesh.email;
    console.log("over here");
    console.log(ses);
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = 'public' + '/uploads' + file.name;
        console.log("file path: " + file.path);
    });

    form.on('file', function (name, file){
        console.log('Uploaded' + file.name);
        db.query("SELECT * from `profile` WHERE username = '"+ses+"'", function(req, results){
            if (results[0] != undefined)
            {
                db.query("UPDATE profile SET `path` = '"+file.name+"' WHERE `username` = '"+ses+"'");
            }
            else
            {
                db.query("INSERT into profile (path, username) VALUES ('"+file.name+"', '"+ses+"')");
            }
        });

    });
});

module.exports = app;