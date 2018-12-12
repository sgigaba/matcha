
var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');
var session = require('express-session');
var bio;

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
    if (req.session == undefined && sesh.email == undefined){
        res.redirect(303, '/home');
    }
    else{

    console.log("I'm here now");
    console.log(sesh.email);
    var ses = sesh.email;
    db.query("SELECT * FROM `pictures` WHERE username = '"+ses+"'", function (req, results){
        pic  = results;
        console.log(pic);
    });
    var tags;
    db.query("SELECT * FROM `tags` WHERE `username` = '"+ses+"'", function(req, rere){
        if (rere[0] != undefined){
            tags = rere;
        }
    });
    db.query("SELECT * FROM `profile` WHERE username = '"+ses+"'", function(req, result){
        if (result[0].path != undefined){
            console.log("okay");
        }
        else{
            db.query("UPDATE `profile` SET `path` = 'nopp.jpg' WHERE `username` = '"+ses+"'");
        }
         bio = result[0].Bio;
         gender = result[0].gender;
         relationship = result[0].relationship;
         agemin = result[0].minage;
         agemax = result[0].maxage;
         genderpref = result[0].matchg;
         pp = result[0].path;
         res.render('homepage', {
            off: false,
            in: true,
            Profile : sesh.email,
            Bio: bio,
            gender: gender,
            relationship: relationship,
            age: agemin+"-"+agemax,
            pp:pp,
            Genderpref: genderpref,
            pic: pic, 
            tags: result[0].tags,
            myage: result[0].age
        });

    });
}
//console.log(bio);
});

app.post('/', function(req, res) {
    console.log(req.body.name);
    db.query("DELETE FROM `pictures` WHERE `pics` = '"+req.body.name+"' AND `username` = '"+sesh.email+"'");
    res.redirect(303, '/homepage');
});


module.exports = app;