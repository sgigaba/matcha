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

app.post('/', function (req, res) {
    console.log('Form : ' + req.query.form);
    console.log('CSRF token :' + req.body._csrf);
    email = req.body.email;
    username = req.body.username;
    password = req.body.password;
    age = req.body.age;
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

            res.redirect(303, '/login');

        })
    });
});



module.exports = app;