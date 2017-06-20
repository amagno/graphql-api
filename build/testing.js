'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('TEsting!!!'

//const mongoConnection = init()

); //import { init } from './mongo.js'
var app = (0, _express2.default)();
var PORT = process.env.PORT ? process.env.PORT : 3000;

var MONGO_URL = process.env.MONGO_URL ? process.env.MONGO_URL : 'Not defined!';

app.get('/', function (req, res) {
    res.send('App is running on port ' + PORT + ', Mongo Database: ' + MONGO_URL);
});

app.listen(PORT, function () {
    console.log('App is running on http://locahost:' + PORT);
});