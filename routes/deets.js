var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');

app.get('/', function(req, res){

db.query("SELECT * FROM `profile` WHERE `username` = '"+sesh.email+"'", function(req, responce){


res.render('deets', {
    in : true,
    username: responce[0].username,
    email : responce[0].email,
    age: responce[0].age
});
});
});

app.post('/', function(req, res){
    var username = req.body.username;
    if (req.body.username){
        console.log("change username");
        db.query("UPDATE `profile` SET `username` = '"+req.body.username+"' WHERE `username` = '"+sesh.email+"'");
        db.query("UPDATE `blocked` SET `username` = '"+req.body.username+"' WHERE `username` = '"+sesh.email+"'");
        db.query("UPDATE `chat` SET `from` = '"+req.body.username+"' WHERE `from` = '"+sesh.email+"'");
        db.query("UPDATE `chat` SET `to` = '"+req.body.username+"' WHERE `to` = '"+sesh.email+"'");
        db.query("UPDATE `notifications` SET `username` = '"+req.body.username+"' WHERE `username` = '"+sesh.email+"'");
        db.query("UPDATE `notifications` SET `user` = '"+req.body.username+"' WHERE `user` = '"+sesh.email+"'");
        db.query("UPDATE `pictures` SET `username` = '"+req.body.username+"' WHERE `username` = '"+sesh.email+"'");
        db.query("UPDATE `potential` SET `username` = '"+req.body.username+"' WHERE `username` = '"+sesh.email+"'");
        db.query("UPDATE `potential` SET `lusername` = '"+req.body.username+"' WHERE `lusername` = '"+sesh.email+"'");
        db.query("SELECT * FROM `"+sesh.email+"block`", function(req, re){
            db.query("CREATE TABLE IF NOT exists "+username+"block (blocked varchar (250), path varchar (250))");
            if (re[0] != undefined){
              console.log(re);
              var i;
              for (i = 0; re[i]; i++){
                 db.query("INSERT INTO `"+username+"block` (blocked, path) VALUES ('"+re[i].blocked+"', '"+re[i].path+"')");
              }
            }
        });
        sesh.email = username;
    }
    if (req.body.email){
        console.log("change email");
    }
    if (req.body.age){
        console.log("change age");
    }

});

module.exports = app;