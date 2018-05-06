"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = require("../GameObject");
var Particle_1 = require("../animate/Particle");
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(_a) {
        var game = _a.game, _b = _a.tag, tag = _b === void 0 ? 'default' : _b, x = _a.x, y = _a.y, speed = _a.speed, _c = _a.color, color = _c === void 0 ? 'red' : _c, _d = _a.raduis, raduis = _d === void 0 ? 10 : _d;
        var _this = _super.call(this) || this;
        _this._direction = 'down';
        _this._turnX = 0;
        _this._turnY = -3;
        _this._speed = 0.7;
        _this.game = game;
        _this.tag = tag;
        _this.x = x;
        _this.y = y;
        _this.width = raduis;
        _this.height = raduis;
        _this.color = color;
        _this._raduis = raduis;
        if (!x)
            _this.x = _this.game.screen.width / 2 - (_this._raduis / 2);
        if (!y)
            _this.y = 255;
        return _this;
    }
    Ball.prototype.update = function () {
        this.draw();
        this.move();
        if (this.y <= 0)
            this._direction = 'down';
        if (this.y >= this.game.screen.height) {
            this._direction = 'up';
            for (var index in this.game.gameObjects) {
                if (this.game.gameObjects[index].tag === 'paddle') {
                    Particle_1.default.createParticleCluster(this._raduis, this);
                    this.game.gameObjects[index].takeDamage(1);
                    this.game.removeGameObject(this);
                }
            }
        }
        if (this.x <= 0)
            this._turnX += 0.3;
        if (this.x >= this.game.screen.width)
            this._turnX -= 0.3;
        for (var _i = 0, _a = this.game.gameObjects; _i < _a.length; _i++) {
            var gameObject = _a[_i];
            var collideCheck = void 0;
            try {
                collideCheck = this.isCollide(gameObject);
            }
            catch (e) { }
            if (gameObject !== this && collideCheck) {
                var newDirection = (this._direction === 'down') ? 'up' : 'down';
                this._direction = newDirection;
                var turnAmount = this.turnOnCollide(gameObject);
                this._turnX = (turnAmount / 100) * 1.1;
                this._turnY = (this._turnY < 0) ? -0.5 : 0.5;
                if (gameObject.tag === 'block') {
                    gameObject.takeDamage(1);
                }
            }
        }
    };
    Ball.prototype.turnOnCollide = function (obj) {
        var obj1Collide = obj.x + obj.width;
        var obj2Collide = this.x + this._raduis;
        var answer = (obj.width / 2) - (obj1Collide - obj2Collide);
        if (answer <= 20 && answer >= -20) {
            return 0;
        }
        else {
            return answer;
        }
    };
    Ball.prototype.move = function () {
        if (this._direction === 'down') {
            this.y += this._speed;
        }
        else if (this._direction === 'up') {
            this.y -= this._speed;
        }
        this.x += this._turnX;
    };
    Ball.prototype.draw = function () {
        this.game.ctx.globalAlpha = 1;
        this.game.ctx.beginPath();
        this.game.ctx.arc(this.x, this.y, this._raduis, 0, 2 * Math.PI);
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fill();
    };
    return Ball;
}(GameObject_1.default));
exports.default = Ball;
