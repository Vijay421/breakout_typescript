"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Particle = (function () {
    function Particle(_a) {
        var game = _a.game, startPos = _a.startPos, endPos = _a.endPos, speed = _a.speed, color = _a.color, width = _a.width, height = _a.height, caller = _a.caller;
        this._startPos = { x: undefined, y: undefined };
        this._endPos = { x: undefined, y: undefined };
        this._alpha = 1;
        this._teller = 0;
        this._startPos = startPos;
        this._endPos = endPos;
        this._color = color;
        this._width = width;
        this._height = height;
        this._game = game;
        this._speed = speed;
        this._x = this.startPos.x;
        this._y = this.startPos.y;
        this._caller = caller;
        this._xSwerve = Math.floor((Math.random() * 5) + 1) / 100;
        this._ySwerve = Math.floor((Math.random() * 5) + 1) / 100;
    }
    Particle.prototype.update = function () {
        this.draw();
        var xSpeed = this.lerp(this._endPos.x, this._x);
        if (!!xSpeed)
            this._x += xSpeed + this._xSwerve;
        var ySpeed = this.lerp(this._endPos.y, this._y);
        if (!!ySpeed)
            this._y -= ySpeed + this._ySwerve;
        if (this._teller % 6 === 0)
            this._alpha -= 0.01;
        if (this._alpha <= 0)
            this._game.removeAnimateObject(this);
        this._teller++;
    };
    Particle.createParticleCluster = function (size, caller, speed) {
        if (speed === void 0) { speed = 1000000000; }
        var particleSize = Math.sqrt(size);
        for (var x = 0; caller.width - x > 0; x += particleSize) {
            for (var y = 0; caller.height - y > 0; y += particleSize) {
                var param = { game: caller.game, startPos: { x: caller.x + x, y: caller.y + y }, speed: speed, endPos: { x: caller.x + x + 50, y: caller.y + y + 50, }, color: caller.color, width: particleSize, height: particleSize, caller: caller };
                caller.game.addAnimateObject(param);
            }
        }
    };
    Particle.prototype.lerp = function (endPoint, pos) {
        var toTravel = (endPoint - pos) < 0 ? -(endPoint - pos) : (endPoint - pos);
        if (toTravel > 0.1) {
            return (endPoint - pos) / this._speed;
        }
        return;
    };
    Particle.prototype.draw = function () {
        this._game.ctx.globalAlpha = this._alpha;
        this._game.ctx.beginPath();
        this._game.ctx.rect(this._x, this._y, this._width, this._height);
        this._game.ctx.fillStyle = this.color;
        this._game.ctx.fill();
    };
    Object.defineProperty(Particle.prototype, "startPos", {
        get: function () { return this._startPos; },
        set: function (value) { this._startPos = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Particle.prototype, "endPos", {
        get: function () { return this._endPos; },
        set: function (value) { this._endPos = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Particle.prototype, "color", {
        get: function () { return this._color; },
        set: function (value) { this._color = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Particle.prototype, "width", {
        get: function () { return this._width; },
        set: function (value) { this._width = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Particle.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) { this._height = value; },
        enumerable: true,
        configurable: true
    });
    return Particle;
}());
exports.default = Particle;
