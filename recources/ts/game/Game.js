"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paddle_1 = require("./models/Paddle");
var Block_1 = require("./models/Block");
var Ball_1 = require("./models/Ball");
var Particle_1 = require("./animate/Particle");
var Game = (function () {
    function Game(_screen, _ctx) {
        this._screen = _screen;
        this._ctx = _ctx;
        this._gameObjects = [];
        this._animateObject = [];
        this._gameClasses = [];
        this._gameClasses.push({ paddle: Paddle_1.default });
        this._gameClasses.push({ block: Block_1.default });
        this._gameClasses.push({ ball: Ball_1.default });
        this.populate();
        console.log(this);
        for (var _i = 0, _a = this._gameObjects; _i < _a.length; _i++) {
            var obj = _a[_i];
            console.log(obj);
        }
    }
    Game.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this._ctx.clearRect(0, 0, _this._screen.width, _this._screen.height);
            for (var index in _this._gameObjects) {
                _this._gameObjects[index].update();
            }
            for (var index in _this._animateObject) {
                _this._animateObject[index].update();
            }
        });
    };
    Game.prototype.populate = function () {
        this.addGameObject('paddle', { game: this, color: 'blue' });
        this.addGameObject('ball', { game: this, color: 'lightgreen' });
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                this.addGameObject('block', { game: this, x: j * (100 + 30) + 25, y: (10 + 50) * i });
            }
        }
    };
    Game.prototype.addGameObject = function (name, param) {
        var className;
        for (var _i = 0, _a = this._gameClasses; _i < _a.length; _i++) {
            var objectClass = _a[_i];
            className = objectClass[name];
            if (!!className) {
                this._gameObjects.push(new className(param));
                break;
            }
        }
    };
    Game.prototype.removeGameObject = function (obj) {
        for (var index in this._gameObjects) {
            if (this._gameObjects[index] === obj) {
                delete this._gameObjects[index];
                break;
            }
        }
    };
    Game.prototype.addAnimateObject = function (param) {
        this._animateObject.push(new Particle_1.default(param));
    };
    Game.prototype.removeAnimateObject = function (particle) {
        for (var index in this._animateObject) {
            if (this._animateObject[index] === particle) {
                delete this._animateObject[index];
                break;
            }
        }
    };
    Object.defineProperty(Game.prototype, "screen", {
        get: function () { return this._screen; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "ctx", {
        get: function () { return this._ctx; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "gameObjects", {
        get: function () { return this._gameObjects; },
        enumerable: true,
        configurable: true
    });
    return Game;
}());
exports.default = Game;
