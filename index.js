const playBoard = document.getElementById('play-board');
const playBall = document.getElementById('play-ball');
let speed = 50;
const ballSize = 10;

playBoard.style.width = '300px';
playBoard.style.height = '300px';
playBall.style.width = '10px';
playBall.style.height = '10px';
console.log(playBoard.style)

const setting = function() {
  playBall.style.left = '145px'
  playBall.style.top = '145px'
  speed = 50;
};

const render = function() {
  console.log(speed)
  playBall.style.top = parseInt(playBall.style.top) + ballSize + 'px';
  setTimeout(render, speed);
}

setting();
setTimeout(render, speed);
