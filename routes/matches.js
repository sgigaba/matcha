var express = require('express');
var app = express();
var db = require('../config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
var ses = sesh.email;
db.query("SELECT * FROM `potential` WHERE `uliked` = 1", function(req, result){
    console.log(result);
    res.render('matches', {
        in: true,
        pm: result
        }); 
});
});

module.exports = app;