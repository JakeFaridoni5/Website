const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const element4 = document.getElementById('element4')
const element5 = document.getElementById('element5')


element1.addEventListener('click', ()=>{
    element1.innerHTML = "Thanks Pal, <br> Try Double Clicking Me"
})

element1.addEventListener('dblclick', ()=>{
    element1.innerHTML = "Good Job, Bud. <br> Click Me Again"
})

element2.addEventListener('mouseover', ()=>{
    element2.style.color = "#AAAAAA"
    element2.style.backgroundColor = "#CC22CC"
})

element2.addEventListener('mouseout', ()=>{
    element2.style.color = "White"
    element2.style.backgroundColor = "#BB33BB"
})

let positionY = 0;
let positionX = 0;

document.addEventListener('keydown', (event)=>{
    console.log(event.key)

    if (event.key == 'ArrowDown') {
        positionY = positionY + 10;
    }
    else if (event.key == 'ArrowUp') {
        positionY = positionY - 10;
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX + 10;
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX - 10;
    }
    element3.style.top = `${positionY}px`
    element3.style.right = `${positionX}px`

})

let width = 300;
let height = 50;

element4.addEventListener('click', ()=>{
    width = width - 50;
    height = height - 50;
    element4.style.width = `${width}px`
    element4.style.width = `${width}px`
    element4.innerHTML = ""

})

document.addEventListener('keyup', (event)=>{
    console.log(event.key)
    if (event.key == 'j') {
        element4.style.width = "300px"
        element4.style.height = "50px"
        element4.innerHTML = "<h4>Click Me to Make Me Small. <br> Press 'J' to Reset Me.</h4>"
    }
})

const list = ['running', 'paused']
let index = 0
element5.addEventListener('click', ()=>{
    element5.style.animationPlayState = list[index]
    index = (index + 1) % 2
})
