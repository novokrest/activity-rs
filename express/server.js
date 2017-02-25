var express = require('express')
  , bodyParser = require('body-parser')
  , jwt = require('express-jwt')
  , cors = require('cors')
  , minimist = require('minimist')
  , argv = minimist(process.argv.slice(2))
  , routes = require('./routes')
  , config = require('./config');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authCheck = jwt({
  secret: new Buffer(config.auth.secret, 'base64'),
  audience: config.auth.clientId
});

app.route('/api/activities')
   .get(routes.activities.get)
   .post(routes.activities.post);

app.route('/api/activity/:id')
   .get(authCheck, routes.activity.get);

var port = argv.port || 8081;
app.listen(port);

console.log('Express server listen on port ', port);