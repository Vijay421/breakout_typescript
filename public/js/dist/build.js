!function(t){var e={};function i(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=6)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){var e=t.game,i=t.startPos,r=t.endPos,o=t.speed,n=t.color,s=t.width,a=t.height,h=t.caller;this._startPos={x:void 0,y:void 0},this._endPos={x:void 0,y:void 0},this._alpha=1,this._teller=0,this._startPos=i,this._endPos=r,this._color=n,this._width=s,this._height=a,this._game=e,this._speed=o,this._x=this.startPos.x,this._y=this.startPos.y,this._caller=h,this._xSwerve=Math.floor(5*Math.random()+1)/100,this._ySwerve=Math.floor(5*Math.random()+1)/100}return t.prototype.update=function(){this.draw();var t=this.lerp(this._endPos.x,this._x);t&&(this._x+=t+this._xSwerve);var e=this.lerp(this._endPos.y,this._y);e&&(this._y-=e+this._ySwerve),this._teller%6==0&&(this._alpha-=.01),this._alpha<=0&&this._game.removeAnimateObject(this),this._teller++},t.createParticleCluster=function(t,e,i){void 0===i&&(i=1e9);for(var r=Math.sqrt(t),o=0;e.width-o>0;o+=r)for(var n=0;e.height-n>0;n+=r){var s={game:e.game,startPos:{x:e.x+o,y:e.y+n},speed:i,endPos:{x:e.x+o+50,y:e.y+n+50},color:e.color,width:r,height:r,caller:e};e.game.addAnimateObject(s)}},t.prototype.lerp=function(t,e){if((t-e<0?-(t-e):t-e)>.1)return(t-e)/this._speed},t.prototype.draw=function(){this._game.ctx.globalAlpha=this._alpha,this._game.ctx.beginPath(),this._game.ctx.rect(this._x,this._y,this._width,this._height),this._game.ctx.fillStyle=this.color,this._game.ctx.fill()},Object.defineProperty(t.prototype,"startPos",{get:function(){return this._startPos},set:function(t){this._startPos=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"endPos",{get:function(){return this._endPos},set:function(t){this._endPos=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},set:function(t){this._color=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!0,configurable:!0}),t}();e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.prototype.isCollide=function(t){return t.x+t.width>=this.x&&t.x<=this.x&&t.y+t.height>=this.y&&t.y<=this.y},Object.defineProperty(t.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tag",{get:function(){return this._tag},set:function(t){this._tag=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},set:function(t){this._color=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"game",{get:function(){return this._game},set:function(t){this._game=t},enumerable:!0,configurable:!0}),t}();e.default=r},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(0),a=function(t){function e(e){var i=e.game,r=e.tag,o=void 0===r?"default":r,n=e.x,s=e.y,a=(e.speed,e.color),h=void 0===a?"red":a,c=e.raduis,u=void 0===c?10:c,l=t.call(this)||this;return l._direction="down",l._turnX=0,l._turnY=-3,l._speed=.7,l.game=i,l.tag=o,l.x=n,l.y=s,l.width=u,l.height=u,l.color=h,l._raduis=u,n||(l.x=l.game.screen.width/2-l._raduis/2),s||(l.y=255),l}return o(e,t),e.prototype.update=function(){if(this.draw(),this.move(),this.y<=0&&(this._direction="down"),this.y>=this.game.screen.height)for(var t in this._direction="up",this.game.gameObjects)"paddle"===this.game.gameObjects[t].tag&&(s.default.createParticleCluster(this._raduis,this),this.game.gameObjects[t].takeDamage(1),this.game.removeGameObject(this));this.x<=0&&(this._turnX+=.3),this.x>=this.game.screen.width&&(this._turnX-=.3);for(var e=0,i=this.game.gameObjects;e<i.length;e++){var r=i[e],o=void 0;try{o=this.isCollide(r)}catch(t){}if(r!==this&&o){var n="down"===this._direction?"up":"down";this._direction=n;var a=this.turnOnCollide(r);this._turnX=a/100*1.1,this._turnY=this._turnY<0?-.5:.5,"block"===r.tag&&r.takeDamage(1)}}},e.prototype.turnOnCollide=function(t){var e=t.x+t.width,i=this.x+this._raduis,r=t.width/2-(e-i);return r<=20&&r>=-20?0:r},e.prototype.move=function(){"down"===this._direction?this.y+=this._speed:"up"===this._direction&&(this.y-=this._speed),this.x+=this._turnX},e.prototype.draw=function(){this.game.ctx.globalAlpha=1,this.game.ctx.beginPath(),this.game.ctx.arc(this.x,this.y,this._raduis,0,2*Math.PI),this.game.ctx.fillStyle=this.color,this.game.ctx.fill()},e}(n.default);e.default=a},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(0),a=function(t){function e(e){var i=e.game,r=e.tag,o=void 0===r?"block":r,n=e.x,s=e.y,a=e.width,h=void 0===a?125:a,c=e.height,u=void 0===c?50:c,l=e.color,d=void 0===l?"red":l,f=t.call(this)||this;return f._life=1,f.game=i,f.tag=o,f.x=n,f.y=s,f.width=h,f.height=u,f.color=d,f._endPoint=f.y-5,f}return o(e,t),e.prototype.update=function(){this.draw()},e.prototype.draw=function(){this.game.ctx.globalAlpha=1,this.game.ctx.beginPath(),this.game.ctx.rect(this.x,this.y,this.width,this.height),this.game.ctx.fillStyle=this.color,this.game.ctx.fill()},e.prototype.takeDamage=function(t){this._life-=t,this._life<=0&&(s.default.createParticleCluster(50,this),this.game.removeGameObject(this))},e}(n.default);e.default=a},function(t,e,i){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(0),a=function(t){function e(e){var i=e.game,r=e.tag,o=void 0===r?"paddle":r,n=e.x,s=e.y,a=e.speed,h=e.width,c=void 0===h?200:h,u=e.height,l=void 0===u?25:u,d=e.color,f=void 0===d?"red":d,p=t.call(this)||this;return p.keys=[],p._particles=[],p._life=1,p.game=i,p.tag=o,p.x=n,p.y=s,p.width=c,p.height=l,p.color=f,p.speed=a,n||(p.x=p.game.screen.width/2-p.width/2),s||(p.y=450),a||(p.speed=3.2),p.endPoint=p.x,document.addEventListener("keydown",function(t){p.keys[t.which]=!0}),document.addEventListener("keyup",function(t){p.keys[t.which]=!1}),p}return o(e,t),e.prototype.update=function(){switch(this.draw(),!0){case this.keys[65]||this.keys[37]:this.endPoint>0&&(this.endPoint-=this.speed);break;case this.keys[68]||this.keys[39]:this.endPoint+this.width<this.game.screen.width&&(this.endPoint+=this.speed)}if((this.endPoint-this.x<0?-(this.endPoint-this.x):this.endPoint-this.x)>.1){var t=(this.endPoint-this.x)/50;this.x+=t}},e.prototype.takeDamage=function(t){this._life-=t,this._life<=0&&(s.default.createParticleCluster(50,this),this.game.removeGameObject(this))},e.prototype.draw=function(){this.game.ctx.globalAlpha=1,this.game.ctx.beginPath(),this.game.ctx.rect(this.x,this.y,this.width,this.height),this.game.ctx.fillStyle=this.color,this.game.ctx.fill();for(var t=0,e=this._particles;t<e.length;t++){var i=e[t];i&&i.draw()}},e}(n.default);e.default=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(4),o=i(3),n=i(2),s=i(0),a=function(){function t(t,e){this._screen=t,this._ctx=e,this._gameObjects=[],this._animateObject=[],this._gameClasses=[],this._gameClasses.push({paddle:r.default}),this._gameClasses.push({block:o.default}),this._gameClasses.push({ball:n.default}),this.populate(),console.log(this);for(var i=0,s=this._gameObjects;i<s.length;i++){var a=s[i];console.log(a)}}return t.prototype.start=function(){var t=this;setInterval(function(){for(var e in t._ctx.clearRect(0,0,t._screen.width,t._screen.height),t._gameObjects)t._gameObjects[e].update();for(var e in t._animateObject)t._animateObject[e].update()})},t.prototype.populate=function(){this.addGameObject("paddle",{game:this,color:"blue"}),this.addGameObject("ball",{game:this,color:"lightgreen"});for(var t=0;t<3;t++)for(var e=0;e<5;e++)this.addGameObject("block",{game:this,x:130*e+25,y:60*t})},t.prototype.addGameObject=function(t,e){for(var i,r=0,o=this._gameClasses;r<o.length;r++){if(i=o[r][t]){this._gameObjects.push(new i(e));break}}},t.prototype.removeGameObject=function(t){for(var e in this._gameObjects)if(this._gameObjects[e]===t){delete this._gameObjects[e];break}},t.prototype.addAnimateObject=function(t){this._animateObject.push(new s.default(t))},t.prototype.removeAnimateObject=function(t){for(var e in this._animateObject)if(this._animateObject[e]===t){delete this._animateObject[e];break}},Object.defineProperty(t.prototype,"screen",{get:function(){return this._screen},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ctx",{get:function(){return this._ctx},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gameObjects",{get:function(){return this._gameObjects},enumerable:!0,configurable:!0}),t}();e.default=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(5);window.onload=function(){var t=document.querySelector("#screen"),e=t.getContext("2d");new r.default(t,e).start()}}]);