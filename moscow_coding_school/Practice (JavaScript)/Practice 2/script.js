let totalCash = parseInt(prompt("Количество денег?"));
let watchesCount = parseInt(prompt("Количество часов?"));
let earringsCount = parseInt(prompt("Количество серёжек"));
let watchesSum = watchesCount * parseInt(prompt("Стоимость часов?"));
let earringsSum = earringsCount * parseInt(prompt("Стоимость серёжек?"));

console.log(totalCash >= (watchesSum + earringsSum));