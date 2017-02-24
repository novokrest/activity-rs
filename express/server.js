var express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , minimist = require('minimist')
  , argv = minimist(process.argv.slice(2))
  , routes = require('./routes');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.route('/api/activities')
   .get(routes.activities.get)
   .post(routes.activities.post);

app.route('/api/activity/:id')
   .get(routes.activity.get);

var port = argv.port || 8081;
app.listen(port);

console.log('Express server listen on port ', port);