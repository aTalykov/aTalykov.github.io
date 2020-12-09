const Body = document.body;
Body.style.backgroundColor = "#696969";

const Page = document.querySelector('.page');
Page.style['color'] = 'ghostwhite';

const Name = document.querySelector('.name');
Name.innerHTML = "DJ Rashad";

const image = document.querySelector('img');
image.setAttribute('src', 'https://www.rokolectiv.ro/archive/2012/content/6.Day4/0.DJRashad/rashad.jpg')

const shortBio = document.querySelector('.short-bio')
shortBio.className += ' animated'