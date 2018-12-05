var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');
var session = require('express-session');
const multer = require('multer');
const formidable = require('formidable');
var fs = require('fs');

app.get('/', function(req, res){
    res.render('chatr', {
        in :true
    });

});

app.post('/', function(req, res){
    sesh.to = req.body.user;
    sesh.from = sesh.email;
    console.log(req.body.user);
    console.log(sesh.email);

var can;
var cnt;
    db.query("SELECT * FROM potential WHERE `lusername` = '"+sesh.email+"' AND `username` = '"+req.body.user+"' AND `theyliked` = 1", function(reques, resp){
      if (resp[0] != undefined){
        console.log("theyliked");
        console.log(resp[0].theyliked);
        can = true;
      }
      else {
        cnt = true;
      }
      db.query("SELECT * FROM `chat` WHERE (`from` = '"+sesh.email+"' AND `to` = '"+req.body.user+"') OR (`to` = '"+sesh.email+"' AND `from` = '"+req.body.user+"')", function(re, respata){
            history = respata;
            console.log(respata);

    res.render('chatr', {
      canchat:can,
        in :true,
        user: sesh.email,
        intended:req.body.user,
        cannot : cnt,
        history : history
    });
});
    });
});

module.exports = app;
