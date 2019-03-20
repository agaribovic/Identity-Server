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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    port: 5000,\n    secret: 'P0p0k4t3p3t1',\n    mongo: 'mongodb://localhost:27017/TimeKeeperIdentity',\n    //mongo:'mongodb://mongo:27017/identity',\n    token: '',\n    currentUser: {}\n};\n\n//# sourceURL=webpack:///./config.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _client = __webpack_require__(/*! ../models/client.model */ \"./src/models/client.model.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _access = __webpack_require__(/*! ../models/access.model */ \"./src/models/access.model.js\");\n\nvar _access2 = _interopRequireDefault(_access);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res) {\n    var access = new _access2.default(req.body);\n    access.save(function (err, result) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            addConcerns(result);\n            res.status(200).send(result);\n        }\n    });\n};\n\nvar addConcerns = function addConcerns(access) {\n    _user2.default.findById(access.user, function (err, user) {\n        if (!err) {\n            user.clients.push(access._id);\n            user.save(function (err) {\n                if (!err) {\n                    _client2.default.findById(access.client, function (err, client) {\n                        if (!err) {\n                            client.users.push(access._id);\n                            client.save();\n                        }\n                    });\n                }\n            });\n        }\n    });\n};\n\nvar list = function list(req, res) {\n    _access2.default.find().populate('client', 'clientId name').populate('user', 'name').exec(function (err, result) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            res.status(200).send(result);\n        }\n    });\n};\n\nvar getId = function getId(req, res, next, id) {\n    _access2.default.findById(id).exec(function (err, data) {\n        if (err || !data) res.status(400).send(err);\n        req.profile = data;\n        next();\n    });\n};\n\nvar read = function read(req, res) {\n    return res.send(req.profile);\n};\n\nvar update = function update(req, res, next) {\n    var access = req.profile;\n    access = _lodash2.default.extend(access, req.body);\n    access.save(function (err) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            res.send(access);\n        }\n    });\n};\n\nvar remove = function remove(req, res, next) {\n    var access = req.profile;\n    access.remove(function (err, deletedAccess) {\n        if (err) res.status(400).send(err);\n        res.send(deletedAccess);\n    });\n};\n\nexports.default = { list: list, create: create, getId: getId, read: read, update: update, remove: remove };\n\n//# sourceURL=webpack:///./src/controllers/access.controller.js?");

/***/ }),

/***/ "./src/controllers/auth.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/auth.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _base = __webpack_require__(/*! ../helpers/base64 */ \"./src/helpers/base64.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar login = function login(req, res) {\n  var username = req.body.username;\n  var password = req.body.password;\n  _user2.default.findOne({ email: username }, function (err, data) {\n    if (err || !data) {\n      res.status(401).send(\"User does not exists\");\n    } else {\n      if (data.authenticate(password)) {\n        _config2.default.currentUser = {\n          _id: data._id,\n          sub: data.email,\n          cli: \"TimeKeeper\",\n          role: \"user\",\n          name: data.name,\n          exp: new Date().getTime() / 1000 + 3600\n        };\n        var token = _jsonwebtoken2.default.sign(_config2.default.currentUser, _config2.default.secret);\n        res.status(200).send(token);\n      } else {\n        res.status(401).send(\"User does not exists\");\n      }\n    }\n  });\n};\n\nvar signed = function signed(req, res, next) {\n  var token = req.headers.authorization;\n  console.log(\"token: \" + token);\n  if (token === undefined) {\n    res.status(401).send(\"Unathorized access\");\n  } else {\n    _jsonwebtoken2.default.verify(token.substring(7), _config2.default.secret, function (err, result) {\n      if (err) {\n        res.status(401).send(\"Invalid token\");\n      } else {\n        _config2.default.currentUser = result;\n        var exp = result.exp - new Date().getTime() / 1000;\n        next();\n      }\n    });\n  }\n};\n\nexports.default = { login: login, signed: signed };\n\n//# sourceURL=webpack:///./src/controllers/auth.controller.js?");

/***/ }),

/***/ "./src/controllers/client.controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/client.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _client = __webpack_require__(/*! ../models/client.model */ \"./src/models/client.model.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _base = __webpack_require__(/*! ../helpers/base64 */ \"./src/helpers/base64.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res) {\n    var client = new _client2.default(req.body);\n    client.secret = _base2.default.encode(client.secret);\n    console.log(client);\n    client.stringCreated = client.created.toString().substring(3, 15);\n    console.log(client);\n    // client.created=client.created.toString()\n    // console.log(client.created.toString())\n    // console.log(client)\n    client.save(function (err, result) {\n        if (err) {\n            return res.status(400).send(err);\n        } else {\n            return res.status(200).send(result);\n        }\n    });\n};\n\nvar list = function list(req, res) {\n    _client2.default.find().exec(function (err, result) {\n        if (err) {\n            return res.status(400).send(err);\n        } else {\n            return res.status(200).send(result);\n        }\n    });\n};\n\nvar clientById = function clientById(req, res, next, id) {\n    _client2.default.findById(id).exec(function (err, data) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            req.profile = data;\n            next();\n        }\n    });\n};\n\nvar read = function read(req, res) {\n    return res.json(req.profile);\n};\n\nvar update = function update(req, res) {\n    var client = req.profile;\n    client = _lodash2.default.extend(client, req.body);\n    client.save(function (err) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            res.send(client);\n        }\n    });\n};\n\nvar remove = function remove(req, res) {\n    var client = req.profile;\n    client.remove(function (err, deletedClient) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            res.send(deletedClient);\n        }\n    });\n};\n\nexports.default = { list: list, create: create, clientById: clientById, read: read, update: update, remove: remove };\n\n//# sourceURL=webpack:///./src/controllers/client.controller.js?");

/***/ }),

/***/ "./src/controllers/user.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/user.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _access = __webpack_require__(/*! ../models/access.model */ \"./src/models/access.model.js\");\n\nvar _access2 = _interopRequireDefault(_access);\n\nvar _logger = __webpack_require__(/*! ../helpers/logger */ \"./src/helpers/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res) {\n    var user = new _user2.default(req.body);\n    user.save(function (err, result) {\n        if (err) {\n            _logger2.default.error(err.errmsg);\n            res.status(400).send(err);\n        } else {\n            res.status(200).send(result);\n        }\n    });\n};\n\nvar list = function list(req, res) {\n    _user2.default.find().populate('clients').exec(function (err, result) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            res.status(200).send(result);\n        }\n    });\n};\n\nvar getId = function getId(req, res, next, id) {\n    _user2.default.findById(id).exec(function (err, data) {\n        if (err || !data) res.status(400).send(err);\n        req.profile = data;\n        next();\n    });\n};\n\nvar read = function read(req, res) {\n    req.profile.password = undefined;\n    req.profile.salt = undefined;\n    return res.send(req.profile);\n};\n\nvar update = function update(req, res) {\n    var user = req.profile;\n    user = _lodash2.default.extend(user, req.body);\n    user.save(function (err) {\n        if (err) {\n            res.status(400).send(err);\n        } else {\n            user.password = undefined;\n            user.salt = undefined;\n            res.send(user);\n        }\n    });\n};\n\nvar remove = function remove(req, res) {\n    var user = req.profile;\n    //console.log(\"DOSOO DO REMOVEEAAAAA\")\n    user.remove(function (err, deletedUser) {\n        if (err) res.status(400).send(err);\n        //deletedUser.password = undefined\n        deletedUser.salt = undefined;\n        res.send(deletedUser);\n    });\n};\n\nvar clients = function clients(req, res) {\n    var result = {\n        user: {\n            name: req.profile.name,\n            email: req.profile.email,\n            enabled: req.profile.enabled\n        },\n        clients: []\n    };\n    _access2.default.find({ user: req.profile._id }).select('scopes').populate('client', 'clientId name').exec(function (err, data) {\n        if (!err) result.clients = data;\n        res.status(200).send(result);\n    });\n};\n\nexports.default = { list: list, create: create, getId: getId, read: read, update: update, remove: remove, clients: clients };\n\n//# sourceURL=webpack:///./src/controllers/user.controller.js?");

/***/ }),

/***/ "./src/express.js":
/*!************************!*\
  !*** ./src/express.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _user = __webpack_require__(/*! ./routes/user.router */ \"./src/routes/user.router.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _client = __webpack_require__(/*! ./routes/client.router */ \"./src/routes/client.router.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _access = __webpack_require__(/*! ./routes/access.router */ \"./src/routes/access.router.js\");\n\nvar _access2 = _interopRequireDefault(_access);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.router */ \"./src/routes/auth.router.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _web = __webpack_require__(/*! ./routes/web.routes */ \"./src/routes/web.routes.js\");\n\nvar _web2 = _interopRequireDefault(_web);\n\nvar _logger = __webpack_require__(/*! ./helpers/logger */ \"./src/helpers/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar logStart = function logStart(req, res, next) {\n    var prefix = parseInt(res.statusCode / 100, 10);\n    var message = 'Method: ' + req.method + ', Url : ' + req.originalUrl + ', Response: ' + res.status;\n    if (prefix <= 2) {\n        _logger2.default.info(message);\n    } else {\n        _logger2.default.error(message);\n    }\n    next();\n};\nvar app = (0, _express2.default)();\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use('/', _user2.default);\napp.use('/', _client2.default);\napp.use('/', _access2.default);\napp.use('/', _auth2.default);\napp.use(_express2.default.static(__dirname + 'views'));\napp.use('/', logStart);\n(0, _web2.default)(app);\n\nexports.default = app;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/express.js?");

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
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar _config = __webpack_require__(/*! ../config */ \"./config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./src/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.set('useCreateIndex', true);\n_mongoose2.default.set('useNewUrlParser', true);\n_mongoose2.default.connect(_config2.default.mongo);\n_mongoose2.default.connection.on('error', function () {\n    console.log('GRESKA');\n});\n\n_express2.default.listen(_config2.default.port, function (err) {\n    if (err) console.log(err);\n    console.log('Server is running on port', _config2.default.port);\n});\nmodule.exports = _express2.default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ClientSchema = _mongoose2.default.Schema({\n    clientId: String,\n    name: String,\n    secret: String,\n    enabled: Boolean,\n    redirect: String,\n    created: { type: Date, default: Date.now },\n    stringCreated: String,\n    users: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Access' }]\n});\n\nexports.default = _mongoose2.default.model('Client', ClientSchema);\n\n//# sourceURL=webpack:///./src/models/client.model.js?");

/***/ }),

/***/ "./src/models/user.model.js":
/*!**********************************!*\
  !*** ./src/models/user.model.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"./node_modules/crypto-browserify/index.js\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar UserSchema = new _mongoose2.default.Schema({\n    name: { type: String, trim: true, required: 'Name is required!' },\n    email: {\n        type: String, trim: true, required: 'Email is required!',\n        unique: 'User already exists', match: [/.+\\@.+\\..+/, 'Invalid email']\n    },\n    password: { type: String, required: true },\n    salt: String,\n    enabled: { type: Boolean, default: false },\n    created: { type: Date, default: Date.now },\n    clients: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Access' }]\n});\n\nUserSchema.virtual('plainText').set(function (plainText) {\n    this._password = plainText;\n    this.salt = this.makeSalt();\n    this.password = this.encryptPassword(plainText);\n}).get(function () {\n    return this._password;\n});\n\nUserSchema.methods = {\n    makeSalt: function makeSalt() {\n        return Math.round(new Date().valueOf() * Math.random()) + '';\n    },\n\n    encryptPassword: function encryptPassword(plainText) {\n        if (!plainText) return '';\n        try {\n            return _crypto2.default.createHmac('sha1', this.salt).update(plainText).digest('hex');\n        } catch (err) {\n            return '';\n        }\n    },\n\n    authenticate: function authenticate(plainText) {\n        return this.password === this.encryptPassword(plainText);\n    }\n};\n\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/models/user.model.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./src/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/auth/login').post(_auth2.default.login);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/auth.router.js?");

/***/ }),

/***/ "./src/routes/client.router.js":
/*!*************************************!*\
  !*** ./src/routes/client.router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _client = __webpack_require__(/*! ../controllers/client.controller */ \"./src/controllers/client.controller.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./src/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/clients').get(_client2.default.list).post(_client2.default.create);\n\nrouter.route('/api/clients/:clientId').get(_client2.default.read).put(_client2.default.update).delete(_client2.default.remove);\n\nrouter.param('clientId', _client2.default.clientById);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/client.router.js?");

/***/ }),

/***/ "./src/routes/user.router.js":
/*!***********************************!*\
  !*** ./src/routes/user.router.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./src/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./src/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/users').get(_user2.default.list).post(_user2.default.create);\n\nrouter.route('/api/users/:id').get(_user2.default.read).put(_user2.default.update).delete(_user2.default.remove);\n\nrouter.route('/api/users/:id/clients').get(_user2.default.clients);\n\nrouter.param('id', _user2.default.getId);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/routes/user.router.js?");

/***/ }),

/***/ "./src/routes/web.routes.js":
/*!**********************************!*\
  !*** ./src/routes/web.routes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _request = __webpack_require__(/*! request */ \"request\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//PONESI U HEDERU I TOKEN\nmodule.exports = function (app) {\n\n    app.get('/', function (req, res) {\n        res.render('login.ejs', { message: '', info: _config2.default.token });\n    });\n\n    app.get('/login', function (req, res) {\n        res.render('login.ejs', { message: '', info: _config2.default.token });\n    });\n\n    app.get('/index', function (req, res) {\n        res.render('index.ejs', { message: '' });\n    });\n\n    app.get('/profile', function (req, res) {\n        res.render('profile.ejs', { message: '' });\n    });\n\n    app.get('/signup', function (req, res) {\n        res.render('signup.ejs', { message: '', user: { id: 55, name: 'John Doe' } });\n    });\n\n    app.get('/adminUserAdd', function (req, res) {\n        res.render('adminUserAdd.ejs', { message: '', user: { id: 55, name: 'John Doe' } });\n    });\n\n    app.get('/users', function (req, res) {\n        _request2.default.get('http://localhost:5000/api/users', function (err, result) {\n            res.render('users.ejs', { users: JSON.parse(result.body) });\n        });\n    });\n\n    app.get('/adminUserView', function (req, res) {\n        _request2.default.get('http://localhost:5000/api/users', function (err, result) {\n            res.render('adminUserView.ejs', { users: JSON.parse(result.body) });\n        });\n    });\n\n    app.get('/deleteUser/:id', function (req, res) {\n        _request2.default.delete({\n            url: 'http://localhost:5000/api/users/' + req.params.id,\n            json: true,\n            headers: { authorization: \"bearer \" + _config2.default.token }\n        }, function (err, result) {\n            console.log(result.body);\n        });\n        res.redirect('/adminUserView');\n    });\n\n    app.post('/login', function (req, res) {\n\n        _request2.default.post({\n            url: 'http://localhost:5000/auth/login',\n            body: req.body,\n            json: true\n        }, function (err, result) {\n            if (result.statusCode == 401) {\n                res.render('login.ejs', { message: 'User does not exist', info: _config2.default.token });\n            } else {\n                _config2.default.token = result.body;\n                res.redirect('/adminPanel');\n            }\n            console.log(result.statusCode);\n        });\n    });\n\n    app.post('/signup', function (req, res) {\n        _request2.default.post({\n            url: 'http://localhost:5000/api/users',\n            body: req.body,\n            json: true\n        }, function (err, result) {\n            console.log(result.statusCode, result.body);\n        });\n        res.redirect('/login');\n    });\n\n    app.get('/adminEditUser/:id', function (req, res) {\n        var id = req.params.id;\n        _request2.default.get('http://localhost:5000/api/users/' + id, function (err, result) {\n            var k = JSON.parse(result.body);\n            console.log(k);\n            res.render('adminEditUser.ejs', { message: '', user: { id: k._id, name: k.name, email: k.email } });\n        });\n    });\n\n    app.post('/adminEditUser', function (req, res) {\n        //console.log(config.token)\n        _request2.default.put({\n            url: 'http://localhost:5000/api/users/' + req.body.id,\n            headers: { authorization: \"bearer \" + _config2.default.token },\n            body: req.body,\n            json: true\n        }, function (err, result) {\n            res.redirect('/adminUserView');\n        });\n    });\n\n    //ZAKINE\n    app.get('/editClient/:id', function (req, res) {\n        var id = req.params.id;\n        _request2.default.get('http://localhost:5000/api/clients/' + id, function (err, result) {\n            var client = JSON.parse(result.body);\n            console.log(client);\n            res.render('editClient.ejs', { message: '', client: { id: client._id, name: client.name, claims: client.claims, secret: client.secret, redirect: client.redirect } });\n        });\n    });\n\n    app.post('/editClient', function (req, res) {\n        _request2.default.put({\n            url: 'http://localhost:5000/api/clients/' + req.body.id,\n            body: req.body,\n            json: true\n        }, function (err, result) {\n            console.log(err);\n            res.redirect('/clients');\n        });\n    });\n\n    app.get('/editClient', function (req, res) {\n        res.render('editClient.ejs', { message: '' });\n    });\n\n    app.get('/deleteClient/:id', function (req, res) {\n        _request2.default.delete({\n            url: 'http://localhost:5000/api/clients/' + req.params.id,\n            json: true,\n            headers: { authorization: \"bearer \" + _config2.default.token }\n        }, function (err, result) {\n            console.log(result.body);\n        });\n        res.redirect('/clients');\n    });\n\n    app.get('/deleteClient', function (req, res) {\n        res.render('deleteClient.ejs', { message: '' });\n    });\n\n    app.get('/clients', function (req, res) {\n        _request2.default.get('http://localhost:5000/api/clients', function (err, result) {\n            res.render('clients.ejs', { clients: JSON.parse(result.body) });\n        });\n    });\n\n    app.get('/AddAClient', function (req, res) {\n        res.render('AddAClient.ejs', { message: '' });\n    });\n\n    app.post('/AddAClient', function (req, res) {\n        _request2.default.post({\n            url: 'http://localhost:5000/api/clients',\n            body: req.body,\n            json: true\n        }, function (err, result) {\n            //console.log(result.statusCode, result.body)\n        });\n        res.redirect('/clients');\n    });\n\n    app.get('/assignments', function (req, res) {\n        _request2.default.get('http://localhost:5000/api/users', function (err, result) {\n            var all_users = JSON.parse(result.body);\n            _request2.default.get('http://localhost:5000/api/clients', function (err, result) {\n                res.render('assignments.ejs', { message: '', users: all_users, clients: JSON.parse(result.body) });\n            });\n        });\n    });\n\n    app.post('/assignments', function (req, res) {\n        var accId = void 0;\n\n        req.body.scopes = { role: req.body.scopes, action: '', team: '' };\n\n        _request2.default.post({\n            url: 'http://localhost:5000/api/access',\n            headers: { authorization: \"bearer \" + _config2.default.token },\n            body: req.body,\n            json: true\n        }, function (err, result) {\n            accId = result.body._id;\n\n            _request2.default.put({\n                url: 'http://localhost:5000/api/users/' + req.body.user,\n                headers: { authorization: \"bearer \" + _config2.default.token },\n                body: { clients: accId },\n                json: true\n            }, function (err, result) {});\n\n            _request2.default.put({\n                url: 'http://localhost:5000/api/clients/' + req.body.client,\n                headers: { authorization: \"bearer \" + _config2.default.token },\n                body: { users: accId },\n                json: true\n            }, function (err, result) {\n                res.redirect('/index');\n            });\n        });\n    });\n    app.get('/adminPanel', function (req, res) {\n        console.log(_config2.default.currentUser);\n        res.render('adminPanel.ejs', { message: '', info: { currentUser: _config2.default.currentUser } });\n    });\n\n    app.get('/adminEnableUser/:id', function (req, res) {\n        var id = req.params.id;\n        var enb = true;\n        _request2.default.get('http://localhost:5000/api/users/' + id, function (err, result) {\n            var user = JSON.parse(result.body);\n            console.log(user);\n            if (user.enabled === true) enb = false;\n            _request2.default.put({\n                url: 'http://localhost:5000/api/users/' + id,\n                headers: { authorization: \"bearer \" + _config2.default.token },\n                body: { enabled: enb },\n                json: true\n            }, function (err, result) {\n                console.log(result.body);\n                res.redirect('/adminUserView');\n            });\n        });\n    });\n};\n\n//# sourceURL=webpack:///./src/routes/web.routes.js?");

/***/ }),

/***/ "./test sync recursive .js$":
/*!************************!*\
  !*** ./test sync .js$ ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./index.js\": \"./test/index.js\",\n\t\"./users.test.js\": \"./test/users.test.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./test sync recursive .js$\";\n\n//# sourceURL=webpack:///./test_sync_.js$?");

/***/ }),

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar context = __webpack_require__(\"./test sync recursive .js$\");\ncontext.keys().forEach(context);\nmodule.exports = context;\n\n//# sourceURL=webpack:///./test/index.js?");

/***/ }),

/***/ "./test/users.test.js":
/*!****************************!*\
  !*** ./test/users.test.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _index = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar chai = __webpack_require__(/*! chai */ \"chai\");\nchai.use(__webpack_require__(/*! chai-http */ \"chai-http\"));\nchai.should();\n\n\ndescribe('#users', function () {\n\n   describe('/GET users', function () {\n      this.timeout(5000);\n      it('should return 200', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n         var result;\n         return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n               switch (_context.prev = _context.next) {\n                  case 0:\n                     _context.next = 2;\n                     return chai.request(_index2.default).get('/api/users');\n\n                  case 2:\n                     result = _context.sent;\n\n                     console.log(result.status);\n                     result.should.have.status(200);\n\n                  case 5:\n                  case 'end':\n                     return _context.stop();\n               }\n            }\n         }, _callee, this);\n      })));\n   });\n});\n\n//# sourceURL=webpack:///./test/users.test.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi babel-polyfill ./test/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! C:\\GitFolder\\test\\index.js */\"./test/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./test/index.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

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

/***/ "chai":
/*!***********************!*\
  !*** external "chai" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chai\");\n\n//# sourceURL=webpack:///external_%22chai%22?");

/***/ }),

/***/ "chai-http":
/*!****************************!*\
  !*** external "chai-http" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chai-http\");\n\n//# sourceURL=webpack:///external_%22chai-http%22?");

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