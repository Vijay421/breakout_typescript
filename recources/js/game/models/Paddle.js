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
var Paddle = (function (_super) {
    __extends(Paddle, _super);
    function Paddle(_a) {
        var game = _a.game, _b = _a.tag, tag = _b === void 0 ? 'paddle' : _b, x = _a.x, y = _a.y, speed = _a.speed, _c = _a.width, width = _c === void 0 ? 200 : _c, _d = _a.height, height = _d === void 0 ? 25 : _d, _e = _a.color, color = _e === void 0 ? 'red' : _e;
        var _this = _super.call(this) || this;
        _this.keys = [];
        _this._particles = [];
        _this._life = 1;
        _this.game = game;
        _this.tag = tag;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.color = color;
        _this.speed = speed;
        if (!x)
            _this.x = _this.game.screen.width / 2 - (_this.width / 2);
        if (!y)
            _this.y = 450;
        if (!speed)
            _this.speed = 3.2;
        _this.endPoint = _this.x;
        document.addEventListener('keydown', function (event) {
            _this.keys[event.which] = true;
        });
        document.addEventListener('keyup', function (event) {
            _this.keys[event.which] = false;
        });
        return _this;
    }
    Paddle.prototype.update = function () {
        this.draw();
        switch (true) {
            case this.keys[65] || this.keys[37]:
                if (this.endPoint > 0)
                    this.endPoint -= this.speed;
                break;
            case this.keys[68] || this.keys[39]:
                if (this.endPoint + this.width < this.game.screen.width)
                    this.endPoint += this.speed;
                break;
        }
        var toTravel = (this.endPoint - this.x) < 0 ? -(this.endPoint - this.x) : (this.endPoint - this.x);
        if (toTravel > 0.1) {
            var speedCalc = (this.endPoint - this.x) / 50;
            this.x += speedCalc;
        }
    };
    Paddle.prototype.takeDamage = function (damage) {
        this._life -= damage;
        if (this._life <= 0) {
            Particle_1.default.createParticleCluster(50, this);
            this.game.removeGameObject(this);
        }
    };
    Paddle.prototype.draw = function () {
        this.game.ctx.globalAlpha = 1;
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.x, this.y, this.width, this.height);
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fill();
        for (var _i = 0, _a = this._particles; _i < _a.length; _i++) {
            var particle = _a[_i];
            if (!!particle)
                particle.draw();
        }
    };
    return Paddle;
}(GameObject_1.default));
exports.default = Paddle;
