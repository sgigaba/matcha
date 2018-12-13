var express = require('express');
var app = express();
var db = require('../config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//Stack overflow ----->
function distan(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
//<--------

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    // if (req.session == undefined && sesh.email == undefined){
    //     res.render('home', {
    //         off : true
    //     });
    // }
    // else{
db.query("SELECT * FROM `notifications` WHERE username = '"+sesh.email+"' AND viewed = 1 AND username not in (select blocked from `blocked` WHERE username = '"+sesh.email+"' ) AND username not in (select username from `blocked` WHERE `blocked` = '"+sesh.email+"')", function(requ, resu){
    var v;

    for(v = 0; resu[v]; v++){
        console.log("liked");
    }

    db.query("SELECT * FROM `mesnot` WHERE `to` = '"+sesh.email+"' AND `viewed` = '0'", function(re1, re2){
        var n;
        for(n = 0; re2[n]; n++){
            console.log('');
        }
db.query("SELECT * FROM profile WHERE `username` = '"+sesh.email+"'", function(req, resul){
  var gen = resul[0].gender;
  var anygen = resul[0].gender;
  var mygen;
  var genderpref = resul[0].matchg;
 var  num = resul[0].num;
 var mylat = resul[0].latitude;
 var mylong = resul[0].longitude;

  var pref;
  var tgen;
  if (genderpref == "anyone")
  {

    if (anygen == "woman")
    {
        mygen = "women exclusively";
    }
    else if (anygen == "man")
    {
        mygen = "men exclusively";
    }
    else if (anygen == "gendernonconforming")
    {
        mygen = "gendernonconforming people exclusively";
    }
    else if (anygen == "genderfluid")
    {
        mygen = "gender fluid people exclusively";
    }


      db.query("SELECT * FROM PROFILE  WHERE (`matchg` = '"+mygen+"' AND `username` <> '"+sesh.email+"' OR `matchg` = 'anyone' AND `username` <> '"+sesh.email+"') AND username not in (select blocked from `blocked` WHERE username = '"+sesh.email+"' ) AND username not in (select username from `blocked` WHERE `blocked` = '"+sesh.email+"') ORDER BY tempdist ASC", function(req, results){
        res.render('search', {
            in : true,
            pp: results,
            gender: genderpref,
            mnum: n,
            num: v
             });
  });

  }
  else
  {
      if (genderpref == "women exclusively")
      {
          pref = "woman";
      }
      else if (genderpref == "men exclusively")
      {
          pref = "man";

      }
      else if (genderpref == "gendernonconforming people exclusively")
      {
          pref = "gendernonconforming";

      }
      else if (genderpref == "gender fluid people exclusively")
      {
          pref = "genderfluid";
      }
      if (gen == "woman")
      {
          tgen = "women exclusively";
      }
      else if (gen == "man")
      {
          tgen = "men exclusively";

      }
      else if (gen == "gendernonconforming")
      {
         tgen = "gendernonconforming people exclusively";

      }
      else if (gen == "genderfluid")
      {
          tgen = "gender fluid people exclusively";
      }

      console.log(tgen);
      db.query("SELECT * FROM profile WHERE (`gender` = '"+pref+"' AND `matchg` = '"+tgen+"' AND `username` <> '"+sesh.email+"' OR `matchg` = 'anyone' AND `gender` = '"+pref+"' AND `username` <> '"+sesh.email+"') AND username not in (select blocked from `blocked` WHERE username = '"+sesh.email+"' ) AND username not in (select username from `blocked` WHERE `blocked` = '"+sesh.email+"')  ORDER BY tempdist ASC", function(req, presults){
          console.log(sesh.email);
          var i;
          var longs = [];
          var lats = [];
          var geo;
          var dists = [];
          if (presults[0] != undefined){
          for(i = 0; presults[i]; i++){
            if (presults[i].latitude < 0 && presults[i].longitude > 0){
                longs[i] = presults[i].longitude;
                lats[i] = presults[i].latitude;
                dists[i] = distan(longs[i],lats[i],mylong,mylat);
                db.query("UPDATE `profile` SET tempdist  ='"+dists[i]+"' WHERE `username` = '"+presults[i].username+"'");
            }
          }
                    }
          res.render('search', {
            in : true,
            pp: presults,
            gender: genderpref,
            num: v,
            mnum: n
             });
    });

  }
});
});

});
app.post('/', function(request, res){
    var ses = sesh.email;

    if (request.body.unlike){
        console.log("I'm outta here");
       db.query("DELETE FROM `potential` WHERE `username` = '"+request.body.user+"' AND `lusername` = '"+sesh.email+"'");
        db.query("DELETE FROM `potential` WHERE username = '"+sesh.email+"' AND lusername = '"+request.body.user+"'");
        db.query("INSERT INTO `notifications` (username, user, type, viewed) VALUES ('"+request.body.name+"', '"+sesh.email+"','!! Unconnected with you!!','1')");
    }
    else
    {
        console.log("likedalot");
        console.log(request.body.name);
        console.log(request.body.profilepic);
db.query("SELECT * FROM `potential` WHERE `username` = '"+request.body.name+"' AND `lusername` = '"+sesh.email+"' AND `uliked` = '1'", function(req, re){
if (re[0] != undefined){
    if (re[0].theyliked == 1){
        db.query("UPDATE `potential` SET `theyliked` = 'NULL' WHERE `username` = '"+sesh.email+"' AND `uliked` = '1'");
        db.query("INSERT INTO `notifications` (username, user, type, viewed) VALUES ('"+request.body.name+"', '"+sesh.email+"','!! disonnected with you !!','1')");
    }
    else
    {
        db.query("UPDATE `potential` SET `theyliked` = '1' WHERE `username` = '"+request.body.name+"' AND `lusername` = '"+sesh.email+"' AND `uliked` = '1'");
         db.query("INSERT INTO `notifications` (username, user, type, viewed) VALUES ('"+request.body.name+"', '"+sesh.email+"','!! Connected with you !!','1')");
    }
}
else
{
    db.query("SELECT * FROM `potential` WHERE `username` = '"+sesh.email+"' AND `lusername` = '"+request.body.name+"' AND `uliked` = '1'", function(re, rere){
        if (rere[0] != undefined){
           db.query("UPDATE `potential` SET `theyliked` = '1' WHERE `username` = '"+sesh.email+"' AND `lusername` = '"+request.body.name+"' AND `uliked` = '1'");
           db.query("INSERT INTO `notifications` (username, user, type, viewed) VALUES ('"+request.body.name+"', '"+sesh.email+"','!! Connected with you !!','1')");
           db.query("INSERT INTO `notifications` (username, user, type, viewed) VALUES ('"+request.body.name+"', '"+sesh.email+"','liked your profile','1')");
        }
        else
        {
            db.query("INSERT INTO `potential` (username, uliked, lusername) VALUES ('"+sesh.email+"', '1', '"+request.body.name+"') ");
             db.query("INSERT INTO `notifications` (username, user, type, viewed) VALUES ('"+request.body.name+"', '"+sesh.email+"','!! Liked your profile !!','1')");
        }
    });
}

});
    }
});
    //}
});

module.exports = app;
