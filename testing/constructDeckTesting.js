import { frostSpells } from "../classes/Cards/Mage/frost.js";
import { constructDeck } from "../utils/deckBuilder.js";
import { getClassCards } from "../utils/cards/retrieveCards.js";
import chalk from 'chalk';

const classCards = getClassCards('mage');
// console.log(classCards);

function listCards(classCards){

    for(let key in classCards){
        console.log(`${formatCard(classCards[key])}\n`)
        // console.log(`|${formatCardDescription(classCards[key], classCards[key].description.split(' '))}|`)
        // console.log(`|${centerCardName(classCards[key].type)}|`);
    }
}

listCards(classCards);

function centerCardName(cardName){
    const maxLength = 29;
    let centeredString = '';
    const fillerLength = maxLength - cardName.length
    for(let i = 0; i < fillerLength / 2; i++){
        centeredString += ' ';        
    }
    centeredString += cardName;
    for(let i = centeredString.length; i < 29; i++){
        centeredString += ' ';
    }
    // console.log(centeredString.length);
    return centeredString;
}

function formatCardDescription(card, cardDescriptionArr, formattedDescription = ''){
    debugger;
    const maxLength = 29
    let lineLength = 0;
    if(cardDescriptionArr.length === 0) return formattedDescription;

    for(let i = lineLength; i + cardDescriptionArr[i].length < maxLength;){
        if(cardDescriptionArr.length === 0) break;
        // if(lineLength + cardDescriptionArr[i].length < maxLength){
            if(cardDescriptionArr[i] === 'damageVariable'){
                lineLength += String(card.damage).length;
                formattedDescription += `${card.damage} `;
            } else {
                lineLength += cardDescriptionArr[i].length;
                formattedDescription += `${cardDescriptionArr[i]} `;
            }
            cardDescriptionArr.shift();
            if(cardDescriptionArr.length === 0) break;
        // } else break;
    }
    // console.log(formattedDescription.length)
    if(cardDescriptionArr.length !== 0) formattedDescription += '\n';
    return formatCardDescription(card, cardDescriptionArr, formattedDescription);
}

function colorResourceText(classCard){
    if(classCard.manaCost !== undefined) return chalk.blue(classCard.manaCost);
}

function formatCard(classCard){
    let formattedCard = '';

    let maxLength = 33;

    formattedCard += '|';
    formattedCard += colorResourceText(classCard);
    formattedCard += centerCardName(classCard.name)
    formattedCard += '|'
    formattedCard += '\n';

    formattedCard += '| ';
    formattedCard += centerCardName(formatCardDescription(classCard, classCard.description.split(' ')))
    formattedCard += '|';
    formattedCard += '\n';

    formattedCard += '| ';
    formattedCard += centerCardName(classCard.type);
    formattedCard += '|';

    // console.log(formattedCard);
    return formattedCard;
}