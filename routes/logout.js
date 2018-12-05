var express = require('express');
var app = express();
var mysql = require('mysql');
var db = require('../config/db');
const session = require('express-session');

app.get('/', function (req, res){
    console.log("I'm tryna logout");
    db.query("UPDATE `profile` SET `logouttime` = '"+Date()+"' WHERE username = '"+sesh.email+"'");
    delete req.session;
    res.redirect(303, '/');
});

module.exports = app;