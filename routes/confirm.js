var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');
var user;
app.get('/', function (req, res) {
    res.render('confirm', {
    });
    user = req.param('username');
    console.log(user);
});

app.post('/', function(req, res){
    console.log("Code: " + req.body.code);
    console.log(user);
    db.query("SELECT * FROM `profile` WHERE username = '"+user+"' AND code = '"+req.body.code+ "' ", function(err, results, fields){
        if (results)
        {
                if (results[0] == undefined)
                {
                   res.render('confirm', {
                        wrong : true
                   });
                }
                else
                {
                    console.log("they can");
                    db.query("UPDATE profile SET Verified = '1' WHERE username = '"+user+"'");
                    res.redirect(303, 'login');
                }
        }
    });
});



module.exports = app;