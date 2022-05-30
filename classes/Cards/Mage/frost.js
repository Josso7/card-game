const frostSpells = {
    frostbolt: {
        name: 'Frostbolt',
        damage: 10,
        manaCost: 1,
        slow: true,   
        description: `Deal damageVariable damage to a single target.`,
        type: 'Spell',    
    },
    iceBarrier: {
        name: 'Ice Barrier',
        armor: 10,
        manaCost: 2,
        effect: 'armorGain',
        description: `Gain 10 armor.`,
        type: 'Spell',    
    },
    frostNova: {
        name: 'Frost Nova',
        damage: 1,
        manaCost: 5,
        effect: 'freeze',
        aoe: true,
        description: `Freeze all enemy minions.`,
        type: 'Spell',    
    }
}

export { frostSpells };