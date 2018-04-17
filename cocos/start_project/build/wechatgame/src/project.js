require=function o(s,a,r){function u(i,t){if(!a[i]){if(!s[i]){var e="function"==typeof require&&require;if(!t&&e)return e(i,!0);if(h)return h(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var n=a[i]={exports:{}};s[i][0].call(n.exports,function(t){var e=s[i][1][t];return u(e||t)},n,n.exports,o,s,a,r)}return a[i].exports}for(var h="function"==typeof require&&require,t=0;t<r.length;t++)u(r[t]);return u}({Game:[function(t,e,i){"use strict";cc._RF.push(e,"82716gWNbtF1qS4f3s3jYD1","Game"),cc.Class({extends:cc.Component,onLoad:function(){this.groundY=this.ground.y+this.ground.height/2,this.timer=0,this.starDuration=0,this.spawnNewStar(),this.score=0},spawnNewStar:function(){var t=cc.instantiate(this.starPrefab);this.node.addChild(t),t.setPosition(this.getNewStarPosition()),(t.getComponent("Star").game=this).starDuration=this.minStarDuration+cc.random0To1()*(this.maxStarDuration-this.minStarDuration),this.timer=0},getNewStarPosition:function(){var t,e=this.groundY+cc.random0To1()*this.player.getComponent("Player").jumpHeight+50,i=this.node.width/2;return t=cc.randomMinus1To1()*i,cc.p(t,e)},properties:{starPrefab:{default:null,type:cc.Prefab},maxStarDuration:0,minStarDuration:0,ground:{default:null,type:cc.Node},player:{default:null,type:cc.Node},scoreDisplay:{default:null,type:cc.Label},scoreAudio:{default:null,url:cc.AudioClip}},start:function(){},update:function(t){this.timer>this.starDuration?this.gameOver():this.timer+=t},gainScore:function(){this.score+=1,this.scoreDisplay.string="Score: "+this.score.toString(),cc.audioEngine.playEffect(this.scoreAudio,!1)},gameOver:function(){this.player.stopAllActions(),cc.director.loadScene("game")}}),cc._RF.pop()},{}],Player:[function(t,e,i){"use strict";cc._RF.push(e,"1b5eem3UK9EDaoLi1PD9Nzo","Player"),cc.Class({extends:cc.Component,onLoad:function(){this.jumpAction=this.setJumpAction(),this.node.runAction(this.jumpAction),this.accLeft=!1,this.accRight=!1,this.xSpeed=0,this.setInputControl()},update:function(t){this.accLeft?this.xSpeed-=this.accel*t:this.accRight&&(this.xSpeed+=this.accel*t),Math.abs(this.xSpeed)>this.maxMoveSpeed&&(this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed)),this.node.x+=this.xSpeed*t},properties:{jumpHeight:0,jumpDuration:0,maxMoveSpeed:0,accel:0,jumpAudio:{default:null,url:cc.AudioClip}},setJumpAction:function(){var t=cc.moveBy(this.jumpDuration,cc.p(0,this.jumpHeight)).easing(cc.easeCubicActionOut()),e=cc.moveBy(this.jumpDuration,cc.p(0,-this.jumpHeight)).easing(cc.easeCubicActionIn()),i=cc.callFunc(this.playJumpSound,this);return cc.repeatForever(cc.sequence(t,e,i))},playJumpSound:function(){cc.audioEngine.playEffect(this.jumpAudio,!1)},setInputControl:function(){var e=this;cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(t){switch(t.keyCode){case cc.KEY.a:e.accLeft=!0;break;case cc.KEY.d:e.accRight=!0}}),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,function(t){switch(t.keyCode){case cc.KEY.a:e.accLeft=!1;break;case cc.KEY.d:e.accRight=!1}})},start:function(){}}),cc._RF.pop()},{}],Star:[function(t,e,i){"use strict";cc._RF.push(e,"c279ezoB/lIpYFLjyP6aY0Q","Star"),cc.Class({extends:cc.Component,properties:{pickRadius:0,game:{default:null,serializable:!1}},onLoad:function(){},getPlayerDistance:function(){var t=this.game.player.getPosition();return cc.pDistance(this.node.position,t)},onPicked:function(){this.game.spawnNewStar(),this.game.gainScore(),this.node.destroy()},start:function(){},update:function(t){if(this.getPlayerDistance()<this.pickRadius)this.onPicked();else{var e=1-this.game.timer/this.game.starDuration;this.node.opacity=50+Math.floor(205*e)}}}),cc._RF.pop()},{}]},{},["Game","Player","Star"]);