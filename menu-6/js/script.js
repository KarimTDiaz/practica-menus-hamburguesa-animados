const menu=document.getElementById('menu')
const menuIcon=document.getElementById('menu-icon')

menu.addEventListener('click',() => {
menuIcon.classList.toggle('menu-icon__bar--click')
})