const frostSpells = {
    frostbolt: {
        name: 'Frostbolt',
        damage: 10,
        manaCost: 1,
        slow: true,        
    },
    iceBarrier: {
        name: 'Ice Barrier',
        armor: 10,
        manaCost: 2,
        effect: 'armorGain'
    },
    frostNova: {
        name: 'Frost Nova',
        damage: 1,
        manaCost: 5,
        effect: 'freeze',
        aoe: true
    }
}

export { frostSpells };