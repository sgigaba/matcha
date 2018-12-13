var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');
const nodemailer = require('nodemailer'); 

app.get('/', function(req, res){
    res.render('forgot', {
        off : true
    });
});

function databasematch(email, callback){
        db.query("SELECT * FROM `PROFILE` WHERE `email` = '"+email+"'", function(err, resulta){
            if (resulta[0] != undefined){

            callback(null, resulta[0].username);
            }
            else{
                callback(null, "nay");
            }
        });
}


app.post('/', function(req, res){
console.log(req.body.resetemail);

email = req.body.resetemail;

databasematch(req.body.resetemail, function(req, resa){

    if (resa != 'nay'){
        console.log(resa);
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
        subject: 'Matcha password change',
        text: 'Follow this link to change your password : http://e5r1p3:3000/pchange?username='+resa
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    }
    else{
        console.log('Sent :' + info.response);
        res.render('forgot', {
            off : true,
            nerr: "Check your email to reset your password"
        });
    }
    });



        console.log("proceed");
    }
    else{
        res.render('forgot', {
            off : true,
            err: "*this email does not exist in our records"
        });
    }

});

});


module.exports = app;

