const container = document.getElementById('container')
const text = document.getElementById('text')

setInterval(breatheAnimation, 7500)

function breatheAnimation() {
    text.innerHTML = 'Breathe In'
    container.classList.remove('shrink')
    container.classList.add('grow')

    setTimeout( () => {
        text.innerHTML = 'Hold'
    }, 3000)

    setTimeout( () => {
        container.classList.remove('grow')
        container.classList.add('shrink')
        text.innerHTML = 'Breathe Out'
    }, 4500)
}
