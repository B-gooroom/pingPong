const playBoard = document.getElementById('play-board');
const playBall = document.getElementById('play-ball');
const barRed = document.getElementById('bar-red');
const barGreen = document.getElementById('bar-green');
let speed = 50;
const ballSize = 10;
const direction = {
  left: -10,
  top: ballSize
}
const barWidth = 90; 
let go = true;

playBoard.style.width = '300px';
playBoard.style.height = '300px';
playBall.style.width = '10px';
playBall.style.height = '10px';
barRed.style.width = barWidth + 'px';
barRed.style.height = ballSize + 'px';
barGreen.style.width = barWidth + 'px';
barGreen.style.height = ballSize + 'px';
console.log(playBoard.style)

const setting = function() {
  playBall.style.left = '140px';
  playBall.style.top = '140px';
  barRed.style.left = '100px';
  barRed.style.top = '10px';
  barGreen.style.left = '100px';
  barGreen.style.top = '280px';
  speed = 50;
};

const render = function() {
  if (!go) return;
  console.log(speed,parseInt(playBall.style.top))
  
  if (parseInt(playBall.style.top) >= 270) {
    direction.top = ballSize * -1;
  } else if (parseInt(playBall.style.top) <= 20) {
    direction.top = ballSize * 1;
  }

  if (parseInt(playBall.style.left) >= 290) {
    direction.left = ballSize * -1;
  } else if (parseInt(playBall.style.left) <= 0) {
    direction.left = ballSize * 1;
  }
  playBall.style.top = parseInt(playBall.style.top) + direction.top + 'px';
  playBall.style.left = parseInt(playBall.style.left) + direction.left + 'px';
  setTimeout(render, speed);
}

const stop = function () {
  go = false;
}
setting();
setTimeout(render, speed);
