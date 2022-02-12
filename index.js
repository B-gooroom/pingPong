const playBoard = document.getElementById('play-board');
const playBall = document.getElementById('play-ball');
let speed = 50;
const ballSize = 10;
const direction = {
  letf: 0,
  top: ballSize
}

playBoard.style.width = '300px';
playBoard.style.height = '300px';
playBall.style.width = '10px';
playBall.style.height = '10px';
console.log(playBoard.style)

const setting = function() {
  playBall.style.left = '140px';
  playBall.style.top = '140px';
  speed = 50;
};

const render = function() {
  console.log(speed,parseInt(playBall.style.top))

  if (parseInt(playBall.style.top) >= 290) {
    direction.top = ballSize * -1;
  } else if (parseInt(playBall.style.top) <= 0) {
    direction.top = ballSize * 1;
  }
  playBall.style.top = parseInt(playBall.style.top) + direction.top + 'px';
  setTimeout(render, speed);
}

setting();
setTimeout(render, speed);
