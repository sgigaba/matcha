var express = require('express');
var app = express();
var db = require('../config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');    

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    console.log("THE UNION ONE");
db.query("SELECT * FROM `views` WHERE username = '"+sesh.email+"'", function(req, result){
    console.log(result);
    res.render('history',{
        in: true,
        pp: result
    });
});
 
});


module.exports = app;