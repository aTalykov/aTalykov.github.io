let crypto = [
    {
        name: "Bitcoin",
        price: 1388.37
    },
    {
        name: "Ethereum",
        price: 716
    },
    {
        name: "Litecoin",
        price: 140
    }
];

const cryptoName = document.getElementsByClassName('cryptoName');
const exchangeRate = document.getElementsByClassName('exchangeRate');
const colorBar = document.getElementsByClassName('colorBar');

for (let i = 0; i < cryptoName.length && i < exchangeRate.length; i++) {
    cryptoName[i].innerHTML = crypto[i].name;
    exchangeRate[i].innerHTML = crypto[i].price;
}

for (let i = 0; i < colorBar.length; i++) {
    colorBar[i].style.height = "1rem";
    colorBar[i].style.width = 20+(crypto[i].price / 100) + 'rem';
}

colorBar[0].style.backgroundColor = 'red';
colorBar[1].style.backgroundColor = 'blue';
colorBar[2].style.backgroundColor = 'green';