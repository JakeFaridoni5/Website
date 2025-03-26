const listAni = document.querySelector('.ul')
const backImg = document.querySelector('.hero')

document.addEventListener('scroll', () => {
    backImg.style.filter = `blur(${window.scrollY * 0.05}px)`
})
