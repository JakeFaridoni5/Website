const textBox = document.querySelector('.text')
const backImg = document.querySelector('.hero')

document.addEventListener('scroll', () => {
    backImg.style.filter = `blur(${window.scrollY * 0.05}px)`
    textBox.style.top = `${window.scrollY}px`
    console.log(textBox)
})
