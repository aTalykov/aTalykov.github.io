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

for (arrayByCountry of newSchool) {
    for (arrayOfRappers of arrayByCountry[0]) {
        console.log(arrayOfRappers);
    };
}

for (arrayByCountry of newSchool) {
    for (arrayOfRapProducers of arrayByCountry[1]) {
        console.log(arrayOfRapProducers);
    };
}