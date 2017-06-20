'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_DEV = process.env.NODE_ENV === 'development' ? true : false;
var MONGO_URL = process.env.MONGO_URL ? process.env.MONGO_URL : null;

if (!MONGO_URL) throw new Error('MongoDB URL is not defined on env!');

var init = exports.init = function init() {
    //if(IS_DEV) 
    _mongoose2.default.set('debug', true);

    _mongoose2.default.connect(MONGO_URL);

    var connection = _mongoose2.default.connection;

    connection.on('error', function () {
        throw new Error('Error on connect to database ' + MONGO_URL);
    }).once('open', function () {
        var TYPE = IS_DEV ? 'development' : 'production';
        console.log('Connected to ' + TYPE + ' server database: ' + MONGO_URL);
    });

    return connection;
};