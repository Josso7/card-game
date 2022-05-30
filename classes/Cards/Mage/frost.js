const frostSpells = {
    frostbolt: {
        name: 'Frostbolt',
        damage: 10,
        manaCost: 1,
        slow: true,   
        description: `Deal 10 damage to a single target.`     
    },
    iceBarrier: {
        name: 'Ice Barrier',
        armor: 10,
        manaCost: 2,
        effect: 'armorGain',
        description: `Gain 10 armor.`
    },
    frostNova: {
        name: 'Frost Nova',
        damage: 1,
        manaCost: 5,
        effect: 'freeze',
        aoe: true,
        description: `Freeze all enemy minions`
    }
}

export { frostSpells };