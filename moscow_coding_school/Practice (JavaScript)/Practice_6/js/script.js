class Person {
    constructor(name) {
        this.name = name;
        this.happiness = 0;
    }
    hasCat() {
        return this.happiness += 1;
    }
    hasRest() {
        return this.happiness += 1;
    }
    hasMoney() {
        return this.happiness += 1;
    }
    isSunny() {
        const APIKey = '099715979800997fed902c8c415868c1';
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid='+APIKey;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();

        if (xhr.status !== 200) {
            console.log(xhr.status + ' ' + xhr.statusText)
        } else {
            let DATA = JSON.parse(xhr.responseText);
            return (Math.floor(DATA.main.temp - 273) > 15) ? this.happiness += 1 : this.happiness;
        }
    }
}

const form = document.forms[0];
form.onsubmit = function (e) {
    e.preventDefault();
    let name = form.elements.name.value;
    let cat = form.elements.cat.value;
    let rest = form.elements.rest.value;
    let money = form.elements.money.value;
    const person = new Person(name);
    (cat === 'yes') ? person.hasCat() : 0;
    (rest === 'yes') ? person.hasCat() : 0;
    (money === 'yes') ? person.hasCat() : 0;
    person.isSunny();
    document.querySelector('.personName').innerHTML = name + ':';
    if (person.happiness === 4) {
        document.querySelector('.icon').innerHTML = '😁';
    } else if (person.happiness === 3 || person.happiness === 2) {
        document.querySelector('.icon').innerHTML = '😐';
    } else {
        document.querySelector('.icon').innerHTML = '☹️';
    }
}