var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');

app.get('/', function(req, res){

    db.query("SELECT * FROM `mesnot` WHERE `to` = '"+sesh.email+"' AND `viewed` = '0'", function(re1, re2){
        var i;
       while (re2[i]){
           i++;
       }
        db.query("UPDATE `mesnot` SET `viewed` = '1' WHERE `to` = '"+sesh.email+"'");
res.render('mesnot', {
    in: true,
    unread: re2,
    mnum: i
});
});
});


module.exports = app;