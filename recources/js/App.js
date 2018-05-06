"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./game/Game");
window.onload = function () {
    var screen = document.querySelector('#screen');
    var ctx = screen.getContext("2d");
    var game = new Game_1.default(screen, ctx);
    game.start();
};
