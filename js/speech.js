const main = document.querySelector('main')
const voiceSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data =[
    {
        image: '../images/drink.jpg',
        text: "I'm thirsty"
    },
    {
        image: '../images/food.jpg',
        text: "I'm hungry"
    },
    {
        image: '../images/tired.jpg',
        text: "I'm eepy"
    },
    {
        image: '../images/hurt.jpg',
        text: "I'm in imense pain"
    },
    {
        image: '../images/happy.jpg',
        text: "I'm joyous"
    },
    {
        image: '../images/sad.jpg',
        text: "I'm being crushed to death by two walls slowly closing in on me"
    },
    {
        image: '../images/angry.jpg',
        text: "I'm furious"
    },
    {
        image: '../images/scared.jpg',
        text: "I'm lost"
    },
    {
        image: '../images/outside.jpg',
        text: "I'm the sun"
    },
    {
        image: '../images/home.jpg',
        text: "I'm inside your house"
    },
    {
        image: '../images/school.jpg',
        text: "ts (this) Fuckass school pmo icl like sybau"
    },
    {
        image: '../images/grandma.jpg',
        text: "Lets eat grandma"
    },
]

data.forEach(createBox)

function createBox(item) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
    <img src="${item.image} alt="${item.text}" />
    <p class="info">${item.text}</p>
    `
    
    main.appendChild(box)
}
