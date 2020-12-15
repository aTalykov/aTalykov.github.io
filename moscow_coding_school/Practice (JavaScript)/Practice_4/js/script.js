const request = document.querySelector('.request');
const closePopUp = document.querySelector('.closePopup')
const popUp = document.querySelector('.popup');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');

request.addEventListener('click', function() {
    popUp.style.display = 'flex';
})

closePopUp.addEventListener('click', function() {
    popUp.style.display = 'none';
})

openMenu.addEventListener('click', function() {
    menu.style.left = '0';
})

closeMenu.addEventListener('click', function() {
    menu.style.left = '-50vw';
})