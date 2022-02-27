const playBoard = document.getElementById('play-board');
const playBall = document.getElementById('play-ball');
const barRed = document.getElementById('bar-red');
const barGreen = document.getElementById('bar-green');
let speed = 50;
const ballSize = 10;
const ballEdge = 20;
const direction = {
  left: 0,
  top: ballSize
}
let barRedDirection = 0;
let barGreenDirection = 0;
const barWidth = 90;
const barMove = 10;
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

const player1 = function (value) {
  // console.log(barRedDirection, value)
  if (barRedDirection === value) {
    barRedDirection = 0;
  } else {
    barRedDirection = value;
  }
}

const player2 = function (value) {
  // console.log(barGreenDirection, value)
  if (barGreenDirection === value) {
    barGreenDirection = 0;
  } else {
    barGreenDirection = value;
  }
}

const keydown = function (event) {
  switch (event.key) {
    case 'a':
      player1(-barMove);
      break;
    case 'd':
      player1(barMove);
      break;
    case 'ArrowLeft':
      player2(-barMove);
      break;
    case 'ArrowRight':
      player2(barMove);
      break;
  }
  console.log(event)
}

const setting = function () {
  playBall.style.left = '140px';
  playBall.style.top = '140px';
  barRed.style.left = '100px';
  barRed.style.top = '10px';
  barGreen.style.left = '100px';
  barGreen.style.top = '280px';
  speed = 50;
  direction.left = 0;
  barRedDirection = 0;
  barGreenDirection = 0;
};

const render = function () {
  if (!go) return;
  // console.log(speed,parseInt(playBall.style.top))

  // gameOver 확인
  if (parseInt(playBall.style.top) >= parseInt(playBoard.style.height) - parseInt(playBall.style.height) || parseInt(playBall.style.top) <= 0) {
    console.log('게임오버');
    return;
  }

  // playBall 위치 계산
  if (parseInt(playBall.style.top) >= parseInt(barGreen.style.top) - parseInt(playBall.style.height)) {
    const gameOver = parseInt(playBall.style.left) - parseInt(barGreen.style.left);
    if (gameOver >= 0 && gameOver <= barWidth) {
      console.log(parseInt(playBall.style.left) - parseInt(barGreen.style.left));
      console.log(playBall.style.left, barGreen.style.left);
      direction.top = ballSize * -1;
      // direction.left = _.random(-20, 20); lodash로 적용했을 떄
      direction.left = Math.round(Math.random() * (-ballEdge - ballEdge) + ballEdge);
      speed -= 1;
    }
  } else if (parseInt(playBall.style.top) <= parseInt(barRed.style.top) + parseInt(playBall.style.height)) {
    const gameOver = parseInt(playBall.style.left) - parseInt(barRed.style.left);
    if (gameOver >= 0 && gameOver <= barWidth) {
      console.log(parseInt(playBall.style.left) - parseInt(barRed.style.left));
      console.log(playBall.style.left, barRed.style.left);
      direction.top = ballSize * 1;
      // direction.left = _.random(-20, 20); lodash로 적용했을 떄
      direction.left = Math.round(Math.random() * (-ballEdge - ballEdge) + ballEdge);
      speed -= 1;
    }
  }

  if (parseInt(playBall.style.left) >= parseInt(playBoard.style.width) - parseInt(playBall.style.width)) {
    direction.left = ballSize * -1;
  } else if (parseInt(playBall.style.left) <= 0) {
    direction.left = ballSize * 1;
  }

  // barRed & barGreen 이동
  if (barRedDirection !== 0) {
    if (
      (parseInt(barRed.style.left) > 0 && barRedDirection === -barMove) ||
      (parseInt(barRed.style.left) < parseInt(playBoard.style.width) - barWidth && barRedDirection === barMove)
    ) {
      barRed.style.left = parseInt(barRed.style.left) + barRedDirection + 'px';
    }
  }
  if (barGreenDirection !== 0) {
    if (
      (parseInt(barGreen.style.left) > 0 && barGreenDirection === -barMove) ||
      (parseInt(barGreen.style.left) < parseInt(playBoard.style.width) - barWidth && barGreenDirection === barMove)
    ) {
      barGreen.style.left = parseInt(barGreen.style.left) + barGreenDirection + 'px';
    }
  }

  // playBall 이동
  playBall.style.top = parseInt(playBall.style.top) + direction.top + 'px';
  playBall.style.left = parseInt(playBall.style.left) + direction.left + 'px';
  setTimeout(render, speed);
}

const stop = function () {
  go = false;
}

const start = function () {
  if (go) return;
  go = true;
  setTimeout(render, speed);
}

const restart = function () {
  go = true;
  setting();
  setTimeout(render, speed);
}

setting();
document.addEventListener('keydown', keydown)
setTimeout(render, speed);
