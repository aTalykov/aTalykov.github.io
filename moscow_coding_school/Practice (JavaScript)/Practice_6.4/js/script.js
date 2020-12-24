const APIKey = '099715979800997fed902c8c415868c1';
const form = document.forms[0];
const cityTemperature = document.querySelector('.cityTemperature');
const inputtedCity = document.querySelector('.inputtedCity');
const cityWindSpeed = document.querySelector('.cityWindSpeed');

form.onsubmit = function (e) {
    e.preventDefault();
    inputtedCity.innerHTML = form.elements.city.value;

    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+form.elements.city.value+'&appid='+APIKey;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();

    if (xhr.status !== 200) {
        console.log(xhr.status + ' ' + xhr.statusText)
    } else {
        let DATA = JSON.parse(xhr.responseText);
        console.log(DATA);
        cityTemperature.innerHTML = Math.round(DATA.main.temp - 273) + ' градус Цельсия';
        cityWindSpeed.innerHTML = DATA.wind.speed + ' м/c';
    }
}