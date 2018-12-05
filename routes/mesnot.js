var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');

app.get('/', function(req, res){
res.render('mesnot', {
    in: true

});
});


module.exports = app;