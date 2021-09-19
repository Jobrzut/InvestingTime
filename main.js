let navButton = document.querySelectorAll(".nav-button")
    
const mobileBtn = document.getElementById('mobilne-cta')
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById('mobilne-exit');
mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

navButton.forEach(e => e.addEventListener('mouseenter', ()=>{
    let closestElement = e.querySelector(".line")
    closestElement.classList.add("line-active")
}))

navButton.forEach(e => e.addEventListener('mouseleave', ()=>{
    let closestElement = e.querySelector(".line")
    closestElement.classList.remove("line-active")
}))