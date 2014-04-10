'use strict';

var canvas = document.getElementById('bg-canvas');
var ctx = canvas.getContext('2d');

function clear() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,600,400);
}

function drawStar(x, y) {
    var white = Math.round(Math.cos(Math.random() * Math.PI / 2 - Math.PI / 2) * 255);
    ctx.fillStyle = 'rgb(' + white + ', ' + white  + ', ' + white + ')';
    ctx.fillRect(x,y,1,1);
}

clear();
for (var i = 0; i < 1000; ++i) {
    drawStar(Math.round(Math.random() * 600), Math.round(Math.random() * 400));
}



