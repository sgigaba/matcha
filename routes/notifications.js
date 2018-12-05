var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');


app.get('/', function(req, res){
    db.query("SELECT * FROM `notifications` WHERE username = '"+sesh.email+"' AND viewed = 1", function(requ, resu){
        console.log(resu);
        var i;
        for(i = 0; resu[i]; i++){
            console.log("liked");
        }
        db.query("UPDATE `notifications` SET viewed = 2 WHERE username = '"+sesh.email+"'");
        db.query("UPDATE `profile` SET num = '"+i+"' WHERE username = '"+sesh.email+"'");
        db.query("SELECT * FROM `notifications` where user = '"+sesh.email+"' AND viewed = 1", function(re, resa){
            outgoing = resa;
        db.query("SELECT * FROM `notifications` where user = '"+sesh.email+"' AND viewed = 2", function(req, respect){
            read = respect;
        db.query("DELETE FROM `notifications` WHERE viewed = 2 AND user = '"+sesh.email+"'");
   
res.render('notifications', {
    in: true,
    notifs: resu,
    num: i,
    outgoing: outgoing,
    read : read
});
});
});
});
});

module.exports = app;