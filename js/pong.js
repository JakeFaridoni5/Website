const ball = document.createElement('div')
const paddle = document.createElement('div')
const ballRadius = 30
const score = document.createElement('div')
//
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
//
let ballXPosition = windowWidth / 2 - ballRadius
let ballSpeed = 5;
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = -1
//
let paddleWidth = 12 * ballRadius
let paddleHeight = 35
let paddleXPosition = windowWidth / 2 - paddleWidth / 2
let paddleYPosition = 55
let paddleSpeed = 1.5 * ballSpeed
let paddleDirection = 0

createBall()
createPaddle()
createScore()
styleGame()



setInterval(moveBall, 10)
setInterval(movePaddleRight, 10)
setInterval(movePaddleLeft, 10)
setInterval(changeDif, 100);

function styleGame() {
    document.body.style.backgroundColor = "black";
    ball.style.border = "2px solid white";
    paddle.style.borderRadius = "5px";
    score.style.color = "white";
    document.body.style.overflow = "hidden";
}

function createBall() {
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "Blue"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${ballXPosition}px`
}

function createPaddle() {
    document.body.appendChild(paddle)
    paddle.style.border = "2px solid white";
    paddle.style.backgroundColor = "white";
    paddle.style.height = `${paddleHeight}px`
    paddle.style.width = `${paddleWidth}px`
    paddle.style.backgroundColor = "Black"
    paddle.style.position = "absolute"
    paddle.style.top = `${paddleYPosition}px`
    paddle.style.left = `${paddleXPosition}px`
}

function createScore() {
    score.innerHTML = '0';
    document.body.appendChild(score);
    score.style.position = 'absolute';
    score.style.top = '50%';
    score.style.left = '50%';
    score.style.transform = 'translateX(-50%)';
    score.style.fontSize = '30px';
    score.style.color = 'black';
    score.style.zIndex = '-1';
}

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > (windowWidth - 2 * ballRadius)) {
        ballXDirection = ballXDirection * -1
    }
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > (windowHeight - 2 * ballRadius)) {
        ballYDirection = ballYDirection * -1
    }
    let ballTop = ballYPosition;
    let ballBottom = ballYPosition + 2 * ballRadius;
    let ballLeft = ballXPosition;
    let ballRight = ballXPosition + 2 * ballRadius;
    let paddleTop = paddleYPosition;
    let paddleBottom = paddleYPosition + paddleHeight;
    let paddleLeft = paddleXPosition;
    let paddleRight = paddleXPosition + paddleWidth;
    if (
        ballBottom >= paddleTop &&
        ballTop <= paddleBottom &&
        ballLeft <= paddleRight &&
        ballRight >= paddleLeft &&
        ballYDirection === -1
    ) {
        ballYDirection = ballYDirection * -1;
        increaseScore();
    }
    if (ballYPosition < 0) {
        textAni();
        score.addEventListener('animationend', () => {
            score.style.animation = '';
        });
        difficultyIncreased = false;
        ballSpeed = 5;
        paddleSpeed = 5;
        ball.style.transition = "background-color 1.5s ease";
        ball.style.backgroundColor = "blue";
        score.style.transition = "color 1.5s ease";
        score.style.color = "white";
        score.innerHTML = '0';
        ballXPosition = windowWidth / 2 - ballRadius;
        ballYPosition = windowHeight / 2 - ballRadius;
        ballXDirection = 1;
        ballYDirection = 1;
        ball.style.left = `${ballXPosition}px`;
        ball.style.top = `${ballYPosition}px`;
    }
}

function increaseScore() {
    score.innerHTML = `${parseInt(score.innerHTML) + 1}`;
}

function textAni() {
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes textShake {
        0% { transform: rotate(0); }
        25% { transform: rotate(-25deg); }
        50% { transform: rotate(25deg); }
        75% { transform: rotate(-25deg); }
        100% { transform: rotate(0); }

    }`;
    document.head.appendChild(style);
    score.style.animation = "textShake 1s";
}

function movePaddleRight() {
    if (paddleDirection == 1 && paddleXPosition + paddleWidth <= windowWidth - 1) {
        paddleXPosition = paddleXPosition + paddleSpeed
        paddle.style.left = `${paddleXPosition}px`
    }
}

function movePaddleLeft() {
    if (paddleDirection == -1 && paddleXPosition >= 0) {
        paddleXPosition = paddleXPosition - paddleSpeed
        paddle.style.left = `${paddleXPosition}px`
    }
}

let difficultyIncreased = false;
let difficultyIncreased2 = false;
let difficultyIncreased3 = false;
let difficultyIncreased4 = false;
let difficultyIncreased5 = false;

function dif1() {
    ballSpeed = ballSpeed * 1.5;
    paddleSpeed = paddleSpeed * 1.5;

    ball.style.transition = "background-color 1.5s ease";
    ball.style.backgroundColor = "lightgreen";

    score.style.transition = "color 1.5s ease";
    score.style.color = "lightgreen";
}

function dif2() {
    ballSpeed = ballSpeed * 1.5;
    paddleSpeed = paddleSpeed * 1.5;

    ball.style.transition = "background-color 1.5s ease";
    ball.style.backgroundColor = "yellow";

    score.style.transition = "color 1.5s ease";
    score.style.color = "yellow";
}

function dif3() {
    ballSpeed = ballSpeed * 1.5;
    paddleSpeed = paddleSpeed * 1.5;

    ball.style.transition = "background-color 1.5s ease";
    ball.style.backgroundColor = "orange";

    score.style.transition = "color 1.5s ease";
    score.style.color = "orange";
}

function dif4() {
    ballSpeed = ballSpeed * 1.5;
    paddleSpeed = paddleSpeed * 1.5;

    ball.style.transition = "background-color 1.5s ease";
    ball.style.backgroundColor = "red";

    score.style.transition = "color 1.5s ease";
    score.style.color = "red";
}

function dif5() {
    ballSpeed = ballSpeed * 1.5;
    paddleSpeed = paddleSpeed * 1.5;

    ball.style.transition = "background-color 1.5s ease";
    ball.style.backgroundColor = "black";

    score.style.transition = "color 1.5s ease";
    score.style.color = "purple";
    score.style.zIndex = "1";
}

function changeDif() {
    if (parseInt(score.innerHTML) == 10 && !difficultyIncreased) {
        dif1();
        difficultyIncreased = true;
    }
    if (parseInt(score.innerHTML) == 20 && !difficultyIncreased2) {
        dif2();
        difficultyIncreased2 = true;
    }
    if (parseInt(score.innerHTML) == 30 && !difficultyIncreased3) {
        dif3();
        difficultyIncreased3 = true;
    }
    if (parseInt(score.innerHTML) == 40 && !difficultyIncreased4) {
        dif4();
        difficultyIncreased4 = true;
    }
    if (parseInt(score.innerHTML) == 50 && !difficultyIncreased5) {
        dif5();
        difficultyIncreased5 = true;
    }
    if (parseInt(score.innerHTML) == 60) {
        score.innerHTML = "You Win!";
        ball.style.transition = "background-color 1.5s ease";
        ball.style.backgroundColor = "green";
        score.style.transition = "color 1.5s ease";
        score.style.color = "green";
        score.style.zIndex = "1";
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        paddleDirection = 1
    }
    if (event.key == 'ArrowLeft') {
        paddleDirection = -1
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'ArrowRight') {
        paddleDirection = 0
    }
    if (event.key == 'ArrowLeft') {
        paddleDirection = 0
    }
})
