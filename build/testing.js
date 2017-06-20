'use strict';

var _mongo = require('./mongo.js');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _graphql = require('./graphql');

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoConnection = (0, _mongo.init)();

var app = (0, _express2.default)();
var PORT = process.env.PORT ? process.env.PORT : 3000;

var MONGO_URL = process.env.MONGO_URL ? process.env.MONGO_URL : 'Not defined!';

app.get('/', function (req, res) {
    res.send('App is running on port ' + PORT + ', Mongo Database: ' + MONGO_URL);
});

app.use(_bodyParser2.default.json());

app.use('/graphql', (0, _cors2.default)(), (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default,
        graphiql: true
    };
}));

app.listen(PORT, function () {
    console.log('App is running on http://locahost:' + PORT);
});