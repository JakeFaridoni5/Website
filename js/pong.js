const ball = document.createElement('div')
const paddle = document.createElement('div')
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth/2 -ballRadius
let ballSpeed = 5;
let ballXDirection = 1
let ballYPosition = windowHeight/2 - ballRadius
let ballYDirection = -1
let paddleXPosition = windowWidth/2 - 6 * ballRadius
let paddleSpeed = 5 * ballSpeed


setInterval(moveBall, 10)

createBall()
createPaddle()

function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "Blue"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${ballXPosition}px`
}

function createPaddle(){
    document.body.appendChild(paddle)
    paddle.style.height = "50px"
    paddle.style.width = `${12 * ballRadius}px`
    paddle.style.backgroundColor = "Black"
    paddle.style.position = "absolute"
    paddle.style.bottom = "50px"
    paddle.style.left = `${paddleXPosition}px`
    paddle.style.transition = "ease 0.05s"
}

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > (windowWidth - 2 * ballRadius)){
        ballXDirection = ballXDirection * -1
    }
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > (windowHeight - 2 * ballRadius)){
        ballYDirection = ballYDirection * -1
    }
}

    document.addEventListener('keydown', (event) => {
        if (event.key == 'ArrowRight'){
            movePaddleRight()
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.key == 'ArrowLeft'){
            movePaddleLeft()
        }
    })

    function movePaddleRight(){
        paddleXPosition = paddleXPosition + paddleSpeed
        paddle.style.left = `${paddleXPosition}px`
    }

    function movePaddleLeft(){
        paddleXPosition = paddleXPosition - paddleSpeed
        paddle.style.left = `${paddleXPosition}px`
    }
