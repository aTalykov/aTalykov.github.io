class Tiger {
    constructor(name) {
        this.name = name;
    }
    feedCat() {
        return 'Purrrrrr';
    }
}

class angryTiger extends Tiger {
    throwDart() {
        return 'ZzZzzZzZz';
    }
}

const Tigara = new angryTiger('Tigara')

console.log(Tigara.throwDart())
console.log(Tigara.feedCat())