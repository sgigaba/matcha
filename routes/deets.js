var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer'); 




app.get('/', function(req, res){

db.query("SELECT * FROM `profile` WHERE `username` = '"+sesh.email+"'", function(req, responce){


res.render('deets', {
    in : true,
    username: responce[0].username,
    email : responce[0].email,
    age: responce[0].age
});
});
});

function databasematch(username, callback){
    db.query("SELECT * FROM `PROFILE` WHERE `username` = '"+username+"'", function(err, result){
        if (result[0] != undefined)
        {
            callback(null, "yay");
        }
        else{
            callback(null, "nay");
        }
    });
}


function valid(username){
    var validname = /[\W+\d]/i;
        if (username.match(validname)){
            return "false";
        }
}


function validpw(password, confirm){
    if (password != confirm){
        console.log("not equal");
        return "false";
    }
}
app.post('/', function(req, res){
    var username = req.body.username;
    if (req.body.password){
        db.query("SELECT * FROM `profile` WHERE `username` = '"+sesh.email+"'", function (re, rz1){
    
            bcrypt.compare(req.body.password, rz1[0].password, function(err, rere) {
                    if (rere == true){
        db.query("SELECT * FROM `profile` WHERE username = '"+sesh.email+"'", function(req, re){

   if (re[0] != undefined){

            const transporter = nodemailer.createTransport({    
                        service: 'gmail',
                        auth: {
                            user: 'samkelogigaba1@gmail.com',
                            pass: 'gigaba123'
                        }
            
                        }); 
            
                        const mailOptions = {
                            from: 'samkelogigaba1@gmail.com',
                            to : re[0].email,
                            subject: 'Matcha password change',
                            text: 'Follow this link to change your password : http://e5r1p3:3000/pchange?username='+sesh.email
                        };
            
                        transporter.sendMail(mailOptions, function(error, info){
                        if (error){
                            console.log(error);
                        }
                        else{
                            console.log('Sent :' + info.response);
                            res.render('deets', {
                                emailc : true
                            });
                        }
                        });
                }
                    });
                }
                else{
                    res.render('deets', {
                        perror: true
                    });
                }

            });

  
    });
    }

    if (req.body.age){
        console.log("change age");
        db.query("UPDATE `profile` SET `age` = '"+req.body.age+"' WHERE `username` = '"+sesh.email+"'");
        res.redirect(303, 'homepage');
    }
    if (req.body.email){
        console.log("change email");
    }
    if (req.body.username){
        databasematch(username, function(ree, resulta){
            if (resulta == "yay"){
                console.log("username is already taken");
                return (res.render('deets', {
                    in : true,
                    error: true,
                    errorMessage: 'Username is already taken'
                }));
            }
            else if (valid(username) == "false"){
                console.log("wrong format");
                res.render('deets', {
                    in : true,
                    derror: true,
                    derrorMessage: 'Username cannot contain numbers or special characters'
                });
            }
            else{
                console.log("change username");
                db.query("UPDATE `profile` SET `username` = '"+req.body.username+"' WHERE `username` = '"+sesh.email+"'");
                db.query("UPDATE `chat` SET `from` = '"+req.body.username+"' WHERE `from` = '"+sesh.email+"'");
                db.query("UPDATE `chat` SET `to` = '"+req.body.username+"' WHERE `to` = '"+sesh.email+"'");
                db.query("UPDATE `blocked` SET `username` = '"+req.body.username+"' WHERE `username` = '"+sesh.email+"'");
                db.query("UPDATE `blocked` SET `blocked` = '"+req.body.username+"' WHERE `blocked` = '"+sesh.email+"'");
                db.query("UPDATE `notifications` SET `username` = '"+req.body.username+"' WHERE `username` = '"+sesh.email+"'");
                db.query("UPDATE `notifications` SET `user` = '"+req.body.username+"' WHERE `user` = '"+sesh.email+"'");
                db.query("UPDATE `pictures` SET `username` = '"+req.body.username+"' WHERE `username` = '"+sesh.email+"'");
                db.query("UPDATE `potential` SET `username` = '"+req.body.username+"' WHERE `username` = '"+sesh.email+"'");
                db.query("UPDATE `potential` SET `lusername` = '"+req.body.username+"' WHERE `lusername` = '"+sesh.email+"'");
                sesh.email = username;
            }
        });
    }

});

module.exports = app;