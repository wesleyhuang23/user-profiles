var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');

var app = express();
var corsOptions = {
  origin: 'http://localhost:8899'
};

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors(corsOptions));

app.use(session({
  secret: 'config.sessionSecret',
  saveUninitialized: false,
  resave: false
}));


app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getProfile);


app.listen(8899, function(){
  console.log('listening on port 8899...');
});
