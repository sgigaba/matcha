var express = require('express');
var mysql = require('mysql')
var app = express();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');


SALT_ROUNDS = 10;
app.get('/', function (req, res) {
    res.render('signup', {
        csrf: 'CSRF token here',
        off: true
    });
});

function valid(lastname, firstname, username, password, confirm, email){
    if (password != confirm){
        console.log("not equal");
        return "false";
    }
    else
    {
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
    var validname = /[\W+\d]/i;
    if (firstname.match(validname) || lastname.match(validname)){
        return "false";
    }
    if (username.length > 10){
        return "false";
    }
    else
    {
        if (username.match(validname)){
            return "false";
        }

    }
}

function databasematch(email, username, callback){
    db.query("SELECT * FROM `PROFILE` WHERE `username` = '"+username+"'", function(err, result){
        if (result[0] != undefined)
        {
            callback(null, "yay");
        }
        else{
            callback(null, "nay");
        }
        db.query("SELECT * FROM `PROFILE` WHERE `email` = '"+email+"'", function(err, resulta){
            if (resulta[0] != undefined){
            callback(null, "yay");
            }
            else{
                callback(null, "nay");
            }
        });
    });
}

app.post('/', function (req, res) {
    email = req.body.email;
    username = req.body.username;
    password = req.body.password;
    age = req.body.age;
    firstname = req.body.firstname;
    lastname = req.body.lastname;
    confirm = req.body.confirmpassword;
    
    var isitval = valid(lastname, firstname, username, password, confirm, email);
    if (isitval != "false"){
        databasematch(email, username, function(err, resulta){
            if (resulta != "yay"){
        var rand = Math.trunc(Math.random() * (100000));
        bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
   
            console.log(rand);
            db.query("INSERT INTO `profile` (username,email,password,code, age) VALUES ('"+username+"', '"+email+"','"+hash+"', '"+rand+"', '"+age+"')");
            console.log('Email :' + req.body.email);
            console.log('Password :' + req.body.password);
            console.log("age = "+ age);

            const transporter = nodemailer.createTransport({    
            service: 'gmail',
            auth: {
                user: 'samkelogigaba1@gmail.com',
                pass: 'gigaba123'
            }

            }); 

            const mailOptions = {
                from: 'samkelogigaba1@gmail.com',
                to : email,
                subject: 'Verify your email to start Matching',
                text: 'Welcome to Matcha! Your verification code is '+rand+'. Follow this link to verify your account : http://localhost:3000/confirm?username='+username
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
            }
            else{
                console.log('Sent :' + info.response);
            }
            });
        })
    });
            }
            else if (err)
            {
                console.log("nope");
                res.render('signup', {
                    taken : true,
                    off : true
                });
            }

        });
   
    }
    else
    {
        console.log("invalid");
               res.render('signup', {
                    error : true,
                    off : true
                });
    }
   
});




module.exports = app;