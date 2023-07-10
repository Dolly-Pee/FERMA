window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



window.addEventListener('scroll', () => {
    document.querySelector('.search-bar__container').classList.toggle
    ('onscroll', window.scrollY > 0)
})