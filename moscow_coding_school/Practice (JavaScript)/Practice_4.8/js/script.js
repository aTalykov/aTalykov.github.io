function haveEnough() {
    let totalCash = parseInt(prompt("Количество денег?"));
    let watchesCount = parseInt(prompt("Количество часов?"));
    let earringsCount = parseInt(prompt("Количество серёжек"));
    let watchesSum = watchesCount * parseInt(prompt("Стоимость часов?"));
    let earringsSum = earringsCount * parseInt(prompt("Стоимость серёжек?"));
    if (totalCash >= (watchesSum + earringsSum)) {
        alert ('Enough $$$')
    } else {
        alert ('Not enough $$$')
    };
};

haveEnough();