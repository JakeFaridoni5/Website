const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 1
let score = 0
let selected_insect = {}
let inscetCount = 0

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = {src, alt}
        screens[1].classList.add('up')
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
    createInsect()
}

function increaseTime() {
    let s = seconds % 60
    let m = Math.floor(seconds / 60)
    if (s < 10) {
        s = `0${s}`
    }
    if (m < 10) {
        m = `0${m}`
    }
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds = seconds + 1;
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    insect.innerHTML = `<img src = "${selected_insect.src}" alt = "${selected_insect.alt}">`
    const {x, y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.addEventListener('click', () => {
        score = score + 1;
        if (score >= 10 && score < 15) {
            console.log('AH')
            message.classList.add('visible')
         }
         else {
            
         }
        scoreEl.innerHTML = `Score: ${score}`
        const {x, y} = getRandomLocation()
        insect.style.top = `${y}px`
        insect.style.left = `${x}px`
        createInsect()
    })
    game_container.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 75)
    const y = Math.random() * (height - 75)
    return {x, y}
}

function increaseScore() {
    insect.addeventListener('click', () => {
        score = score + 1;
        scoreEl.innerHTML = `Score: ${score}`
    })
}
