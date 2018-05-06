"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject = (function () {
    function GameObject() {
    }
    GameObject.prototype.isCollide = function (obj) {
        return (obj.x + obj.width >= this.x && obj.x <= this.x
            &&
                obj.y + obj.height >= this.y && obj.y <= this.y);
    };
    Object.defineProperty(GameObject.prototype, "width", {
        get: function () { return this._width; },
        set: function (value) { this._width = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) { this._height = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () { return this._x; },
        set: function (x) { this._x = x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () { return this._y; },
        set: function (y) { this._y = y; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "tag", {
        get: function () { return this._tag; },
        set: function (tag) { this._tag = tag; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "color", {
        get: function () { return this._color; },
        set: function (color) { this._color = color; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "game", {
        get: function () { return this._game; },
        set: function (game) { this._game = game; },
        enumerable: true,
        configurable: true
    });
    return GameObject;
}());
exports.default = GameObject;
