var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');
var session = require('express-session');
const multer = require('multer');
const formidable = require('formidable');
var fs = require('fs');

app.get('/', function (req, res) {
    db.query("CREATE TABLE IF NOT exists "+sesh.email+"block (blocked varchar(250), path varchar(250))");
    db.query("SELECT * FROM `profile` WHERE username = '"+sesh.email+"'", function(req, results){
        if (results[0] != undefined)
        {
           db.query("UPDATE `profile` SET logintime = '"+Date()+"' WHERE username = '"+sesh.email+"'");
           db.query("UPDATE `profile` SET `logouttime` = '0' WHERE username = '"+sesh.email+"'");
        }
        else
        {
            db.query("INSERT into `profile` (username) VALUES ('"+sesh.email+"')");
            db.query("UPDATE `profile` SET logintime = '"+Date()+"' WHERE username = '"+sesh.email+"'");
            db.query("UPDATE `profile` SET `logouttime` = '0' WHERE username = '"+sesh.email+"'");
        }
    });
    db.query("SELECT * FROM `notifications` WHERE username = '"+sesh.email+"' AND viewed = 1", function(requ, resu){
        var i;
        for(i = 0; resu[i]; i++){
            console.log("liked");
        }
    res.render('loggedin', {     
        stuff: "User Profile",
        successful : true,
        off: false,
        in: true,
        num: i
    });
});
});

app.post('/', function(req, res){
    var ses = sesh.email;
    if (req.body.exman)
    {
        console.log("Stuff :" + req.body.exman);
        db.query("UPDATE `profile` SET matchg = 'men exclusively' WHERE username = '"+ses+"'");
    }
    else if (req.body.exwomen)
    {
        console.log("Stuff :" + req.body.exwomen);
        db.query("UPDATE `profile` SET matchg = 'women exclusively' WHERE username = '"+ses+"'");
    }
    else if (req.body.gnc)
    {
        console.log("Stuff :" + req.body.gnc);
        db.query("UPDATE `profile` SET matchg = 'gendernonconforming people exclusively' WHERE username = '"+ses+"'");
    }
    else if (req.body.anyone)
    {
        console.log("Stuff :" + req.body.anyone);
        db.query("UPDATE `profile` SET matchg = 'anyone' WHERE username = '"+ses+"'");
    }
    else if (req.body.gfle)
    {
        console.log("Stuff :" + req.body.gfle);
        db.query("UPDATE `profile` SET matchg = 'gender fluid people exclusively' WHERE username = '"+ses+"'");
    }
    if (req.body.nonbinary)
    {
        console.log("Stuff :" + req.body.nonbinary);
        db.query("UPDATE `profile` SET gender = '"+req.body.nonbinary+"' WHERE username = '"+ses+"'");
    }
    else if (req.body.man)
    {
        console.log("Stuff :" + req.body.man);
        db.query("UPDATE `profile` SET gender = '"+req.body.man+"' WHERE username = '"+ses+"'");
    }
    else if (req.body.woman)
    {
        console.log("Stuff :" + req.body.woman);
        db.query("UPDATE `profile` SET gender = '"+req.body.woman+"' WHERE username = '"+ses+"'");
    }
    else if (req.body.genderfluid)
    {
        console.log("Stuff :" + req.body.genderfluid);
        db.query("UPDATE `profile` SET gender = '"+req.body.genderfluid+"' WHERE username = '"+ses+"'");
    }
    else if (req.body.gendernonconforming)
    {
        console.log("Stuff :" + req.body.gendernonconforming);
        db.query("UPDATE `profile` SET gender = '"+req.body.gendernonconforming+"' WHERE username = '"+ses+"'");
    }
    else if (req.body.other)
    {
        console.log("Stuff :" + req.body.other);
        db.query("UPDATE `profile` SET gender = '"+req.body.other+"' WHERE username = '"+ses+"'");
    }
    else if (req.body.casual)
    {
        console.log("Stuff :" + req.body.casual);
        db.query("UPDATE `profile` SET relationship = 'Causual sex' WHERE username = '"+ses+"'");
    }
    else if (req.body.long)
    {
        console.log("Stuff :" + req.body.long);
        db.query("UPDATE `profile` SET relationship = 'Long term relationship' WHERE username = '"+ses+"'");
    }
    else if (req.body.friendship)
    {
        console.log("Stuff :" + req.body.friendship);
        db.query("UPDATE `profile` SET relationship = '"+req.body.friendship+"' WHERE username = '"+ses+"'");
    }
    else if (req.body.sub)
    {
        console.log("Stuff :" + req.body.sub);
        db.query("UPDATE `profile` SET relationship = 'I am looking for a sub' WHERE username = '"+ses+"'");
    }
    else if (req.body.dom)
    {
        console.log("Stuff :" + req.body.dom);
        db.query("UPDATE `profile` SET relationship = 'I am looking for a dom' WHERE username = '"+ses+"'");
    }
    else if (req.body.other)
    {
        console.log("Stuff :" + req.body.other);
        db.query("UPDATE `profile` SET relationship = 'other' WHERE username = '"+ses+"'");
    }
    else if (req.body.submitage)
    {
        console.log("here");
        db.query("UPDATE `profile` SET minage = '"+req.body.min+"' WHERE username = '"+ses+"'");
        db.query("UPDATE `profile` SET maxage = '"+req.body.max+"' WHERE username = '"+ses+"'");
        console.log(req.body.min);
        console.log(req.body.max);
    }
    else if (req.body.submitbio)
    {
        console.log(req.body.bio);
        db.query("UPDATE `profile` SET bio = '"+req.body.bio+"' WHERE username = '"+ses+"'");
    }
    if (req.body.submittags){
        var tag = [];
        if (req.body.tags){
            tag.push(req.body.tags);
        }
        db.query("UPDATE `profile` SET `tags` = '"+tag+"' WHERE `username` = '"+sesh.email+"'");
        console.log(tag);
    }
    // if (req.body.food){
    //     tag = req.body.food;
    //     db.query("SELECT * FROM `tags` WHERE `username` = '"+sesh.email+"' AND `tag` = '"+req.body.food+"'", function (re1, rere1){
    //         if (rere1[0] != undefined){
    //             console.log("tag exists");
    //         }
    //         else
    //         {
    //             db.query("INSERT INTO `tags` (username, tag) VALUES ('"+sesh.email+"', '"+tag+"')");
    //         }
    //     });
    // }
    // if (req.body.music){
    //     tag = req.body.music;
    //     db.query("SELECT * FROM `tags` WHERE `username` = '"+sesh.email+"' AND `tag` = '"+tag+"'", function (re1, rere1){
    //         if (rere1[0] != undefined){
    //             console.log("tag exists");
    //         }
    //         else
    //         {
    //             db.query("INSERT INTO `tags` (username, tag) VALUES ('"+sesh.email+"', '"+tag+"')");
    //         }
    //     });
    //     console.log("music");
    // }
    // if (req.body.politics){
    //     tag = req.body.politics;
    //     db.query("SELECT * FROM `tags` WHERE `username` = '"+sesh.email+"' AND `tag` = '"+tag+"'", function (re1, rere1){
    //         if (rere1[0] != undefined){
    //             console.log("tag exists");
    //         }
    //         else
    //         {
    //             db.query("INSERT INTO `tags` (username, tag) VALUES ('"+sesh.email+"', '"+tag+"')");
    //         }
    //     });
    //     console.log("politics");
    // }
    // if (req.body.sports){
    //     tag = req.body.sports;
    //     db.query("SELECT * FROM `tags` WHERE `username` = '"+sesh.email+"' AND `tag` = '"+tag+"'", function (re1, rere1){
    //         if (rere1[0] != undefined){
    //             console.log("tag exists");
    //         }
    //         else
    //         {
    //             db.query("INSERT INTO `tags` (username, tag) VALUES ('"+sesh.email+"', '"+tag+"')");
    //         }
    //     });
    //     console.log("sports");
    // }
    // if (req.body.netflix){
    //     tag = req.body.netflix;
    //     db.query("SELECT * FROM `tags` WHERE `username` = '"+sesh.email+"' AND `tag` = '"+tag+"'", function (re1, rere1){
    //         if (rere1[0] != undefined){
    //             console.log("tag exists");
    //         }
    //         else
    //         {
    //             db.query("INSERT INTO `tags` (username, tag) VALUES ('"+sesh.email+"', '"+tag+"')");
    //         }
    //     });
    //     console.log("netflix");
    // }
    // if (req.body.family){
    //     tag = req.body.family;
    //     db.query("SELECT * FROM `tags` WHERE `username` = '"+sesh.email+"' AND `tag` = '"+tag+"'", function (re1, rere1){
    //         if (rere1[0] != undefined){
    //             console.log("tag exists");
    //         }
    //         else
    //         {
    //             db.query("INSERT INTO `tags` (username, tag) VALUES ('"+sesh.email+"', '"+tag+"')");
    //         }
    //     });
    //     console.log("family");
    // }
});



module.exports = app;