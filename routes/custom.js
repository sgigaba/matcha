var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('../config/db');

app.get('/', function(req, res){

});

app.post('/', function(req, res){
var tags = [];
if (req.body.tags){
    tags.push(req.body.tags);
}
var min = req.body.minage;
var max = req.body.maxage;
var dist = req.body.location;
var minrating = req.body.minrating;
var maxrating = req.body.maxrating;
db.query("SELECT * FROM `profile` WHERE `username` = '"+sesh.email+"'", function(reqaq, re){
    var genderpref = re[0].matchg;
    var anygen = re[0].gender;
    var gen = re[0].gender;
    var pref;
    var mygen;
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
      else if (anygen == "gender non-conforming")
      {
          mygen = "gender non-conforming people exclusively";
      }
      else if (anygen == "genderfluid")
      {
          mygen = "gender fluid people exclusively";
      }
  
        db.query("SELECT * FROM PROFILE  WHERE `matchg` = '"+mygen+"' OR `matchg` = 'anyone' AND `username` <> '"+sesh.email+"' AND username not in (select blocked from `blocked` WHERE username = '"+sesh.email+"' ) AND username not in (select username from `blocked` WHERE `blocked` = '"+sesh.email+"') ORDER BY tempdist ASC", function(req, rezozo){
            var i;
            var customany = [];
            var z;
            var a;
            var b;
            var n = 0;
            var t = 0;
            var split = [];

          
            if (tags && dist == "Distance in km" && !min && !max && !minrating && !maxrating){
                  for(i = 0; rezozo[i]; i++){
                      if (rezozo[i].tags != undefined){
                          split = rezozo[i].tags.split(',');
                          for(a = 0; tags[a]; a++){
                              console.log("tags ::");
                              console.log(tags[a]);
                              for (b = 0; b < split.length; b++){
                                  console.log("usertag ::");
                                  console.log(split[b]);
                                  if (tags[a] == split[b]){
                                      customany[n] = rezozo[i];
                                      n++;
                                  }
                              }
                          }
                      }
                  }
            }
            else if (dist && min && max && dist != "Distance in km" && minrating && maxrating){
              for(i = 0; rezozo[i];i++){
                  if (rezozo[i].age >= min && rezozo[i].age <= max && rezozo[i].tempdist <= dist && rezozo[i].fame >= minrating && rezozo[i].fame <= maxrating){
                      customany[i] = rezozo[i];
                  }
              }
                console.log("Complete combo");
            }
            else if (dist && min && max && dist != "Distance in km" && !minrating && !maxrating){
              for(i = 0; rezozo[i];i++){
                  if (rezozo[i].age >= min && rezozo[i].age <= max && rezozo[i].tempdist <= dist){
                      customany[i] = rezozo[i];
                  }
              }
                console.log("Complete combo");
            }
            else if (dist && dist != "Distance in km" && !min && !max && !minrating && !maxrating){
              console.log("ONLY DIST");
              for(i = 0; rezozo[i];i++){
                  if (rezozo[i].tempdist <= dist){
                      customany[i] = rezozo[i];
                  }
              }
            }
            else if (dist == "Distance in km" && !min && !max && minrating && maxrating){
              console.log("ONLY DIST");
              for(i = 0; rezozo[i];i++){
                  if (rezozo[i].fame >=  minrating && rezozo[i].fame <= maxrating){
                      customany[i] = rezozo[i];
                  }
              }
            }
            else if (min && max && dist == "Distance in km" && !minrating && !maxrating){
              for(i = 0; rezozo[i];i++){
                  if (rezozo[i].age >= min && rezozo[i].age <= max){
                      customany[i] = rezozo[i];
                  }
              } 
            }
          res.render('search',{
              in: true,
              pp: customany
          });
    });
    }
    else
    {
        var tgen;
        var genderpref;
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
 
      console.log("my pref :");
      console.log(pref);
      console.log("their pref");
      console.log(tgen);
      console.log("my gen :");
      console.log(gen);
      db.query("SELECT * FROM profile WHERE `gender` = '"+pref+"' AND `matchg` = '"+tgen+"' AND `username` <> '"+sesh.email+"' AND username not in (select blocked from `blocked` WHERE username = '"+sesh.email+"' ) AND username not in (select username from `blocked` WHERE `blocked` = '"+sesh.email+"') ORDER BY tempdist ASC", function(req, rezozo){
          var i;
          var custom = [];
          var z;
          var a;
          var b;
          var n = 0;
          var t = 0;
          var split = [];
        
          console.log(rezozo);

          if (tags && dist == "Distance in km" && !min && !max && !minrating && !maxrating){
              console.log("search by tags");
                for(i = 0; rezozo[i]; i++){
                    if (rezozo[i].tags != undefined){
                        console.log("some tags");
                        split = rezozo[i].tags.split(',');
                        for(a = 0; tags[a]; a++){
                            console.log("tags ::");
                            console.log(tags[a]);
                            for (b = 0; b < split.length; b++){
                                console.log("usertag ::");
                                console.log(split[b]);
                                if (tags[a] == split[b]){
                                    custom[n] = rezozo[i];
                                    n++;
                                }
                            }
                        }
                    }
                }
          }
          else if (dist && min && max && dist != "Distance in km" && minrating && maxrating){
            for(i = 0; rezozo[i];i++){
                if (rezozo[i].age >= min && rezozo[i].age <= max && rezozo[i].tempdist <= dist && rezozo[i].fame >= minrating && rezozo[i].fame <= maxrating){
                    custom[i] = rezozo[i];
                }
            }
              console.log("Complete combo");
          }
          else if (dist && min && max && dist != "Distance in km" && !minrating && !maxrating){
            for(i = 0; rezozo[i];i++){
                if (rezozo[i].age >= min && rezozo[i].age <= max && rezozo[i].tempdist <= dist){
                    custom[i] = rezozo[i];
                }
            }
              console.log("Complete combo");
          }
          else if (dist && dist != "Distance in km" && !min && !max && !minrating && !maxrating){
            console.log("ONLY DIST");
            for(i = 0; rezozo[i];i++){
                if (rezozo[i].tempdist <= dist){
                    custom[i] = rezozo[i];
                }
            }
          }
          else if (dist == "Distance in km" && !min && !max && minrating && maxrating){
            console.log("ONLY DIST");
            for(i = 0; rezozo[i];i++){
                if (rezozo[i].fame >=  minrating && rezozo[i].fame <= maxrating){
                    custom[i] = rezozo[i];
                }
            }
          }
          else if (min && max && dist == "Distance in km" && !minrating && !maxrating){
            for(i = 0; rezozo[i];i++){
                if (rezozo[i].age >= min && rezozo[i].age <= max){
                    custom[i] = rezozo[i];
                }
            } 
          }
        res.render('search',{
            in: true,
            pp: custom
        });
      });
    }
});


});


module.exports = app;
