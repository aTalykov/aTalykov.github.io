let num = parseInt(prompt('Введите число'))

function expModel(num) {
    return Math.abs(num**Math.round(Math.random()*(9-1)+1));
}

alert(expModel(num));