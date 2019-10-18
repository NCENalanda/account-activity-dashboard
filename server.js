const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const TwitterStrategy = require('passport-twitter')
const uuid = require('uuid/v4')
const security = require('./helpers/security')
const auth = require('./helpers/auth')
const cacheRoute = require('./helpers/cache-route')
const socket = require('./helpers/socket')

const app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
});

app.get('/webhook/Ayus', function(request, response) {

    console.log("  SUCCESS ");
    response.status(200);
    response.send('Hi Ayus')
});
app.get('/', function(request, response) {

    console.log("  SUCCESS ");
    response.status(200);
    response.send('App is Running')
});
