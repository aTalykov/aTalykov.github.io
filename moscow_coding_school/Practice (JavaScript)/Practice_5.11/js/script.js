"use strict";

let newSchool = [
    [
        ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
        ['Sonny Digital', 'Metro Boomin', '12Hunna']
    ],
    [
        ['Yung Lean', 'Ecco2K', 'Bladee'],
        ['Whitearmor', 'PJ Beats', 'Yung Gud']
    ]
]

for (let arrayByCountry of newSchool) {
    for (let arrayOfRappers of arrayByCountry[0]) {
        console.log(arrayOfRappers);
    };
}

for (let arrayByCountry of newSchool) {
    for (let arrayOfRapProducers of arrayByCountry[1]) {
        console.log(arrayOfRapProducers);
    };
}