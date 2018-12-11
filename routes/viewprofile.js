var express = require('express');
var app = express();
var db = require('../config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');



app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){

    res.render('viewprofile',{
        in: true
    });
});

app.post('/', function(req, res){

 var prof = req.body.profile;
 var pic = req.body.profilepic;

// db.query("SELECT * FROM pictures WHERE `username` = '"+sesh.email+"'", function(reque, resu){
//     pic = resu[0].pics;
// }); 
    db.query("SELECT * FROM `views` WHERE `pagevisited` = '"+prof+"'", function(req, result){
        if (result[0] != undefined)
        {
            console.log("visited previously");
            db.query("UPDATE profile SET fame = fame + 10 WHERE username = '"+prof+"'");
        }
        else
        {
            db.query("INSERT into `views` (username, pagevisited, path) VALUES ('"+sesh.email+"','"+prof+"', '"+pic+"')");
            db.query("UPDATE profile SET fame = fame + 10 WHERE username = '"+prof+"'");
        }
    });
    db.query("INSERT INTO `notifications` (username, user, type, viewed) VALUES ('"+prof+"', '"+sesh.email+"', 'viewed your profile', '1')");
console.log(req.body.profile);

var mylong;
var mylat;
// db.query("SELECT * FROM pictures WHERE username = '"+sesh.email+"'",function(requ, resu){
//     mylong = resu[0].longitude;
//     mylat = resu[0].latitude;
// });
db.query("SELECT * FROM `pictures` WHERE username = '"+req.body.profile+"'", function (req, result){
    pic  = result;
    console.log(pic);
});
var prof = req.body.profile;
db.query("SELECT * FROM profile WHERE `username` = '"+req.body.profile+"'", function(req, results){
console.log("here in the view");
var one = 1;
var uhalfconnec;
var halfconnec;
var fullconnect;
var tags;
var online;
var can;
if (results[0].logouttime == 0){
   online = "online";
}
else{
    online = " last seen : "+ new Date(results[0].logouttime).getFullYear() + "-" + new Date(results[0].logouttime).getMonth() + "-" + new Date(results[0].logouttime).getDate() + " at "+ new Date(results[0].logouttime).getHours() + ":" +new Date(results[0].logouttime).getMinutes();
};
db.query("SELECT * FROM potential WHERE (`username` = '"+prof+"' OR `username` = '"+sesh.email+"') AND (`lusername` = '"+sesh.email+"' OR `lusername` = '"+prof+"') and `uliked` = '1'", function(reqa, respacito){
     if (respacito[0] != undefined){
         if (respacito[0].theyliked == 1){
             console.log("full connect boi");
            fullconnect = true;
         }
         else if (respacito[0].uliked == 1 && respacito[0].username == sesh.email){
             console.log("nah b");
            console.log(respacito);
            can = false;
            uhalfconnec = true;
         }
         else if (respacito[0].uliked == 1 && respacito[0].username == prof){
            console.log("nah b");
           console.log(respacito);
           halfconnec = true;
        } 
}
var able;
db.query("SELECT path FROM `profile` WHERE `username` = '"+sesh.email+"'", function(req, res1){
if (res1[0]){
    able = true;
}
res.render('viewprofile', {
    in: true,
    Profile:results[0].username,
    pp:results[0].path,
    Bio:results[0].Bio,
    Genderpref:results[0].matchg,
    gender:results[0].gender,
    relationship: results[0].relationship,
    age: results[0].minage +"-"+results[0].maxage,
    fame: results[0].fame,
    pic:pic,
    halfconnec: halfconnec,
    fullconnec : fullconnect,
    uhalfconnec : uhalfconnec,
    myage: results[0].age,
    tags : results[0].tags,
    online: online,
    able : able,
    can : can
});
});
  });
});
});

module.exports = app;
