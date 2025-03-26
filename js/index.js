const textBox = document.querySelector('.textBox')
const backImg = document.querySelector('.hero')

document.addEventListener('scroll', () => {
    backImg.style.filter = `blur(${window.scrollY * 0.05}px)`
    textBox.style.top = `-${window.scrollY}px`
    // if (parseInt(textBox.style.top) > -205)
    // {
    //     textBox.style.top = `-${window.scrollY}px`
    // }
    // else {
    //     textBox.style.top = `-205px`
    // }
    // console.log(textBox)
})
