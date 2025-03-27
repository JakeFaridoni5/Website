const textBox = document.querySelector('.textBox')
const backImg = document.querySelector('.hero')
const navBar = document.querySelector('.nav')

document.addEventListener('scroll', () => {
    backImg.style.filter = `blur(${window.scrollY * 0.05}px)`
    textBox.style.top = `-${window.scrollY}px`
    if (parseInt(textBox.style.top) >= -205)
    {
        textBox.style.top = `-${window.scrollY}px`
        navBar.classList.remove('active')
    }
    else {
        textBox.style.top = `-205px`
        navBar.classList.add('active')
    }
})
