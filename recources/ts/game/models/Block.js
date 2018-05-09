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
var Block = (function (_super) {
    __extends(Block, _super);
    function Block(_a) {
        var game = _a.game, _b = _a.tag, tag = _b === void 0 ? 'block' : _b, x = _a.x, y = _a.y, _c = _a.width, width = _c === void 0 ? 125 : _c, _d = _a.height, height = _d === void 0 ? 50 : _d, _e = _a.color, color = _e === void 0 ? 'red' : _e;
        var _this = _super.call(this) || this;
        _this._life = 1;
        _this.game = game;
        _this.tag = tag;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.color = color;
        _this._endPoint = _this.y - 5;
        return _this;
    }
    Block.prototype.update = function () {
        this.draw();
    };
    Block.prototype.draw = function () {
        this.game.ctx.globalAlpha = 1;
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.x, this.y, this.width, this.height);
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fill();
    };
    Block.prototype.takeDamage = function (damage) {
        this._life -= damage;
        if (this._life <= 0) {
            Particle_1.default.createParticleCluster(50, this);
            this.game.removeGameObject(this);
        }
    };
    return Block;
}(GameObject_1.default));
exports.default = Block;
