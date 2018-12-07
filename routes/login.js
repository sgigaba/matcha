var express = require('express');
var app = express();
var db = require('../config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function (req, res) {
    res.render('login', {
        stuff: "Login was unsucessful",
        successful : true,
        off: true
    });
});

app.post('/',function(req, res){

var email = req.body.email;
var password = req.body.password;
sesh = req.session;
    sesh.email = email;
db.query("SELECT * FROM `profile` WHERE username ='"+email+"'", function(req, results){
    if (results[0] != undefined)
    {
        res.redirect(303, '/loggedin');
    }
    else
    {
        res.render('login',{
             no : "Email or password is incorrect",
        });
     -   console.log("record does not exist");
    }
});

});

module.exports = app;
