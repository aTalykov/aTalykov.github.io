const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (player === rock && computer === rock || player === scissors && computer === scissors || player === paper && computer === paper) {
    console.log('Ничья');
} else if (player === rock && computer === scissors || player === scissors && computer === paper || player === paper && computer === rock) {
    console.log('Победил игрок');
} else if (player === rock && computer === paper || player === paper && computer === scissors || player === scissors && computer === rock) {
    console.log('Победил компьютер');
} else {console.log('Введено неверное значение в поле')};

console.log(player)
console.log(computer)