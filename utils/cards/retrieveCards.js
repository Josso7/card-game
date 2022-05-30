import { frostSpells } from "../../classes/Cards/Mage/frost.js";

function getClassCards(className){
    if(className === 'mage'){
        const classCards = frostSpells;
        return classCards
    }
    
}

export { getClassCards };