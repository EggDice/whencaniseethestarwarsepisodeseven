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

function drawStars() {
    clear();
    for (var i = 0; i < 1000; ++i) {
        drawStar(Math.round(Math.random() * 600), Math.round(Math.random() * 400));
    }
}

drawStars();

function updateTimer() {
  var finalDate = new Date('18 December 2015');
  var difference = (finalDate.getTime() - (new Date()).getTime()) / 1000;
  var daysDom = document.getElementById('days');
  var hoursDom = document.getElementById('hours');
  var minutesDom = document.getElementById('minutes');
  var secondsDom = document.getElementById('seconds');
  var days = Math.floor(difference / (60 * 60 * 24));
  difference -= days * 60 * 60 * 24;
  var hours = Math.floor(difference / (60 * 60));
  difference -= hours * 60 * 60;
  var minutes = Math.floor(difference / (60));
  difference -= minutes * 60;
  daysDom.innerHTML = days;
  hoursDom.innerHTML = hours;
  minutesDom.innerHTML = minutes;
  secondsDom.innerHTML = Math.floor(difference);
}

updateTimer();
setInterval(updateTimer, 1000);

