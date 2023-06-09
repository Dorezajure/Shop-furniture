window.addEventListener('DOMContentLoaded', () => {
    const menu  =document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu__nav'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__menu__active');
        })
    })
})
