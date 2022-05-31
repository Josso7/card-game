import { frostSpells } from "../classes/Cards/Mage/frost.js";
import { constructDeck } from "../utils/deckBuilder.js";
import { getClassCards } from "../utils/cards/retrieveCards.js";
import chalk from "chalk";
import align from 'align-text';
import boxen from 'boxen';

const classCards = getClassCards("mage");
let cards = [];

function listCards(classCards) {
  for (let key in classCards) {
    cards.push(boxen(formatCard(classCards[key]), 'round'));
  }
}

listCards(classCards);
console.log(cards[1]);
cardsInColumn(cards);
function colorResourceText(classCard) {
  if (classCard.manaCost !== undefined) return chalk.blue(classCard.manaCost);
}

function formatCardDescription(stringArr, classCard){
    debugger;
    const maxLength = 32;
    let currentLength = 0;
    let currentLine = '';
    let allLines = [];
    stringArr.indexOf('damageVariable') !== - 1 ? stringArr[stringArr.indexOf('damageVariable')] = String(classCard.damage) : false;
    for(let i = 0; i < stringArr.length; i++){
        if(currentLength + stringArr[i].length <= maxLength){
            currentLine += stringArr[i];
            currentLength = currentLine.length;
            if(stringArr[i + 1]){
            if(currentLength + stringArr[i + 1].length <= maxLength) {
                currentLine += ' ';
                currentLength = currentLine.length;
            }
        }
        } else {
            allLines.push(currentLine);
            allLines.push('\n');
            currentLine = '';
            currentLength = 0;
            currentLine += stringArr[i];
            currentLength = currentLine.length;
            if(stringArr[i + 1]){
            if(currentLength + stringArr[i + 1].length <= maxLength) {
                currentLine += ' ';
                currentLength = currentLine.length;
            }
        }
            currentLength = currentLine.length;
        }
    }
    if(currentLine !== '') allLines.push(currentLine);
    return allLines;
}

function formatCard(classCard) {
    let formattedCard = "";
    const maxLength = 30;
    formattedCard += colorResourceText(classCard);
    formattedCard += (align(chalk.underline(classCard.name), (maxLength - classCard.name.length - 2) / 2));
    formattedCard += "\n";

    formattedCard += "\n";

    const cardDescriptionArr = formatCardDescription(
        classCard.description.split(" "),
        classCard
    );
    cardDescriptionArr.map(element => {
        if(element !== '\n'){
            formattedCard += align(element, ((maxLength - element.length % 2) === 1 ? maxLength - element.length + 1 : maxLength - element.length) / 2);
        } else {
            formattedCard += element;
        }
    })
    formattedCard += "\n";

    formattedCard += align(classCard.type, ((maxLength - classCard.type.length % 2) === 1 ? maxLength - classCard.type.length + 1 : maxLength - classCard.type.length) / 2);
    formattedCard += align(' ', ((maxLength - classCard.type.length) % 2 === 1 ? maxLength -classCard.type.length + 1 : maxLength - classCard.type.length) / 2);
    formattedCard += "\n";
    return formattedCard;
}

function cardsInColumn(cardsArr){
    let card = cardsArr[1].split('')
    // console.log(card)
    for(let i = 0; i < 3; i++){
        let j = 0;
        let card = cardsArr[i];
        while(card[j] !== '\n'){
            
        }
    }
}