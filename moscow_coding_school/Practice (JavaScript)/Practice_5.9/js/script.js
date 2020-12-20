const page = document.querySelector('.page');
let text = '';

for (let i = 1; i <= 100000; i++) {
    if (i % 6 == 0) {
        text += (i + ' ');
    }
}

page.innerHTML = text;