var express = require('express');
var mysql = require('mysql')
var app = express();
var db = require('./config/db');
var path = require('path');
var bodyparser = require('body-parser');
const session = require('express-session');

/* Setup Routes */
const signup = require('./routes/signup');
const confirm = require('./routes/confirm');
const login = require('./routes/login');
const home = require('./routes/home');
const loggedin = require('./routes/loggedin');
const homepage = require('./routes/homepage');
const pp = require('./routes/pp');
const search = require('./routes/search');
const matches = require('./routes/matches');
const viewprofile = require('./routes/viewprofile');
const history = require('./routes/history');
const chatr = require('./routes/chatr');
const custom = require('./routes/custom');
const locat = require('./routes/locat');
const pics = require('./routes/pics');
const block = require('./routes/block');
const notifications = require('./routes/notifications');
const mesnot = require('./routes/mesnot');
const customdist = require('./routes/customdist');
const deets = require('./routes/deets');
const report = require('./routes/report');
const logout = require('./routes/logout');
//set static path
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');

/*Set up handlebars */

var handlebars = require('express-handlebars').create({
    helpers: require("./helpers/handlebars.js").helpers,
    defaultLayout: 'main',
    extname: '.handlebars'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(bodyparser.urlencoded({
extended: true}));

var formidable = require('formidable');
var socket = require('socket.io');
var server = app.listen(3000, function(){
console.log("Listening on server 3000");
});

var io = socket(server);
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
    console.log("made socket connection", socket.id);
    socket.on('chat',function(data){
        console.log(sesh.email + "made socket connection", socket.id);
        console.log("from: " + sesh.from);
        console.log("to: " + sesh.to);
        if (sesh.email == sesh.from || sesh.email == sesh.to)
        {
            values = {
                from: sesh.from,
                to: sesh.to,
                message: data.message
            };
            const sql = "INSERT INTO chat SET ?";
            db.query(sql, values, function(err, result) {
                if (err) throw err
            });
             io.sockets.emit('chat', data);
        }
    });
    socket.on('notify', function(data){
        if (data.value == sesh.email){
            console.log(data.value);
        console.log("here now notify");
        io.sockets.emit('notify', data);
        console.log(" and here now notify");
        }
    });
});

 var stuff = ['Samkelo', 'More Samkelo'];

app.get('/', function(req, res){
    res.render('home', {
        failure: "Failed to load",
        content: "Some stuff",
        published: true,
        stuff : stuff,
        off: true
    });
});

app.get('/confirmed', function(req, res){
    res.render('confirmed', {
        okay : "words"
    });
});

app.use('/signup', signup);

app.use('/customdist', customdist);

 app.use('/login', login);

 app.use('/loggedin', loggedin);

app.use('/pp', pp);

app.use('/pics',pics);
app.use('/homepage', homepage);

app.use('/confirm', confirm);
app.use('./mesnot', mesnot);

app.use('/chatr', chatr);

app.use('/viewprofile', viewprofile);

app.use('/history', history);

app.use('/search', search);

app.use('/notifications', notifications);

app.use('/custom', custom);

app.use('/mesnot', mesnot);

app.use('/locat', locat);
app.use('/logout', logout);
app.use('/block', block);
app.use('/report', report);

app.use('/deets', deets);

app.use('/matches', matches);

app.get('/successful', function(req, res){
    res.render('successful');
});

app.get('/home', function(req, res){
    res.render('home');
});
