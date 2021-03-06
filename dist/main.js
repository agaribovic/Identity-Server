/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    port: 5000,\n    IdentityRoute: 'http://localhost:5000',\n    authUrl: 'http://localhost:5000/auth/',\n    secret: 'p0p0k4t4p3tl',\n    mongo: 'mongodb://localhost:27017/TimeKeeperIdentity',\n    //mongo:'mongodb://mongo:27017/identity',\n    token: '',\n    currentUser: {},\n    //Entity:'IS',\n    Client: ''\n};\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./node_modules/crypto-browserify/index.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-browserify/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.randomBytes = exports.rng = exports.pseudoRandomBytes = exports.prng = __webpack_require__(/*! randombytes */ \"randombytes\")\nexports.createHash = exports.Hash = __webpack_require__(/*! create-hash */ \"create-hash\")\nexports.createHmac = exports.Hmac = __webpack_require__(/*! create-hmac */ \"create-hmac\")\n\nvar algos = __webpack_require__(/*! browserify-sign/algos */ \"browserify-sign/algos\")\nvar algoKeys = Object.keys(algos)\nvar hashes = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'].concat(algoKeys)\nexports.getHashes = function () {\n  return hashes\n}\n\nvar p = __webpack_require__(/*! pbkdf2 */ \"pbkdf2\")\nexports.pbkdf2 = p.pbkdf2\nexports.pbkdf2Sync = p.pbkdf2Sync\n\nvar aes = __webpack_require__(/*! browserify-cipher */ \"browserify-cipher\")\n\nexports.Cipher = aes.Cipher\nexports.createCipher = aes.createCipher\nexports.Cipheriv = aes.Cipheriv\nexports.createCipheriv = aes.createCipheriv\nexports.Decipher = aes.Decipher\nexports.createDecipher = aes.createDecipher\nexports.Decipheriv = aes.Decipheriv\nexports.createDecipheriv = aes.createDecipheriv\nexports.getCiphers = aes.getCiphers\nexports.listCiphers = aes.listCiphers\n\nvar dh = __webpack_require__(/*! diffie-hellman */ \"diffie-hellman\")\n\nexports.DiffieHellmanGroup = dh.DiffieHellmanGroup\nexports.createDiffieHellmanGroup = dh.createDiffieHellmanGroup\nexports.getDiffieHellman = dh.getDiffieHellman\nexports.createDiffieHellman = dh.createDiffieHellman\nexports.DiffieHellman = dh.DiffieHellman\n\nvar sign = __webpack_require__(/*! browserify-sign */ \"browserify-sign\")\n\nexports.createSign = sign.createSign\nexports.Sign = sign.Sign\nexports.createVerify = sign.createVerify\nexports.Verify = sign.Verify\n\nexports.createECDH = __webpack_require__(/*! create-ecdh */ \"create-ecdh\")\n\nvar publicEncrypt = __webpack_require__(/*! public-encrypt */ \"public-encrypt\")\n\nexports.publicEncrypt = publicEncrypt.publicEncrypt\nexports.privateEncrypt = publicEncrypt.privateEncrypt\nexports.publicDecrypt = publicEncrypt.publicDecrypt\nexports.privateDecrypt = publicEncrypt.privateDecrypt\n\n// the least I can do is make error messages for the rest of the node.js/crypto api.\n// ;[\n//   'createCredentials'\n// ].forEach(function (name) {\n//   exports[name] = function () {\n//     throw new Error([\n//       'sorry, ' + name + ' is not implemented yet',\n//       'we accept pull requests',\n//       'https://github.com/crypto-browserify/crypto-browserify'\n//     ].join('\\n'))\n//   }\n// })\n\nvar rf = __webpack_require__(/*! randomfill */ \"randomfill\")\n\nexports.randomFill = rf.randomFill\nexports.randomFillSync = rf.randomFillSync\n\nexports.createCredentials = function () {\n  throw new Error([\n    'sorry, createCredentials is not implemented yet',\n    'we accept pull requests',\n    'https://github.com/crypto-browserify/crypto-browserify'\n  ].join('\\n'))\n}\n\nexports.constants = {\n  'DH_CHECK_P_NOT_SAFE_PRIME': 2,\n  'DH_CHECK_P_NOT_PRIME': 1,\n  'DH_UNABLE_TO_CHECK_GENERATOR': 4,\n  'DH_NOT_SUITABLE_GENERATOR': 8,\n  'NPN_ENABLED': 1,\n  'ALPN_ENABLED': 1,\n  'RSA_PKCS1_PADDING': 1,\n  'RSA_SSLV23_PADDING': 2,\n  'RSA_NO_PADDING': 3,\n  'RSA_PKCS1_OAEP_PADDING': 4,\n  'RSA_X931_PADDING': 5,\n  'RSA_PKCS1_PSS_PADDING': 6,\n  'POINT_CONVERSION_COMPRESSED': 2,\n  'POINT_CONVERSION_UNCOMPRESSED': 4,\n  'POINT_CONVERSION_HYBRID': 6\n}\n\n\n//# sourceURL=webpack:///./node_modules/crypto-browserify/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/controllers/access.controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/access.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _client = __webpack_require__(/*! ../models/client.model */ \"./src/models/client.model.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _access = __webpack_require__(/*! ../models/access.model */ \"./src/models/access.model.js\");\n\nvar _access2 = _interopRequireDefault(_access);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res) {\n    var access = new _access2.default(req.body);\n    access.save(function (err, result) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            addConcerns(result);\n            res.status(200).send(result);\n        }\n    });\n};\n\nvar addConcerns = function addConcerns(access) {\n    _user2.default.findById(access.user, function (err, user) {\n        if (!err) {\n            user.clients.push(access._id);\n            user.save(function (err) {\n                if (!err) {\n                    _client2.default.findById(access.client, function (err, client) {\n                        if (!err) {\n                            client.users.push(access._id);\n                            client.save();\n                        }\n                    });\n                }\n            });\n        }\n    });\n};\nvar deleteConcerns = function deleteConcerns(access) {\n    console.log('HERE2');\n    _user2.default.findById(access.user, function (err, user) {\n        if (!err) {\n            console.log('HERE3');\n            for (var i = 0; i < user.clients.length; i++) {\n                if (access._id.toString() == user.clients[i].toString()) {\n                    user.clients.splice(i, 1);\n                    break;\n                }\n                console.log('HERE4');\n            }\n            user.save(function (err) {\n                if (!err) {\n                    console.log('HERE5');\n                    _client2.default.findById(access.client, function (err, client) {\n                        if (!err) {\n                            console.log('HERE6');\n                            for (var _i = 0; _i < client.users.length; _i++) {\n                                if (access._id.toString() == client.users[_i].toString()) {\n                                    client.users.splice(_i, 1);\n                                    break;\n                                }\n                            }\n                            console.log('HERE7');\n                            client.save();\n                        } else {\n                            res.status(400).send(err);\n                        }\n                    });\n                }\n            });\n        } else {\n            res.status(400).send(err);\n        }\n    });\n};\nvar list = function list(req, res) {\n    _access2.default.find().populate('client', 'clientId name ').populate('user', 'name').exec(function (err, result) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n\n            res.status(200).send(result);\n        }\n    });\n};\n\nvar getId = function getId(req, res, next, id) {\n    _access2.default.findById(id).exec(function (err, data) {\n        if (err || !data) res.status(400).send(err);\n        req.profile = data;\n        next();\n    });\n};\n\nvar read = function read(req, res) {\n    return res.send(req.profile);\n};\n\nvar update = function update(req, res, next) {\n    var access = req.profile;\n    access = _lodash2.default.extend(access, req.body);\n    access.save(function (err) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            res.send(access);\n        }\n    });\n};\n\nvar remove = function remove(req, res, next) {\n    var access = req.profile;\n    access.remove(function (err, deletedAccess) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            res.send(deletedAccess);\n        }\n    });\n};\n\nexports.default = { list: list, create: create, getId: getId, read: read, update: update, remove: remove, deleteConcerns: deleteConcerns };\n\n//# sourceURL=webpack:///./src/controllers/access.controller.js?");

/***/ }),

/***/ "./src/controllers/auth.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/auth.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _client = __webpack_require__(/*! ../models/client.model */ \"./src/models/client.model.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _access = __webpack_require__(/*! ../models/access.model */ \"./src/models/access.model.js\");\n\nvar _access2 = _interopRequireDefault(_access);\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _base = __webpack_require__(/*! ../helpers/base64 */ \"./src/helpers/base64.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar login = function login(req, res) {\n  // znaci clientId problem, jer ga nemam, mozda po name ?\n  //console.log(req.body)\n  var username = req.body.username;\n  var password = req.body.password;\n  var clientId = req.body.from;\n  if (!clientId) clientId = 'IS';\n  //console.log(clientId)\n  _user2.default.findOne({ 'email': username }, function (err, userData) {\n    if (err || !userData) {\n      //console.log(\"user\")\n      res.status(401).send('User does not exist');\n    }\n    if (!_lodash2.default.isEmpty(userData)) if (userData.enabled == false) {\n      res.status(403).send('Your account is not enabled');\n    } else {\n      // if(!userData.enabled)   \n      // res.status(401).send('User is not enabled'); TODO\n      if (userData.authenticate(password)) {\n        _client2.default.findOne({ 'clientId': clientId }, function (err, clientData) {\n          if (err || !clientData) {\n            //console.log(clientData,'does not exist')\n            res.status(404).send('Client does not exist');\n          } else {\n            _access2.default.findOne({ 'user': userData._id, 'client': clientData._id }, function (err, accessData) {\n              if (err || !accessData) {\n                //console.log('denied')\n\n                res.status(401).send('Access denied');\n              } else {\n                // console.log(accessData.scopes)\n                _config2.default.currentUser = {\n                  _id: userData._id,\n                  sub: userData.email,\n                  cli: clientData.name,\n                  scopes: accessData.scopes,\n                  role: accessData.scopes[0].role,\n                  name: userData.name,\n                  exp: new Date().getTime() / 1000 + 3600\n                  // console.log(config.currentUser)\n                };var token = _jsonwebtoken2.default.sign(_config2.default.currentUser, clientData.secret /*config.secret*/);\n                res.status(200).send({ token: token, url: clientData.redirect });\n              }\n            });\n          }\n        });\n      } else {\n        res.status(401).send('User does not exist');\n      }\n    }\n  });\n};\n\nvar autolog = function autolog(req, res) {\n  _jsonwebtoken2.default.verify(req.body.token, _config2.default.secret, function (err, result) {\n    if (err) {\n      res.status(401).json({ error: err });\n    } else {\n      var username = result.sub;\n      var clientId = req.body.client;\n      if (clientId === undefined) clientId = 'IS';\n      _user2.default.findOne({ 'email': username }, function (err, userData) {\n        if (err || !userData) {\n          res.status(401).send(\"noAccess\");\n        } else {\n          _client2.default.findOne({ 'clientId': clientId }, function (err, clientData) {\n            if (err || !clientData) {\n              res.status(404).send(\"noAccess\");\n            } else {\n              _access2.default.findOne({ 'user': userData._id, 'client': clientData._id }, function (err, accessData) {\n                if (err || !accessData) {\n                  res.status(401).send(\"noAccess\");\n                } else {\n                  _config2.default.currentUser = {\n                    id: userData._id,\n                    sub: userData.email,\n                    name: userData.name,\n                    clId: clientData.clientId,\n                    cli: clientData.name,\n                    scopes: accessData.scopes,\n                    enabled: userData.enabled,\n                    exp: new Date().getTime() / 1000 + 3600\n                  };\n                  _config2.default.token = _jsonwebtoken2.default.sign(_config2.default.currentUser, clientData.secret);\n                  console.log(\"TCL: autolog -> secret\", clientData.secret);\n                  console.log(\"TCL: autolog -> redirect\", clientData.redirect);\n\n                  var _result = {\n                    url: clientData.redirect,\n                    token: _config2.default.token\n                  };\n                  res.status(200).send(_result);\n                }\n              });\n            }\n          });\n        }\n      });\n    }\n  });\n};\n\nvar signed = function signed(req, res, next) {\n  var token = req.headers.authorization;\n  //console.log(\"token: \" + token);\n  if (token === undefined) {\n    res.status(401).send(\"Unathorized access\");\n  } else {\n    _jsonwebtoken2.default.verify(token.substring(7), _config2.default.secret, function (err, result) {\n      if (err) {\n        res.status(401).send(\"Invalid token\");\n      } else {\n        _config2.default.currentUser = result;\n\n        var exp = result.exp - new Date().getTime() / 1000;\n\n        next();\n      }\n    });\n  }\n};\n\nexports.default = { login: login, signed: signed, autolog: autolog };\n\n//# sourceURL=webpack:///./src/controllers/auth.controller.js?");

/***/ }),

/***/ "./src/controllers/client.controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/client.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _client = __webpack_require__(/*! ../models/client.model */ \"./src/models/client.model.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _base = __webpack_require__(/*! ../helpers/base64 */ \"./src/helpers/base64.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nvar _access = __webpack_require__(/*! ../models/access.model */ \"./src/models/access.model.js\");\n\nvar _access2 = _interopRequireDefault(_access);\n\nvar _logger = __webpack_require__(/*! ../helpers/logger */ \"./src/helpers/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res) {\n    var client = new _client2.default(req.body);\n    client.secret = _base2.default.encode(client.secret);\n    client.stringCreated = client.created.toString().substring(3, 15);\n    client.save(function (err, result) {\n        if (err) {\n            return res.status(400).send(err);\n        } else {\n            return res.status(200).send(result);\n        }\n    });\n};\n\nvar list = function list(req, res) {\n    _client2.default.find().exec(function (err, result) {\n        if (err) {\n            return res.status(400).send(err);\n        } else {\n            return res.status(200).send(result);\n        }\n    });\n};\n\nvar clientById = function clientById(req, res, next, id) {\n    _client2.default.findById(id).exec(function (err, data) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            req.profile = data;\n            next();\n        }\n    });\n};\n\nvar read = function read(req, res) {\n    return res.json(req.profile);\n};\n\nvar update = function update(req, res) {\n    var client = req.profile;\n    client = _lodash2.default.extend(client, req.body);\n    client.save(function (err) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            res.send(client);\n        }\n    });\n};\n\nvar remove = function remove(req, res) {\n    var client = req.profile;\n    client.remove(function (err, deletedClient) {\n        if (err) res.status(400).send(err);\n\n        var clientsi = deletedClient.users;\n        for (var i = 0; i < clientsi.length; i++) {\n            _access2.default.findByIdAndRemove(clientsi[i]._id, function (err, result) {\n                if (err) {\n                    res.status(400).send(err);\n                } else {\n\n                    var accessId = result._id;\n                    var clientId = result.user;\n                    var arrayOfUsers = void 0;\n                    _user2.default.findById(clientId, function (err, result2) {\n                        if (err) {\n                            res.status(400).send(err);\n                        } else {\n                            arrayOfUsers = result2.clients;\n                            for (var j = 0; j < arrayOfUsers.length; j++) {\n                                if (arrayOfUsers[j].toString() == accessId.toString()) {\n                                    arrayOfUsers.splice(j, 1);\n                                    break;\n                                }\n                            }\n                        }\n                        result2.save(function (err) {\n                            if (err) {\n                                res.status(400).send(err);\n                            }\n                        });\n                    });\n                }\n            });\n        }\n        res.send(deletedClient);\n    });\n};\n\nvar users = function users(req, res) {\n    //sumejja\n    //console.log(req)\n    var result = {\n        client: {\n            id: req.profile._id,\n            name: req.profile.name,\n            clientId: req.profile.clientId,\n            enabled: req.profile.enabled\n        },\n        users: []\n    };\n    _access2.default.find({ client: req.profile._id }).select('scopes').populate('user', 'email name stringCreated').exec(function (err, data) {\n        if (err) {\n            _logger2.default.error(err.errmsg);\n            res.status(400).send(err);\n        } else {\n            result.users = data;\n            res.status(200).send(result);\n        }\n    });\n};\n\nexports.default = { list: list, create: create, clientById: clientById, read: read, update: update, remove: remove, users: users };\n\n//# sourceURL=webpack:///./src/controllers/client.controller.js?");

/***/ }),

/***/ "./src/controllers/user.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/user.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _access = __webpack_require__(/*! ../models/access.model */ \"./src/models/access.model.js\");\n\nvar _access2 = _interopRequireDefault(_access);\n\nvar _client = __webpack_require__(/*! ../models/client.model */ \"./src/models/client.model.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _logger = __webpack_require__(/*! ../helpers/logger */ \"./src/helpers/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res) {\n    var user = new _user2.default(req.body);\n    user.stringCreated = user.created.toString().substring(3, 15);\n    user.save(function (err, result) {\n        if (err) {\n            _logger2.default.error(err.errmsg);\n            console.log(err);\n            res.status(400).send(err);\n        } else {\n            res.status(200).send(result);\n        }\n    });\n};\n\nvar list = function list(req, res) {\n    _user2.default.find().populate('clients').exec(function (err, result) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            res.status(200).send(result);\n        }\n    });\n};\n\nvar getId = function getId(req, res, next, id) {\n    _user2.default.findById(id).exec(function (err, data) {\n        if (err || !data) res.status(400).send(err);\n        req.profile = data;\n        next();\n    });\n};\n\nvar read = function read(req, res) {\n    req.profile.password = undefined;\n    req.profile.salt = undefined;\n    return res.send(req.profile);\n};\n\nvar update = function update(req, res) {\n    var user = req.profile;\n    user = _lodash2.default.extend(user, req.body);\n    user.save(function (err) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            user.password = undefined;\n            user.salt = undefined;\n            res.send(user);\n        }\n    });\n};\nvar unassign = function unassign(req, res) {\n\n    res.status(200).send('Hello');\n};\nvar remove = function remove(req, res) {\n    var user = req.profile;\n    user.remove(function (err, deletedUser) {\n        if (err) res.status(400).send(err);\n        deletedUser.password = undefined;\n        deletedUser.salt = undefined;\n\n        var clientsi = deletedUser.clients;\n        for (var i = 0; i < clientsi.length; i++) {\n            _access2.default.findByIdAndRemove(clientsi[i]._id, function (err, result) {\n                if (err) {\n                    res.status(400).send(err);\n                } else {\n\n                    var accessId = result._id;\n                    var clientId = result.client;\n                    var arrayOfUsers = void 0;\n                    _client2.default.findById(clientId, function (err, result2) {\n                        if (err) {\n                            res.status(400).send(err);\n                        } else {\n                            arrayOfUsers = result2.users;\n                            for (var j = 0; j < arrayOfUsers.length; j++) {\n                                if (arrayOfUsers[j].toString() == accessId.toString()) {\n                                    arrayOfUsers.splice(j, 1);\n                                    break;\n                                }\n                            }\n                        }\n                        result2.save(function (err) {\n                            if (err) {\n                                res.status(400).send(err);\n                            }\n                        });\n                    });\n                }\n            });\n        }\n        res.send(deletedUser);\n    });\n};\n\nvar clients = function clients(req, res) {\n    //prof's\n    var result = {\n        user: {\n            name: req.profile.name,\n            email: req.profile.email,\n            enabled: req.profile.enabled\n        },\n        clients: []\n    };\n    _access2.default.find({ user: req.profile._id }).select('scopes').populate('client', 'clientId name redirect stringCreated') //additional population fields\n    .exec(function (err, data) {\n        if (!err) result.clients = data;\n        res.status(200).send(result);\n    });\n};\n\nexports.default = { list: list, create: create, unassign: unassign, getId: getId, read: read, update: update, remove: remove, clients: clients };\n\n//# sourceURL=webpack:///./src/controllers/user.controller.js?");

/***/ }),

/***/ "./src/express.js":
/*!************************!*\
  !*** ./src/express.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _user = __webpack_require__(/*! ./routes/user.router */ \"./src/routes/user.router.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _client = __webpack_require__(/*! ./routes/client.router */ \"./src/routes/client.router.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _access = __webpack_require__(/*! ./routes/access.router */ \"./src/routes/access.router.js\");\n\nvar _access2 = _interopRequireDefault(_access);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.router */ \"./src/routes/auth.router.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _web = __webpack_require__(/*! ./routes/web.routes */ \"./src/routes/web.routes.js\");\n\nvar _web2 = _interopRequireDefault(_web);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import logger from './helpers/logger';\n\n\n// const logStart = (req, res, next) =>{\n//     let prefix = parseInt(res.statusCode / 100, 10);\n//     let message = `Method: ${req.method}, Url : ${req.originalUrl}, Response: ${res.status}`;\n//     if(prefix <= 2){\n//         logger.info(message)\n//     }else{\n//         logger.error(message)\n//     }\n//     next ()\n// }\n\nvar app = (0, _express2.default)();\n\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use('/', _user2.default);\napp.use('/', _client2.default);\napp.use('/', _access2.default);\napp.use('/', _auth2.default);\n\napp.use(_express2.default.static(__dirname + 'views'));\n//app.use('/',logStart)\n\n\n(0, _web2.default)(app);\n\nexports.default = app;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/express.js?");

/***/ }),

/***/ "./src/helpers/base64.js":
/*!*******************************!*\
  !*** ./src/helpers/base64.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\nvar encode = function encode(input) {\n\n    var output = '';\n    var chr1 = void 0,\n        chr2 = void 0,\n        chr3 = '';\n    var enc1 = void 0,\n        enc2 = void 0,\n        enc3 = void 0,\n        enc4 = '';\n    var i = 0;\n\n    do {\n\n        chr1 = input.charCodeAt(i++);\n        chr2 = input.charCodeAt(i++);\n        chr3 = input.charCodeAt(i++);\n\n        enc1 = chr1 >> 2;\n        enc2 = (chr1 & 3) << 4 | chr2 >> 4;\n        enc3 = (chr2 & 15) << 2 | chr3 >> 6;\n        enc4 = chr3 & 63;\n\n        if (isNaN(chr2)) {\n            enc3 = enc4 = 64;\n        } else if (isNaN(chr3)) {\n            enc4 = 64;\n        }\n\n        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);\n\n        chr1 = chr2 = chr3 = '';\n        enc1 = enc2 = enc3 = enc4 = '';\n    } while (i < input.length);\n\n    return output;\n};\n\nvar decode = function decode(input) {\n\n    var output = '';\n    var chr1 = void 0,\n        chr2 = void 0,\n        chr3 = '';\n    var enc1 = void 0,\n        enc2 = void 0,\n        enc3 = void 0,\n        enc4 = '';\n    var i = 0;\n\n    do {\n        enc1 = keyStr.indexOf(input.charAt(i++));\n        enc2 = keyStr.indexOf(input.charAt(i++));\n        enc3 = keyStr.indexOf(input.charAt(i++));\n        enc4 = keyStr.indexOf(input.charAt(i++));\n\n        chr1 = enc1 << 2 | enc2 >> 4;\n        chr2 = (enc2 & 15) << 4 | enc3 >> 2;\n        chr3 = (enc3 & 3) << 6 | enc4;\n\n        output = output + String.fromCharCode(chr1);\n\n        if (enc3 != 64) {\n            output = output + String.fromCharCode(chr2);\n        }\n        if (enc4 != 64) {\n            output = output + String.fromCharCode(chr3);\n        }\n\n        chr1 = chr2 = chr3 = '';\n        enc1 = enc2 = enc3 = enc4 = '';\n    } while (i < input.length);\n\n    return output;\n};\n\nexports.default = { encode: encode, decode: decode };\n\n//# sourceURL=webpack:///./src/helpers/base64.js?");

/***/ }),

/***/ "./src/helpers/logger.js":
/*!*******************************!*\
  !*** ./src/helpers/logger.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar winston = __webpack_require__(/*! winston */ \"winston\");\nvar logform = __webpack_require__(/*! logform */ \"logform\");\nvar _logform$format = logform.format,\n    combine = _logform$format.combine,\n    timestamp = _logform$format.timestamp,\n    printf = _logform$format.printf;\n\n\nvar logger = winston.createLogger({\n    level: 'info',\n    format: combine(timestamp(), printf(function (nfo) {\n        return nfo.timestamp + ' [' + nfo.level + '] ' + nfo.message;\n    })),\n    transports: [new winston.transports.File({\n        filename: './error.log',\n        level: 'error'\n    }), new winston.transports.File({\n        filename: './journal.log'\n    })]\n});\nexports.default = logger;\n\n//# sourceURL=webpack:///./src/helpers/logger.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _config = __webpack_require__(/*! ../config */ \"./config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./src/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.set('useCreateIndex', true);\n_mongoose2.default.set('useNewUrlParser', true);\n_mongoose2.default.connect(_config2.default.mongo);\n_mongoose2.default.connection.on('error', function () {\n    console.log('GRESKA');\n});\n\n_express2.default.listen(_config2.default.port, function (err) {\n    if (err) console.log(err);\n    console.log('Server is running on ' + _config2.default.IdentityRoute);\n});\n\nexports.default = _express2.default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/access.model.js":
/*!************************************!*\
  !*** ./src/models/access.model.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AccessSchema = new _mongoose2.default.Schema({\n    client: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Client' },\n    user: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'User' },\n    scopes: [{ role: String, action: String, team: String }]\n});\n\nexports.default = _mongoose2.default.model('Access', AccessSchema);\n\n//# sourceURL=webpack:///./src/models/access.model.js?");

/***/ }),

/***/ "./src/models/client.model.js":
/*!************************************!*\
  !*** ./src/models/client.model.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ClientSchema = _mongoose2.default.Schema({\n    clientId: String,\n    name: { type: String, required: true, unique: true },\n    secret: String,\n    enabled: { type: Boolean, default: false },\n    redirect: { type: String, required: true },\n    created: { type: Date, default: Date.now },\n    stringCreated: String,\n    users: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Access' }]\n});\n\nexports.default = _mongoose2.default.model('Client', ClientSchema);\n\n//# sourceURL=webpack:///./src/models/client.model.js?");

/***/ }),

/***/ "./src/models/user.model.js":
/*!**********************************!*\
  !*** ./src/models/user.model.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"./node_modules/crypto-browserify/index.js\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar UserSchema = new _mongoose2.default.Schema({\n    name: { type: String, trim: true, required: 'Name is required!' },\n    email: {\n        type: String, trim: true, required: 'Email is required!',\n        unique: 'User already exists', match: [/.+\\@.+\\..+/, 'Invalid email']\n    },\n    password: { type: String, required: true },\n    salt: String,\n    enabled: { type: Boolean, default: false },\n    created: { type: Date, default: Date.now },\n    stringCreated: String,\n\n    clients: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Access' }]\n});\n\nUserSchema.virtual('plainText').set(function (plainText) {\n    this._password = plainText;\n    this.salt = this.makeSalt();\n    this.password = this.encryptPassword(plainText);\n}).get(function () {\n    return this._password;\n});\n\nUserSchema.methods = {\n    makeSalt: function makeSalt() {\n        return Math.round(new Date().valueOf() * Math.random()) + '';\n    },\n\n    encryptPassword: function encryptPassword(plainText) {\n        if (!plainText) return '';\n        try {\n            return _crypto2.default.createHmac('sha1', this.salt).update(plainText).digest('hex');\n        } catch (err) {\n            return '';\n        }\n    },\n\n    authenticate: function authenticate(plainText) {\n        return this.password === this.encryptPassword(plainText);\n    }\n};\n\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/models/user.model.js?");

/***/ }),

/***/ "./src/routes/access.router.js":
/*!*************************************!*\
  !*** ./src/routes/access.router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _access = __webpack_require__(/*! ../controllers/access.controller */ \"./src/controllers/access.controller.js\");\n\nvar _access2 = _interopRequireDefault(_access);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./src/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/access').get(_access2.default.list).post(_access2.default.create);\n\nrouter.route('/api/access/:id').get(_access2.default.read).put(_access2.default.update).delete(_access2.default.remove);\n\nrouter.param('id', _access2.default.getId);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/access.router.js?");

/***/ }),

/***/ "./src/routes/auth.router.js":
/*!***********************************!*\
  !*** ./src/routes/auth.router.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./src/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/auth/login').post(_auth2.default.login);\n\nrouter.route('/auth/autolog').post(_auth2.default.autolog);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/auth.router.js?");

/***/ }),

/***/ "./src/routes/client.router.js":
/*!*************************************!*\
  !*** ./src/routes/client.router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _client = __webpack_require__(/*! ../controllers/client.controller */ \"./src/controllers/client.controller.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./src/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/clients').get(_client2.default.list).post(_client2.default.create);\n\nrouter.route('/api/clients/:clientId').get(_client2.default.read).put(_client2.default.update).delete(_client2.default.remove);\n\nrouter.route('/api/clients/:clientId/users').get(_client2.default.users);\n\nrouter.param('clientId', _client2.default.clientById);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/client.router.js?");

/***/ }),

/***/ "./src/routes/user.router.js":
/*!***********************************!*\
  !*** ./src/routes/user.router.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./src/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./src/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/users').get(_user2.default.list).post(_user2.default.create);\n\nrouter.route('/api/users/:id').get(_user2.default.read).put(_user2.default.update).delete(_user2.default.remove).unlink(_user2.default.unassign);\n\nrouter.route('/api/users/:id/clients') //works\n.get(_user2.default.clients);\n\nrouter.param('id', _user2.default.getId);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/user.router.js?");

/***/ }),

/***/ "./src/routes/web.routes.js":
/*!**********************************!*\
  !*** ./src/routes/web.routes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _request = __webpack_require__(/*! request */ \"request\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nvar _nodemailer2 = _interopRequireDefault(_nodemailer);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _nodeLocalstorage = __webpack_require__(/*! node-localstorage */ \"node-localstorage\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const ls = new LocalStorage('./store')\nfunction sendMail(mailTo, mailSubject, mailBody) {\n  var transporter = _nodemailer2.default.createTransport({\n    host: \"smtp.gmail.com\",\n    port: 465,\n    secure: true,\n    auth: {\n      user: \"zakircinjarevic@gmail.com\",\n      pass: \"zakir234\"\n    }\n  });\n  var mailOptions = {\n    from: '\"apollo@identity.com',\n    to: mailTo,\n    subject: mailSubject,\n    text: mailBody\n    //html: \"<b>Hello world?</b>\" // html body\n  };\n\n  var info = transporter.sendMail(mailOptions);\n  //#endregion\n}\nmodule.exports = function (app) {\n  var ls = new _nodeLocalstorage.LocalStorage('./store');\n  app.locals = { currentUser: _config2.default.currentUser\n    // app.get(\"/\", (req, res) =>\n    //  {\n\n    //   config.currentUser = {};\n    //   config.token = \"\";\n    //   config.client = req.query.client;\n    //   if (config.client == undefined) config.client = \"IS\";\n    //   //console.log(config.client)\n    //   if (config.client == undefined)\n    //     res.render(\"login.ejs\", { message: \"\", client: \"\", info: config.token });\n    //   else {\n    //     res.render(\"login.ejs\", {\n    //       message: \"\",\n    //       client: config.client,\n    //       info: config.token\n    //     });\n    //   }\n    // });\n\n\n  };app.get(\"/\", function (req, res) {\n    console.log(ls.getItem(\"ident\"));\n    _config2.default.currentUser = {};\n    _config2.default.token = \"\";\n    _config2.default.client = req.query.client;\n    var client = _config2.default.client;\n    var token = ls.getItem(\"ident\");\n    if (token !== null) {\n      _request2.default.post({\n        url: _config2.default.authUrl + \"autolog\",\n        body: { token: token, client: client },\n        json: true\n      }, function (err, result) {\n\n        if (result.statusCode === 200) {\n          res.redirect(\"/adminPanel\");\n        } else {\n          if (client === \"IS\") res.redirect(\"/login?token=IS\");else {\n            console.log(\"TCL: result.body.url\", result.body.url);\n            res.redirect(result.body.url + \"?token=\" + result.body.token);\n          }\n        }\n      });\n    } else {\n      if (_config2.default.client == undefined) _config2.default.client = \"IS\";\n      //console.log(config.client)\n      if (_config2.default.client == undefined) res.render(\"login.ejs\", {\n        message: \"\",\n        client: \"\",\n        info: _config2.default.token\n      });else {\n        res.render(\"login.ejs\", {\n          message: \"\",\n          client: _config2.default.client,\n          info: _config2.default.token\n        });\n      }\n    }\n  });\n  app.get(\"/login\", function (req, res) {\n    console.log(ls.getItem(\"ident\"));\n    _config2.default.currentUser = {};\n    _config2.default.token = \"\";\n    _config2.default.client = req.query.client;\n    var client = _config2.default.client;\n    var token = ls.getItem(\"ident\");\n    if (token !== null) {\n      _request2.default.post({\n        url: _config2.default.authUrl + \"autolog\",\n        body: { token: token, client: client },\n        json: true\n      }, function (err, result) {\n\n        if (result.statusCode === 200) {\n          res.redirect(\"/adminPanel\");\n        } else {\n          if (client === \"IS\") res.redirect(\"/login?token=IS\");else {\n            console.log(\"TCL: result.body.url\", result.body.url);\n            res.redirect(result.body.url + \"?token=\" + result.body.token);\n          }\n        }\n      });\n    } else {\n      if (_config2.default.client == undefined) _config2.default.client = \"IS\";\n      //console.log(config.client)\n      if (_config2.default.client == undefined) res.render(\"login.ejs\", {\n        message: \"\",\n        client: \"\",\n        info: _config2.default.token\n      });else {\n        res.render(\"login.ejs\", {\n          message: \"\",\n          client: _config2.default.client,\n          info: _config2.default.token\n        });\n      }\n    }\n  });\n\n  app.get('/logout', function (req, res) {\n    _config2.default.currentUser = { sub: '', cli: '', role: '', name: '', exp: 0 };\n    app.locals = { currentUser: _config2.default.currentUser };\n    _config2.default.token = \"\";\n    ls.clear();\n    res.redirect('/login');\n  });\n  app.get('/tklogout', function (req, res) {\n    _config2.default.currentUser = { sub: '', cli: '', role: '', name: '', exp: 0 };\n    app.locals = { currentUser: _config2.default.currentUser };\n    _config2.default.token = \"\";\n    ls.clear();\n    res.redirect('http://localhost:8000');\n  });\n\n  app.post(\"/login\", function (req, res) {\n\n    var from = req.body.from;\n    var remember = req.body.rememberme === 'on';\n    var client = req.body.from;\n    var sekret = void 0;\n    _request2.default.post({\n      url: _config2.default.IdentityRoute + \"/auth/login\",\n      body: req.body,\n      json: true\n    }, function (err, result) {\n      if (result.statusCode == 401) {\n        res.render(\"login.ejs\", {\n          message: \"Access unauthorized\",\n          info: _config2.default.token,\n          client: _config2.default.client\n        });\n      } else if (result.statusCode == 403) {\n        res.render(\"login.ejs\", {\n          message: \"Your account is not activated. Please contact your administrator\",\n          info: _config2.default.token,\n          client: _config2.default.client\n        });\n      } else {\n        _config2.default.token = result.body.token;\n        app.locals = { currentUser: _config2.default.currentUser };\n\n        var whereToGo = void 0;\n        _request2.default.get(_config2.default.IdentityRoute + \"/api/clients/\", function (err, result) {\n          var clientsForRedirects = JSON.parse(result.body);\n          clientsForRedirects.forEach(function (item) {\n            if (item.name == from) {\n              whereToGo = item.redirect;\n              sekret = item.secret;\n            } else if (whereToGo === undefined) whereToGo = \"http://localhost:5000\";\n          });\n          if (whereToGo != \"http://localhost:5000\") {\n            if (remember) {\n              var token = _jsonwebtoken2.default.sign({ sub: _config2.default.currentUser.sub }, sekret);\n              ls.setItem('ident', token);\n            }\n            res.redirect(whereToGo + \"/auth/login?token=\" + _config2.default.token);\n          } else {\n            if (remember) {\n              var _token = _jsonwebtoken2.default.sign({ sub: _config2.default.currentUser.sub }, sekret);\n              ls.setItem('ident', _token);\n            }\n\n            res.redirect(\"http://localhost:5000/adminPanel\");\n          }\n        });\n      }\n    });\n  });\n\n  app.post(\"/signup\", function (req, res) {\n    //config.client=req.body.from\n    if (_config2.default.client === undefined) _config2.default.client = \"IS\";\n    var flag = false;\n    var regexZaIme = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;\n    var regexZaEmail = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\n    var regexZaPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;\n    if (req.body.name === \"\" || req.body.email === \"\" || req.body.plainText === \"\") {\n      res.render(\"signup.ejs\", {\n        message: \"Please fill out all fields!\",\n        info: _config2.default.token,\n        client: _config2.default.client\n      });\n      flag = true;\n    } else if (regexZaIme.test(String(req.body.name)) == false) {\n      res.render(\"signup.ejs\", {\n        message: \"Name is not valid\",\n        info: _config2.default.token,\n        client: _config2.default.client\n      });\n      flag = true;\n    } else if (regexZaEmail.test(String(req.body.email).toLowerCase()) == false) {\n      res.render(\"signup.ejs\", {\n        message: \"Email is not valid\",\n        info: _config2.default.token,\n        client: _config2.default.client\n      });\n      flag = true;\n    } else if (regexZaPassword.test(String(req.body.plainText)) == false) {\n      flag = true;\n      res.render(\"signup.ejs\", {\n        message: \"Password must contain at least one uppercase letter, one number, one symbol, and must be longer than 8 characters\",\n        info: _config2.default.token,\n        client: _config2.default.client\n      });\n    }\n\n    if (!flag) {\n      _request2.default.post({\n        url: _config2.default.IdentityRoute + \"/api/users\",\n        body: req.body,\n        json: true\n      }, function (err, result) {\n        if (result.body.errmsg) {\n          res.render(\"signup.ejs\", {\n            message: \"Email already exists!\",\n            client: _config2.default.client\n          });\n        } else {\n          sendMail(result.body.email, \"Successful registration!\", \"You have successfully registered ! Please wait for your confirmation mail.\");\n\n          var whereToGo = void 0;\n          _request2.default.get(_config2.default.IdentityRoute + \"/api/clients/\", function (err, result) {\n            var clientsForRedirects = JSON.parse(result.body);\n\n            clientsForRedirects.forEach(function (item) {\n              if (item.name == _config2.default.client) {\n                whereToGo = item.redirect;\n              }\n            });\n            //res.redirect(whereToGo + '?token=' + config.token)\n            //console.log(whereToGo)\n            if (whereToGo == undefined) res.redirect(\"http://localhost:5000/\");else res.redirect(whereToGo);\n          });\n          // res.render(\"login.ejs\", {\n          //     message: \"Successful signup! Please login: \",\n          //     created: result.body.created\n          // });\n          //res.redirect('C:/Projects/TimeKeeper(5.3)/landingPage.html')\n        }\n      });\n    }\n  });\n\n  app.get(\"/signup\", function (req, res) {\n    _config2.default.client = req.query.client;\n    // console.log(config.client)\n    if (_config2.default.client === undefined) _config2.default.client = \"IS\";\n    res.render(\"signup.ejs\", { message: \"\", client: _config2.default.client });\n  });\n\n  app.get(\"/profile\", function (req, res) {\n    res.render(\"profile.ejs\", { message: \"\" });\n  });\n  //USERS\n  //#region\n  app.get(\"/adminUserAdd\", function (req, res) {\n    res.render(\"adminUserAdd.ejs\", { message: \"\" });\n  });\n\n  app.get(\"/users\", function (req, res) {\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/users\", function (err, result) {\n      res.render(\"users.ejs\", { users: JSON.parse(result.body) });\n    });\n  });\n\n  app.get(\"/adminUserView\", function (req, res) {\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/users\", function (err, result) {\n      res.render(\"adminUserView.ejs\", { users: JSON.parse(result.body) });\n    });\n  });\n\n  app.get(\"/adminEditUser/:id\", function (req, res) {\n    var id = req.params.id;\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/users/\" + id, function (err, result) {\n      var k = JSON.parse(result.body);\n      // console.log(k);\n      res.render(\"adminEditUser.ejs\", {\n        message: \"\",\n        user: { id: k._id, name: k.name, email: k.email }\n      });\n    });\n  });\n\n  app.get(\"/UnassignUserFromClient/:id\", function (req, res) {\n    var clientId = req.params.id;\n    var userId = req.query.user;\n    //  let accessId\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/users/\" + userId + \"/clients\", function (err, result) {\n      var foundUser = JSON.parse(result.body);\n      foundUser.clients.forEach(function (access) {\n        if (access.client._id == clientId) {\n          var accessId = access._id;\n\n          _request2.default.get(_config2.default.IdentityRoute + \"/api/users/\" + userId, function (err, result) {\n            foundUser = JSON.parse(result.body);\n\n            _request2.default.delete({\n              url: _config2.default.IdentityRoute + \"/api/access/\" + accessId,\n              json: true,\n              headers: { authorization: \"bearer \" + _config2.default.token }\n            }, function (err, result) {\n              res.redirect('/usersClients/' + userId);\n            });\n          });\n        }\n      });\n    });\n  });\n\n  app.get(\"/deleteUser/:id\", function (req, res) {\n    _request2.default.delete({\n      url: _config2.default.IdentityRoute + \"/api/users/\" + req.params.id,\n      json: true,\n      headers: { authorization: \"bearer \" + _config2.default.token }\n    }, function (err, result) {\n      //console.log(result.body);\n    });\n    res.redirect(\"/adminUserView\");\n  });\n\n  app.post(\"/adminEditUser\", function (req, res) {\n    //console.log(config.token)\n    _request2.default.put({\n      url: _config2.default.IdentityRoute + \"/api/users/\" + req.body.id,\n      headers: { authorization: \"bearer \" + _config2.default.token },\n      body: req.body,\n      json: true\n    }, function (err, result) {\n      try {\n        sendMail(result.body.email, \"Your account was edited!\", \"Your account with name \" + result.body.name + \" was edited.\\n                    Click this link to log in. \");\n      } catch (err) {\n        res.render(\"login.ejs\", { message: \"Sorry, there was a mistake\" });\n      }\n      res.redirect(\"/adminUserView\");\n    });\n  });\n  //#endregion\n  //CLIENTS\n  //#region\n  app.get(\"/editClient/:id\", function (req, res) {\n    var id = req.params.id;\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/clients/\" + id, function (err, result) {\n      var client = JSON.parse(result.body);\n      // console.log(client);\n      res.render(\"editClient.ejs\", {\n        message: \"\",\n        client: {\n          id: client._id,\n          name: client.name,\n          claims: client.claims,\n          secret: client.secret,\n          redirect: client.redirect\n        }\n      });\n    });\n  });\n\n  app.post(\"/editClient\", function (req, res) {\n    _request2.default.put({\n      url: _config2.default.IdentityRoute + \"/api/clients/\" + req.body.id,\n      body: req.body,\n      json: true\n    }, function (err, result) {\n      console.log(err);\n      res.redirect(\"/clients\");\n    });\n  });\n\n  // app.get('/editClient', (req, res) => { res.render('editClient.ejs', { message: '' }) })\n\n  app.get(\"/deleteClient/:id\", function (req, res) {\n    _request2.default.delete({\n      url: _config2.default.IdentityRoute + \"/api/clients/\" + req.params.id,\n      json: true,\n      headers: { authorization: \"bearer \" + _config2.default.token }\n    }, function (err, result) {\n      //console.log(result.body);\n    });\n    res.redirect(\"/clients\");\n  });\n\n  app.get(\"/deleteClient\", function (req, res) {\n    res.render(\"deleteClient.ejs\", { message: \"\" });\n  });\n\n  app.get(\"/clients\", function (req, res) {\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/clients\", function (err, result) {\n      res.render(\"clients.ejs\", { clients: JSON.parse(result.body) });\n    });\n  });\n\n  app.get(\"/AddAClient\", function (req, res) {\n    res.render(\"AddAClient.ejs\", { message: \"\" });\n  });\n\n  app.post(\"/AddAClient\", function (req, res) {\n    _request2.default.post({\n      url: _config2.default.IdentityRoute + \"/api/clients\",\n      body: req.body,\n      json: true\n    }, function (err, result) {\n      res.redirect(\"/clients\");\n    });\n  });\n\n  //#endregion\n\n  app.get(\"/assignments\", function (req, res) {\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/users\", function (err, result) {\n      var all_users = JSON.parse(result.body);\n      //console.log(all_users);\n      _request2.default.get(_config2.default.IdentityRoute + \"/api/clients\", function (err, result) {\n        res.render(\"assignments.ejs\", {\n          message: \"\",\n          users: all_users,\n          clients: JSON.parse(result.body)\n        });\n      });\n    });\n  });\n\n  app.get(\"/assignments/:id\", function (req, res) {\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/users/\" + req.params.id, function (err, result) {\n      var user = [JSON.parse(result.body)];\n      //console.log(user);\n      _request2.default.get(_config2.default.IdentityRoute + \"/api/clients\", function (err, result) {\n        res.render(\"assignments.ejs\", {\n          message: \"\",\n          users: user,\n          clients: JSON.parse(result.body)\n        });\n      });\n    });\n  });\n\n  app.get(\"/classignments/:id\", function (req, res) {\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/clients/\" + req.params.id, function (err, result) {\n      var client = [JSON.parse(result.body)];\n      //console.log(user);\n      _request2.default.get(_config2.default.IdentityRoute + \"/api/users\", function (err, result) {\n        res.render(\"assignments.ejs\", {\n          message: \"\",\n          users: JSON.parse(result.body),\n          clients: client\n        });\n      });\n    });\n  });\n\n  app.post(\"/assignments\", function (req, res) {\n    //req.body.scopes = { role: req.body.role, action: req.body.action, team: req.body.team };\n    // console.log(req.body)\n    var accId = void 0;\n    var userFound = void 0;\n    var userMail = void 0;\n    var clientName = void 0;\n    var roleOnTheClient = void 0;\n    _request2.default.get(\n    //user za mail\n    {\n      url: _config2.default.IdentityRoute + \"/api/users/\" + req.body.user,\n      json: true,\n      headers: { authorization: \"bearer \" + _config2.default.token }\n    }, function (err, result) {\n      userFound = result.body.name;\n      userMail = result.body.email;\n    });\n\n    _request2.default.get({\n      //client za mail\n      url: _config2.default.IdentityRoute + \"/api/clients/\" + req.body.client,\n      json: true,\n      headers: { authorization: \"bearer \" + _config2.default.token }\n    }, function (err, result) {\n      clientName = result.body.name;\n      //roleOnTheClient=result.body.scopes[0].role\n    });\n    req.body.scopes = { role: req.body.role, action: \"\", team: \"\" };\n    _request2.default.post({\n      url: _config2.default.IdentityRoute + \"/api/access\",\n      headers: { authorization: \"bearer \" + _config2.default.token },\n      body: req.body,\n      json: true\n    }, function (err, result) {\n      accId = result.body._id;\n      roleOnTheClient = req.body.role;\n      // console.log(\"asdasd\", roleOnTheClient);\n      _request2.default.put({\n        url: _config2.default.IdentityRoute + \"/api/users/\" + req.body.user,\n        headers: { authorization: \"bearer \" + _config2.default.token },\n        body: { clients: accId },\n        json: true\n      }, function (err, result) {});\n\n      _request2.default.put({\n        url: _config2.default.IdentityRoute + \"/api/clients/\" + req.body.client,\n        headers: { authorization: \"bearer \" + _config2.default.token },\n        body: { users: accId },\n        json: true\n      }, function (err, result) {\n        sendMail(userMail, \"Your account is activated, \" + userFound + \"!\", \"Your account was granted access to \" + clientName + \", and your role is \" + roleOnTheClient);\n        res.redirect(\"/adminPanel\");\n      });\n    });\n  });\n\n  app.get(\"/adminPanel\", function (req, res) {\n    if (_lodash2.default.isEmpty(_config2.default.currentUser)) res.redirect(\"/login\");else {\n      res.render(\"adminPanel.ejs\", {\n        message: \"\",\n        info: { currentUser: _config2.default.currentUser //dalje igranje sa logovanjem, clientId problem, itd.\n        } });\n    }\n  });\n\n  app.get(\"/adminEnableUser/:id\", function (req, res) {\n    var id = req.params.id;\n    var enb = true;\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/users/\" + id, function (err, result) {\n      var user = JSON.parse(result.body);\n\n      if (user.enabled === true) enb = false;\n      _request2.default.put({\n        url: _config2.default.IdentityRoute + \"/api/users/\" + id,\n        headers: { authorization: \"bearer \" + _config2.default.token },\n        body: { enabled: enb },\n        json: true\n      }, function (err, result) {\n        res.redirect(\"/adminUserView\");\n      });\n    });\n  });\n\n  app.get(\"/userSelfEdit/:id\", function (req, res) {\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/users/\" + _config2.default.currentUser._id, function (err, result) {\n      var k = JSON.parse(result.body);\n      //console.log(k)\n      res.render(\"userSelfEdit.ejs\", {\n        message: \"\",\n        user: { id: k._id, name: k.name, email: k.email }\n      });\n    });\n  });\n\n  app.post(\"/userSelfEdit\", function (req, res) {\n    //console.log(config.token)\n    _request2.default.put({\n      url: _config2.default.IdentityRoute + \"/api/users/\" + _config2.default.currentUser._id,\n      headers: { authorization: \"bearer \" + _config2.default.token },\n      body: req.body,\n      json: true\n    }, function (err, result) {\n      res.redirect(\"/adminPanel\");\n    });\n  });\n\n  app.post(\"/adminUserAdd\", function (req, res) {\n    var flag = false;\n\n    var regexZaIme = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;\n    var regexZaEmail = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\n    var regexZaPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;\n\n    if (req.body.name === \"\" || req.body.email === \"\" || req.body.plainText === \"\") {\n      res.render(\"signup.ejs\", {\n        message: \"Please fill out all fields\",\n        info: _config2.default.token\n      });\n      flag = true;\n    } else if (regexZaIme.test(String(req.body.name)) == false) {\n      res.render(\"signup.ejs\", {\n        message: \"Name is not valid\",\n        info: _config2.default.token\n      });\n      flag = true;\n    } else if (regexZaEmail.test(String(req.body.email).toLowerCase()) == false) {\n      res.render(\"signup.ejs\", {\n        message: \"Email not valid\",\n        info: _config2.default.token\n      });\n      flag = true;\n    } else if (regexZaPassword.test(String(req.body.plainText)) == false) {\n      flag = true;\n      res.render(\"signup.ejs\", {\n        message: \"Password must contain at least one uppercase letter, one number, one symbol, and must be longer than 8 characters\",\n        info: _config2.default.token\n      });\n    }\n    if (!flag) {\n      _request2.default.post({\n        url: _config2.default.IdentityRoute + \"/api/users\",\n        body: req.body,\n        json: true\n      }, function (err, result) {\n        if (result.body.errmsg) {\n          res.render(\"signup.ejs\", { message: \"Error!\" });\n        } else res.redirect(\"/adminUserView\");\n      });\n    }\n  });\n\n  app.get(\"/adminEnableClient/:id\", function (req, res) {\n    var id = req.params.id;\n    var enb = true;\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/clients/\" + id, function (err, result) {\n      var user = JSON.parse(result.body);\n\n      if (user.enabled === true) enb = false;\n      _request2.default.put({\n        url: _config2.default.IdentityRoute + \"/api/clients/\" + id,\n        headers: { authorization: \"bearer \" + _config2.default.token },\n        body: { enabled: enb },\n        json: true\n      }, function (err, result) {\n        res.redirect(\"/clients\");\n      });\n    });\n  });\n\n  app.get(\"/usersClients/:id\", function (req, res) {\n    //let user;\n    // request.get(//user za mail\n    //     {\n    //         url: config.IdentityRoute + \"/api/users/\" + req.params.id,\n    //         json: true,\n    //         headers: { authorization: \"bearer \" + config.token }\n    //     },\n    //     (err, result) => {\n    //         user = JSON.parse(result.body);\n    //     }\n    // )\n    // console.log(user._id)\n    // request.get(\n    //     config.IdentityRoute + \"/api/users/\" + req.params.id,\n    //     (err, result) => {\n    //\n    //     }\n    // );\n\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/users/\" + req.params.id + \"/clients\", function (err, result) {\n      var sendResult = JSON.parse(result.body);\n      res.render(\"usersClients.ejs\", {\n        props: sendResult.clients,\n        user: req.params.id\n      });\n    });\n  });\n\n  app.get(\"/clientsUsers/:id\", function (req, res) {\n    _request2.default.get(_config2.default.IdentityRoute + \"/api/clients/\" + req.params.id + \"/users\", function (err, result) {\n      var sendResult = JSON.parse(result.body);\n\n      res.render(\"clientsUsers.ejs\", { props: sendResult.users });\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/routes/web.routes.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "browserify-cipher":
/*!************************************!*\
  !*** external "browserify-cipher" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"browserify-cipher\");\n\n//# sourceURL=webpack:///external_%22browserify-cipher%22?");

/***/ }),

/***/ "browserify-sign":
/*!**********************************!*\
  !*** external "browserify-sign" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"browserify-sign\");\n\n//# sourceURL=webpack:///external_%22browserify-sign%22?");

/***/ }),

/***/ "browserify-sign/algos":
/*!****************************************!*\
  !*** external "browserify-sign/algos" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"browserify-sign/algos\");\n\n//# sourceURL=webpack:///external_%22browserify-sign/algos%22?");

/***/ }),

/***/ "create-ecdh":
/*!******************************!*\
  !*** external "create-ecdh" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"create-ecdh\");\n\n//# sourceURL=webpack:///external_%22create-ecdh%22?");

/***/ }),

/***/ "create-hash":
/*!******************************!*\
  !*** external "create-hash" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"create-hash\");\n\n//# sourceURL=webpack:///external_%22create-hash%22?");

/***/ }),

/***/ "create-hmac":
/*!******************************!*\
  !*** external "create-hmac" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"create-hmac\");\n\n//# sourceURL=webpack:///external_%22create-hmac%22?");

/***/ }),

/***/ "diffie-hellman":
/*!*********************************!*\
  !*** external "diffie-hellman" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"diffie-hellman\");\n\n//# sourceURL=webpack:///external_%22diffie-hellman%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "logform":
/*!**************************!*\
  !*** external "logform" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"logform\");\n\n//# sourceURL=webpack:///external_%22logform%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "node-localstorage":
/*!************************************!*\
  !*** external "node-localstorage" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-localstorage\");\n\n//# sourceURL=webpack:///external_%22node-localstorage%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "pbkdf2":
/*!*************************!*\
  !*** external "pbkdf2" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pbkdf2\");\n\n//# sourceURL=webpack:///external_%22pbkdf2%22?");

/***/ }),

/***/ "public-encrypt":
/*!*********************************!*\
  !*** external "public-encrypt" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"public-encrypt\");\n\n//# sourceURL=webpack:///external_%22public-encrypt%22?");

/***/ }),

/***/ "randombytes":
/*!******************************!*\
  !*** external "randombytes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"randombytes\");\n\n//# sourceURL=webpack:///external_%22randombytes%22?");

/***/ }),

/***/ "randomfill":
/*!*****************************!*\
  !*** external "randomfill" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"randomfill\");\n\n//# sourceURL=webpack:///external_%22randomfill%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack:///external_%22request%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });