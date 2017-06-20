'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphqlTools = require('graphql-tools');

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var schema = 'schema {\n    query: Query\n    mutation: Mutation\n}\ntype Mutation {\n    addUser(input: UserInput): User\n}\ntype Query {\n    users: [User]\n}\ninput UserInput {\n    name: String!\n    email: String!\n    password: String!\n}\ntype User {\n    id: ID!\n    name: String\n    email: String\n    password: String\n}';


var typeDefs = [schema];

var mocks = {
    Query: function Query() {
        return {
            users: function users() {
                return new _graphqlTools.MockList(50);
            }
        };
    },
    User: function User() {
        return {
            id: _mongoose2.default.Types.ObjectId(),
            name: _casual2.default.name,
            email: _casual2.default.email,
            password: _casual2.default.password
        };
    }
};
var resolvers = {
    Query: {
        users: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _user2.default.find().exec();

                            case 3:
                                return _context.abrupt('return', _context.sent);

                            case 6:
                                _context.prev = 6;
                                _context.t0 = _context['catch'](0);
                                throw new Error(_context.t0);

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[0, 6]]);
            }));

            return function users() {
                return _ref.apply(this, arguments);
            };
        }()
    },
    Mutation: {
        addUser: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(_, _ref3, context) {
                var input = _ref3.input;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return new _user2.default(input).save();

                            case 3:
                                return _context2.abrupt('return', _context2.sent);

                            case 6:
                                _context2.prev = 6;
                                _context2.t0 = _context2['catch'](0);
                                throw new Error(_context2.t0);

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined, [[0, 6]]);
            }));

            return function addUser(_x, _x2, _x3) {
                return _ref2.apply(this, arguments);
            };
        }()
    }
};
var executableSchema = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: typeDefs,
    resolvers: resolvers
});

if (process.env.MOCK_GRAPHQL) (0, _graphqlTools.addMockFunctionsToSchema)({ schema: executableSchema, mocks: mocks });

exports.default = executableSchema;