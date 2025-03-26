const textBox = document.querySelector('.textBox')
const backImg = document.querySelector('.hero')

document.addEventListener('scroll', () => {
    backImg.style.filter = `blur(${window.scrollY * 0.05}px)`
    if (textBox.style.top < `-205px`)
    {
        textBox.style.top = `-${window.scrollY}px`
    }
    else {
        textBox.style.top = `-205px`
    }
    console.log(textBox)
})
