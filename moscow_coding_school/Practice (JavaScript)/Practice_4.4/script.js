let modelNumber = prompt('Введите число');
modelNumber = parseInt(modelNumber);

(modelNumber >= 0) ? (console.log(modelNumber)) : ((modelNumber < 0) ? (console.log(modelNumber * -1)) : (alert ('Ошибка. Введите число')));