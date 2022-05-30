class Card {
    constructor(card){
        this.name = card.name;
        this.manaCost = card.manaCost
        this.singleTarget = card.singleTarget
        this.multiTarget = card.multiTarget
        this.herosOnly = card.herosOnly
        this.healing = card.healing
        this.damage = card.damage
        this.armor = card.armor
        this.slow = card.slow
        this.stun = card.stun
        this.freeze = card.freeze
    }
}

export { Card }