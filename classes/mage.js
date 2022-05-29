let arcane = {

};

let frost = {
    frostbolt: {
        damage: 10,
        manaCost: 1,
        effect: 'slow',
        aoe: false
    },
    iceBarrier: {
        armor: 10,
        manaCost: 2,
        effect: 'armorGain'
    },
    frostNova: {
        damage: 1,
        manaCost: 5,
        effect: 'freeze',
        aoe: true
    }

};
let fire = {};

class Mage {
    constructor(){
        this.health = 100;
        this.mana = 20;
    }
}

export {Mage};
