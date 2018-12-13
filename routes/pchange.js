var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');
const bcrypt = require('bcrypt');

SALT_ROUNDS = 10;


function validpw(password, confirm){
    if (password != confirm){
        console.log("not equal");
        return "false";
    }
}

function validp(password){
    if (password.length < 8)
    {
        return "false";
    }
    else
    {
        var match = /[\W]/i;
        if (!(password.match(match))){
            return "false";
        }
    }
}


app.get('/', function(req, res){
    user = req.param('username');
    res.render('pchange', {
        off : true
    });
});

app.post('/', function(req1, res){
    console.log(user);
    console.log(req1.body.password);
    console.log(req1.body.confirmpassword);

    if (validpw(req1.body.password,req1.body.confirmpassword) == "false"){
        res.render('pchange', {
            off : true,
            perror: true
        });
    }
    else{
        if (validp(req1.body.password) == "false"){
            res.render('pchange', {
                off : true,
                pferror: true
            });
        }
        else{

               var rand = Math.trunc(Math.random() * (100000));
     bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
        bcrypt.hash(req1.body.password, salt, function (err, hash) {

            db.query("UPDATE `profile` SET `password` = '"+hash+"' WHERE `username` = '"+user+"'");
            console.log("password updated");
        });
    });
            console.log("Good to go");
            res.redirect(303, 'login');
        }
    }
  
});


module.exports = app;