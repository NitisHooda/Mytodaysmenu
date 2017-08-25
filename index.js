var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config.js');
mongoose.connect(config.mongoUrl, {
      useMongoClient : true,
   });
var db = mongoose.connection;
db.on('error', function(err){console.log(err);});
db.once('open', function(){console.log("Connected to server");});

var router = express.Router();
router.use(bodyParser.json());

var login = require('./routes/login.js');
var userPreference = require('./routes/userPreference.js');

var User = require('./models/user');
var UserHistory = require('./models/userHistory');

app.use('/login', login);
app.use('/userPreference', userPreference);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);