var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');
var user;

app.get('/', function(req, res){
    db.query("SELECT * FROM `"+sesh.email+"block`", function(reqa, rza){
        console.log(sesh.email+'block');
        if (rza[0] != undefined){
            console.log(rza);
        }
 
    res.render('block', {
        in : true,
        pp: rza

    });
});

});

app.post('/', function(req, res){
if (req.body.report){
    console.log("tryna report");
}
else
{
if (req.body.act){
    console.log("Tryna unblock");

    db.query("DELETE FROM `"+sesh.email+"block` WHERE `blocked` = '"+req.body.user+"'");
}
else
{
db.query("SELECT * FROM `"+sesh.email+"block` WHERE blocked = '"+req.body.user+"'", function(requ, resu){
    if (resu[0] != undefined)
    {
        console.log("already blocked");
    }
    else
    {
        db.query("INSERT INTO `"+sesh.email+"block` (blocked, path) VALUES ('"+req.body.user+"', '"+req.body.path+"')");
    }

});
}
}
res.redirect('search');
});

module.exports = app;