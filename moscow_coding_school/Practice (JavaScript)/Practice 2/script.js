totalCash = prompt("Количество денег?")
watchesCount = parseInt(prompt("Количество часов?"))
earringsCount = prompt("Количество серёжек")
watchesSum = watchesCount * parseInt(prompt("Стоимость часов?"))
earringsSum = earringsCount * parseInt(prompt("Стоимость серёжек?"))

// if else использован исключительно для проверки
console.log(totalCash >= (watchesSum + earringsSum))