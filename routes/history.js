var express = require('express');
var app = express();
var db = require('../config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');    

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    db.query("SELECT * FROM `potential` WHERE `lusername` = '"+sesh.email+"' OR `username` = '"+sesh.email+"'", function(reqa, rsa){
        console.log(rsa);
        var i;
        for(i = 0; rsa[i]; i++){
            if (rsa[i].lusername == sesh.email && rsa[i].uliked == 1){
                db.query("UPDATE `views` SET `liked` = 'likes you' WHERE `pagevisited` = '"+sesh.email+"' AND `username` = '"+rsa[i].username+"'");
            }
            else if (rsa[i].username == sesh.email && rsa[i].theyliked == 1){
                db.query("UPDATE `views` SET `liked` = 'likes you' WHERE `pagevisited` = '"+sesh.email+"' AND `username` = '"+rsa[i].lusername+"'");
            }
        }
    });
    var liked;
db.query("SELECT * FROM `views` WHERE pagevisited = '"+sesh.email+"' AND username not in (select blocked from `blocked` WHERE username = '"+sesh.email+"' ) AND username not in (select username from `blocked` WHERE `blocked` = '"+sesh.email+"')", function(req, result){
    console.log(result);
    res.render('history',{
        in: true,
        pp: result
    });
});
 
});


module.exports = app;