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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./recources/js/App.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./recources/js/App.ts":
/*!*****************************!*\
  !*** ./recources/js/App.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Game_1 = __webpack_require__(/*! ./game/Game */ \"./recources/js/game/Game.ts\");\r\nwindow.onload = function () {\r\n    var screen = document.querySelector('#screen');\r\n    var ctx = screen.getContext(\"2d\");\r\n    var game = new Game_1.default(screen, ctx);\r\n    game.start();\r\n};\r\n\n\n//# sourceURL=webpack:///./recources/js/App.ts?");

/***/ }),

/***/ "./recources/js/game/Game.ts":
/*!***********************************!*\
  !*** ./recources/js/game/Game.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Paddle_1 = __webpack_require__(/*! ./models/Paddle */ \"./recources/js/game/models/Paddle.ts\");\r\nvar Block_1 = __webpack_require__(/*! ./models/Block */ \"./recources/js/game/models/Block.ts\");\r\nvar Ball_1 = __webpack_require__(/*! ./models/Ball */ \"./recources/js/game/models/Ball.ts\");\r\nvar Particle_1 = __webpack_require__(/*! ./animate/Particle */ \"./recources/js/game/animate/Particle.ts\");\r\nvar Game = (function () {\r\n    function Game(_screen, _ctx) {\r\n        this._screen = _screen;\r\n        this._ctx = _ctx;\r\n        this._gameObjects = [];\r\n        this._animateObject = [];\r\n        this._gameClasses = [];\r\n        this._gameClasses.push({ paddle: Paddle_1.default });\r\n        this._gameClasses.push({ block: Block_1.default });\r\n        this._gameClasses.push({ ball: Ball_1.default });\r\n        this.populate();\r\n        console.log(this);\r\n        for (var _i = 0, _a = this._gameObjects; _i < _a.length; _i++) {\r\n            var obj = _a[_i];\r\n            console.log(obj);\r\n        }\r\n    }\r\n    Game.prototype.start = function () {\r\n        var _this = this;\r\n        setInterval(function () {\r\n            _this._ctx.clearRect(0, 0, _this._screen.width, _this._screen.height);\r\n            for (var index in _this._gameObjects) {\r\n                _this._gameObjects[index].update();\r\n            }\r\n            for (var index in _this._animateObject) {\r\n                _this._animateObject[index].update();\r\n            }\r\n        });\r\n    };\r\n    Game.prototype.populate = function () {\r\n        this.addGameObject('paddle', { game: this, color: 'blue' });\r\n        this.addGameObject('ball', { game: this, color: 'lightgreen' });\r\n        for (var i = 0; i < 3; i++) {\r\n            for (var j = 0; j < 5; j++) {\r\n                this.addGameObject('block', { game: this, x: j * (100 + 30) + 25, y: (10 + 50) * i });\r\n            }\r\n        }\r\n    };\r\n    Game.prototype.addGameObject = function (name, param) {\r\n        var className;\r\n        for (var _i = 0, _a = this._gameClasses; _i < _a.length; _i++) {\r\n            var objectClass = _a[_i];\r\n            className = objectClass[name];\r\n            if (!!className) {\r\n                this._gameObjects.push(new className(param));\r\n                break;\r\n            }\r\n        }\r\n    };\r\n    Game.prototype.removeGameObject = function (obj) {\r\n        for (var index in this._gameObjects) {\r\n            if (this._gameObjects[index] === obj) {\r\n                delete this._gameObjects[index];\r\n                break;\r\n            }\r\n        }\r\n    };\r\n    Game.prototype.addAnimateObject = function (param) {\r\n        this._animateObject.push(new Particle_1.default(param));\r\n    };\r\n    Game.prototype.removeAnimateObject = function (particle) {\r\n        for (var index in this._animateObject) {\r\n            if (this._animateObject[index] === particle) {\r\n                delete this._animateObject[index];\r\n                break;\r\n            }\r\n        }\r\n    };\r\n    Object.defineProperty(Game.prototype, \"screen\", {\r\n        get: function () { return this._screen; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Game.prototype, \"ctx\", {\r\n        get: function () { return this._ctx; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Game.prototype, \"gameObjects\", {\r\n        get: function () { return this._gameObjects; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Game;\r\n}());\r\nexports.default = Game;\r\n\n\n//# sourceURL=webpack:///./recources/js/game/Game.ts?");

/***/ }),

/***/ "./recources/js/game/GameObject.ts":
/*!*****************************************!*\
  !*** ./recources/js/game/GameObject.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar GameObject = (function () {\r\n    function GameObject() {\r\n    }\r\n    GameObject.prototype.isCollide = function (obj) {\r\n        return (obj.x + obj.width >= this.x && obj.x <= this.x\r\n            &&\r\n                obj.y + obj.height >= this.y && obj.y <= this.y);\r\n    };\r\n    Object.defineProperty(GameObject.prototype, \"width\", {\r\n        get: function () { return this._width; },\r\n        set: function (value) { this._width = value; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"height\", {\r\n        get: function () { return this._height; },\r\n        set: function (value) { this._height = value; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"x\", {\r\n        get: function () { return this._x; },\r\n        set: function (x) { this._x = x; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"y\", {\r\n        get: function () { return this._y; },\r\n        set: function (y) { this._y = y; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"tag\", {\r\n        get: function () { return this._tag; },\r\n        set: function (tag) { this._tag = tag; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"color\", {\r\n        get: function () { return this._color; },\r\n        set: function (color) { this._color = color; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"game\", {\r\n        get: function () { return this._game; },\r\n        set: function (game) { this._game = game; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return GameObject;\r\n}());\r\nexports.default = GameObject;\r\n\n\n//# sourceURL=webpack:///./recources/js/game/GameObject.ts?");

/***/ }),

/***/ "./recources/js/game/animate/Particle.ts":
/*!***********************************************!*\
  !*** ./recources/js/game/animate/Particle.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Particle = (function () {\r\n    function Particle(_a) {\r\n        var game = _a.game, startPos = _a.startPos, endPos = _a.endPos, color = _a.color, width = _a.width, height = _a.height, caller = _a.caller;\r\n        this._startPos = { x: undefined, y: undefined };\r\n        this._endPos = { x: undefined, y: undefined };\r\n        this._alpha = 1;\r\n        this._teller = 0;\r\n        this._startPos = startPos;\r\n        this._endPos = endPos;\r\n        this._color = color;\r\n        this._width = width;\r\n        this._height = height;\r\n        this._game = game;\r\n        this._x = this.startPos.x;\r\n        this._y = this.startPos.y;\r\n        this._caller = caller;\r\n        this._xSwerve = Math.floor((Math.random() * 5) + 1) / 100;\r\n        this._ySwerve = Math.floor((Math.random() * 5) + 1) / 100;\r\n    }\r\n    Particle.prototype.update = function () {\r\n        this.draw();\r\n        var xSpeed = this.speedCalc(this._endPos.x, this._x);\r\n        if (!!xSpeed)\r\n            this._x += xSpeed + this._xSwerve;\r\n        var ySpeed = this.speedCalc(this._endPos.y, this._y);\r\n        if (!!ySpeed)\r\n            this._y -= ySpeed + this._ySwerve;\r\n        if (this._teller % 5 === 0)\r\n            this._alpha -= 0.01;\r\n        if (this._alpha <= 0)\r\n            this._game.removeAnimateObject(this);\r\n        this._teller++;\r\n    };\r\n    Particle.createParticleCluster = function (size, caller) {\r\n        var particleSize = Math.sqrt(size);\r\n        for (var x = 0; caller.width - x > 0; x += particleSize) {\r\n            for (var y = 0; caller.height - y > 0; y += particleSize) {\r\n                var param = { game: caller.game, startPos: { x: caller.x + x, y: caller.y + y }, endPos: { x: caller.x + x + 50, y: caller.y + y + 50, }, color: caller.color, width: particleSize, height: particleSize, caller: caller };\r\n                caller.game.addAnimateObject(param);\r\n            }\r\n        }\r\n    };\r\n    Particle.prototype.speedCalc = function (endPoint, pos) {\r\n        var toTravel = (endPoint - pos) < 0 ? -(endPoint - pos) : (endPoint - pos);\r\n        if (toTravel > 0.1) {\r\n            return (endPoint - pos) / 1000;\r\n        }\r\n        return;\r\n    };\r\n    Particle.prototype.draw = function () {\r\n        this._game.ctx.globalAlpha = this._alpha;\r\n        this._game.ctx.beginPath();\r\n        this._game.ctx.rect(this._x, this._y, this._width, this._height);\r\n        this._game.ctx.fillStyle = this.color;\r\n        this._game.ctx.fill();\r\n    };\r\n    Object.defineProperty(Particle.prototype, \"startPos\", {\r\n        get: function () { return this._startPos; },\r\n        set: function (value) { this._startPos = value; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Particle.prototype, \"endPos\", {\r\n        get: function () { return this._endPos; },\r\n        set: function (value) { this._endPos = value; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Particle.prototype, \"color\", {\r\n        get: function () { return this._color; },\r\n        set: function (value) { this._color = value; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Particle.prototype, \"width\", {\r\n        get: function () { return this._width; },\r\n        set: function (value) { this._width = value; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Particle.prototype, \"height\", {\r\n        get: function () { return this._height; },\r\n        set: function (value) { this._height = value; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Particle;\r\n}());\r\nexports.default = Particle;\r\n\n\n//# sourceURL=webpack:///./recources/js/game/animate/Particle.ts?");

/***/ }),

/***/ "./recources/js/game/models/Ball.ts":
/*!******************************************!*\
  !*** ./recources/js/game/models/Ball.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar GameObject_1 = __webpack_require__(/*! ../GameObject */ \"./recources/js/game/GameObject.ts\");\r\nvar Particle_1 = __webpack_require__(/*! ../animate/Particle */ \"./recources/js/game/animate/Particle.ts\");\r\nvar Ball = (function (_super) {\r\n    __extends(Ball, _super);\r\n    function Ball(_a) {\r\n        var game = _a.game, _b = _a.tag, tag = _b === void 0 ? 'default' : _b, x = _a.x, y = _a.y, speed = _a.speed, _c = _a.color, color = _c === void 0 ? 'red' : _c, _d = _a.raduis, raduis = _d === void 0 ? 10 : _d;\r\n        var _this = _super.call(this) || this;\r\n        _this._direction = 'down';\r\n        _this._turnX = 0;\r\n        _this._turnY = -3;\r\n        _this._speed = 0.7;\r\n        _this.game = game;\r\n        _this.tag = tag;\r\n        _this.x = x;\r\n        _this.y = y;\r\n        _this.width = raduis;\r\n        _this.height = raduis;\r\n        _this.color = color;\r\n        _this._raduis = raduis;\r\n        if (!x)\r\n            _this.x = _this.game.screen.width / 2 - (_this._raduis / 2);\r\n        if (!y)\r\n            _this.y = 255;\r\n        return _this;\r\n    }\r\n    Ball.prototype.update = function () {\r\n        this.draw();\r\n        this.move();\r\n        if (this.y <= 0)\r\n            this._direction = 'down';\r\n        if (this.y >= this.game.screen.height) {\r\n            this._direction = 'up';\r\n            for (var index in this.game.gameObjects) {\r\n                if (this.game.gameObjects[index].tag === 'paddle') {\r\n                    Particle_1.default.createParticleCluster(this._raduis, this);\r\n                    this.game.gameObjects[index].takeDamage(1);\r\n                    this.game.removeGameObject(this);\r\n                }\r\n            }\r\n        }\r\n        if (this.x <= 0)\r\n            this._turnX += 0.3;\r\n        if (this.x >= this.game.screen.width)\r\n            this._turnX -= 0.3;\r\n        for (var _i = 0, _a = this.game.gameObjects; _i < _a.length; _i++) {\r\n            var gameObject = _a[_i];\r\n            var collideCheck = void 0;\r\n            try {\r\n                collideCheck = this.isCollide(gameObject);\r\n            }\r\n            catch (e) { }\r\n            if (gameObject !== this && collideCheck) {\r\n                var newDirection = (this._direction === 'down') ? 'up' : 'down';\r\n                this._direction = newDirection;\r\n                var turnAmount = this.turnOnCollide(gameObject);\r\n                this._turnX = (turnAmount / 100) * 1.1;\r\n                this._turnY = (this._turnY < 0) ? -0.5 : 0.5;\r\n                if (gameObject.tag === 'block') {\r\n                    gameObject.takeDamage(1);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    Ball.prototype.turnOnCollide = function (obj) {\r\n        var obj1Collide = obj.x + obj.width;\r\n        var obj2Collide = this.x + this._raduis;\r\n        var answer = (obj.width / 2) - (obj1Collide - obj2Collide);\r\n        if (answer <= 20 && answer >= -20) {\r\n            return 0;\r\n        }\r\n        else {\r\n            return answer;\r\n        }\r\n    };\r\n    Ball.prototype.move = function () {\r\n        if (this._direction === 'down') {\r\n            this.y += this._speed;\r\n        }\r\n        else if (this._direction === 'up') {\r\n            this.y -= this._speed;\r\n        }\r\n        this.x += this._turnX;\r\n    };\r\n    Ball.prototype.draw = function () {\r\n        this.game.ctx.globalAlpha = 1;\r\n        this.game.ctx.beginPath();\r\n        this.game.ctx.arc(this.x, this.y, this._raduis, 0, 2 * Math.PI);\r\n        this.game.ctx.fillStyle = this.color;\r\n        this.game.ctx.fill();\r\n    };\r\n    return Ball;\r\n}(GameObject_1.default));\r\nexports.default = Ball;\r\n\n\n//# sourceURL=webpack:///./recources/js/game/models/Ball.ts?");

/***/ }),

/***/ "./recources/js/game/models/Block.ts":
/*!*******************************************!*\
  !*** ./recources/js/game/models/Block.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar GameObject_1 = __webpack_require__(/*! ../GameObject */ \"./recources/js/game/GameObject.ts\");\r\nvar Particle_1 = __webpack_require__(/*! ../animate/Particle */ \"./recources/js/game/animate/Particle.ts\");\r\nvar Block = (function (_super) {\r\n    __extends(Block, _super);\r\n    function Block(_a) {\r\n        var game = _a.game, _b = _a.tag, tag = _b === void 0 ? 'block' : _b, x = _a.x, y = _a.y, _c = _a.width, width = _c === void 0 ? 125 : _c, _d = _a.height, height = _d === void 0 ? 50 : _d, _e = _a.color, color = _e === void 0 ? 'red' : _e;\r\n        var _this = _super.call(this) || this;\r\n        _this._life = 1;\r\n        _this.game = game;\r\n        _this.tag = tag;\r\n        _this.x = x;\r\n        _this.y = y;\r\n        _this.width = width;\r\n        _this.height = height;\r\n        _this.color = color;\r\n        _this._endPoint = _this.y - 5;\r\n        return _this;\r\n    }\r\n    Block.prototype.update = function () {\r\n        this.draw();\r\n    };\r\n    Block.prototype.draw = function () {\r\n        this.game.ctx.globalAlpha = 1;\r\n        this.game.ctx.beginPath();\r\n        this.game.ctx.rect(this.x, this.y, this.width, this.height);\r\n        this.game.ctx.fillStyle = this.color;\r\n        this.game.ctx.fill();\r\n    };\r\n    Block.prototype.takeDamage = function (damage) {\r\n        this._life -= damage;\r\n        if (this._life <= 0) {\r\n            Particle_1.default.createParticleCluster(75, this);\r\n            this.game.removeGameObject(this);\r\n        }\r\n    };\r\n    return Block;\r\n}(GameObject_1.default));\r\nexports.default = Block;\r\n\n\n//# sourceURL=webpack:///./recources/js/game/models/Block.ts?");

/***/ }),

/***/ "./recources/js/game/models/Paddle.ts":
/*!********************************************!*\
  !*** ./recources/js/game/models/Paddle.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar GameObject_1 = __webpack_require__(/*! ../GameObject */ \"./recources/js/game/GameObject.ts\");\r\nvar Particle_1 = __webpack_require__(/*! ../animate/Particle */ \"./recources/js/game/animate/Particle.ts\");\r\nvar Paddle = (function (_super) {\r\n    __extends(Paddle, _super);\r\n    function Paddle(_a) {\r\n        var game = _a.game, _b = _a.tag, tag = _b === void 0 ? 'paddle' : _b, x = _a.x, y = _a.y, speed = _a.speed, _c = _a.width, width = _c === void 0 ? 200 : _c, _d = _a.height, height = _d === void 0 ? 25 : _d, _e = _a.color, color = _e === void 0 ? 'red' : _e;\r\n        var _this = _super.call(this) || this;\r\n        _this.keys = [];\r\n        _this._particles = [];\r\n        _this._life = 1;\r\n        _this.game = game;\r\n        _this.tag = tag;\r\n        _this.x = x;\r\n        _this.y = y;\r\n        _this.width = width;\r\n        _this.height = height;\r\n        _this.color = color;\r\n        _this.speed = speed;\r\n        if (!x)\r\n            _this.x = _this.game.screen.width / 2 - (_this.width / 2);\r\n        if (!y)\r\n            _this.y = 450;\r\n        if (!speed)\r\n            _this.speed = 3.2;\r\n        _this.endPoint = _this.x;\r\n        document.addEventListener('keydown', function (event) {\r\n            _this.keys[event.which] = true;\r\n        });\r\n        document.addEventListener('keyup', function (event) {\r\n            _this.keys[event.which] = false;\r\n        });\r\n        return _this;\r\n    }\r\n    Paddle.prototype.update = function () {\r\n        this.draw();\r\n        switch (true) {\r\n            case this.keys[65] || this.keys[37]:\r\n                if (this.endPoint > 0)\r\n                    this.endPoint -= this.speed;\r\n                break;\r\n            case this.keys[68] || this.keys[39]:\r\n                if (this.endPoint + this.width < this.game.screen.width)\r\n                    this.endPoint += this.speed;\r\n                break;\r\n        }\r\n        var toTravel = (this.endPoint - this.x) < 0 ? -(this.endPoint - this.x) : (this.endPoint - this.x);\r\n        if (toTravel > 0.1) {\r\n            var speedCalc = (this.endPoint - this.x) / 50;\r\n            this.x += speedCalc;\r\n        }\r\n    };\r\n    Paddle.prototype.takeDamage = function (damage) {\r\n        this._life -= damage;\r\n        if (this._life <= 0) {\r\n            Particle_1.default.createParticleCluster(50, this);\r\n            this.game.removeGameObject(this);\r\n        }\r\n    };\r\n    Paddle.prototype.draw = function () {\r\n        this.game.ctx.globalAlpha = 1;\r\n        this.game.ctx.beginPath();\r\n        this.game.ctx.rect(this.x, this.y, this.width, this.height);\r\n        this.game.ctx.fillStyle = this.color;\r\n        this.game.ctx.fill();\r\n        for (var _i = 0, _a = this._particles; _i < _a.length; _i++) {\r\n            var particle = _a[_i];\r\n            if (!!particle)\r\n                particle.draw();\r\n        }\r\n    };\r\n    return Paddle;\r\n}(GameObject_1.default));\r\nexports.default = Paddle;\r\n\n\n//# sourceURL=webpack:///./recources/js/game/models/Paddle.ts?");

/***/ })

/******/ });