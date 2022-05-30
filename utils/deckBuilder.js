import { Deck } from "../classes/deck.js";
import { getClassCards } from '../utils/cards/retrieveCards.js'

function constructDeck(className){
    let deck = new Deck();
    const classCards = getClassCards(className);  
    console.log(classCards);   
    return deck;
}

export { constructDeck };