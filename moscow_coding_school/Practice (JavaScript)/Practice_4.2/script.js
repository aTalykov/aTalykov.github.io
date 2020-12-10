let modelNumber = prompt('Введите число');
modelNumber = paraeInt(modelNumber);

if (modelNumber >= 0) {
console.log(modelNumber);
} else if (modelNumber < 0) {
console.log(modelNumber * -1);
} else alert ('Введите число');