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
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = 'public/img' + '/uploads' + file.name;
    });
    form.on('file', function (name, file){
        console.log('Uploaded' + file.name);
        // db.query("SELECT * from `pictures` WHERE username = '"+ses+"'", function(req, results){
        //     if (results[0] != undefined)
        //     {
        //         db.query("UPDATE pictures SET `pics` = '"+file.name+"' WHERE `username` = '"+ses+"'");
        //     }
        //     else
        //     {

        db.query("SELECT * FROM `pictures` WHERE username = '"+sesh.email+"'", function(req, results){
            var i;
            for(i = 0; results[i]; i++)
            {
                console.log("there");
            }
            if (i <= 4)
            {
                db.query("INSERT into `pictures` (pics, username) VALUES ('"+file.name+"', '"+ses+"')");
            }
        })
               
           // }
        //});
        
    });
    res.redirect(303, '/homepage');
});


module.exports = app;