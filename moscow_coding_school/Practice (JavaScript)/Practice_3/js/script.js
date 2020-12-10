const body = document.body;
body.style.backgroundColor = "#696969";

const page = document.querySelector('.page');
page.style['color'] = 'ghostwhite';

const name = document.querySelector('.name');
name.innerHTML = "DJ Rashad";

const image = document.querySelector('img');
image.setAttribute('src', 'https://www.rokolectiv.ro/archive/2012/content/6.Day4/0.DJRashad/rashad.jpg')

const shortBio = document.querySelector('.short-bio')
shortBio.className += ' animated'