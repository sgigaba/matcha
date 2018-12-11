var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');
var user;

app.get('/', function(req, res){
db.query("SELECT * FROM `blocked` WHERE username = '"+sesh.email+"'", function(re1, re1){
var rza;
if (re1[0] != undefined){
rza = re1;
}
    res.render('block', {
        in : true,
        pp: rza

    });
});

});


app.post('/', function(req, res){

if (req.body.act){
db.query("DELETE FROM `blocked` WHERE blocked = '"+req.body.user+"' AND `username` = '"+sesh.email+"'");
}

if (req.body.block){
    console.log("trynablock");
    console.log(req.body.user);
    console.log(req.body.path);

db.query("SELECT * FROM `blocked` WHERE `username` = '"+sesh.email+"' AND `blocked` = '"+req.body.user+"'", function(re, re){
if (re[0] != undefined){
    console.log("Already blocked");
}
else{
    db.query("INSERT INTO `blocked` (username, blocked, path) VALUES ('"+sesh.email+"', '"+req.body.user+"', '"+req.body.path+"')");
}
});
}
 res.redirect('search');
});



// app.post('/', function(req, res){
// if (req.body.report){
//     console.log("tryna report");
// }
// else
// {
// if (req.body.act){
//     console.log("Tryna unblock");

//     db.query("DELETE FROM `"+sesh.email+"block` WHERE `blocked` = '"+req.body.user+"'");
// }
// else
// {
// db.query("SELECT * FROM `"+sesh.email+"block` WHERE blocked = '"+req.body.user+"'", function(requ, resu){
//     if (resu[0] != undefined)
//     {
//         console.log("already blocked");
//     }
//     else
//     {
//         db.query("INSERT INTO `"+sesh.email+"block` (blocked, path) VALUES ('"+req.body.user+"', '"+req.body.path+"')");
//     }

// });
// }
// }
// res.redirect('search');
// });

module.exports = app;