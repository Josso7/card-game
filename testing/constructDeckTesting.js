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
// console.log(cards[1]);
// console.log(cards[1].split(''));
// let splitCard = (splitByNewLine(cards[1]))
// displayCardByLine(splitCard);
display3CardsByLine(cards[0], cards[1], cards[2])


//helper function to color resource cost text
function colorResourceText(classCard) {
  if (classCard.manaCost !== undefined) return chalk.blue.bold(classCard.manaCost);
}

//helper function to format the description of the card
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

//main function to fully format a single card
function formatCard(classCard) {
    let formattedCard = "";
    const maxLength = 30;
    formattedCard += ' ';
    formattedCard += colorResourceText(classCard);
    formattedCard += (align(chalk.underline(classCard.name), (maxLength - classCard.name.length - 3) / 2));
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
    // formattedCard += '\0';

    formattedCard += '\n';
    formattedCard += '\0';

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

//helper function that splits up a card by line, puts each line in an array, and returns the array containing each line
function splitByNewLine(card){
    let lineArray = [];
    let currentLine = [];
    let cardChars = card.split('');
    for(let char of cardChars){
        if(char === '\n'){
            lineArray.push(currentLine);
            currentLine = [];
        }
        else if (char === '\0') {
            for(let i = lineArray.length; i < 8; i++){
                let line = '???';
                line += align('???', 31);
                lineArray.push(line);
            }
        }
        else {
            currentLine.push(char);
        }
    }
    lineArray.push(currentLine);
    return lineArray;
}

//helper function to display 3 cards in a row at the same level
function display3CardsByLine(card1, card2, card3){
    // let lineArray = [];
    let terminalLength = process.stdout.columns;
    let currentLine = '';
    let card1Chars = splitByNewLine(card1)
    let card2Chars = splitByNewLine(card2)
    let card3Chars = splitByNewLine(card3)

    for(let i = 0; i < 11; i++){
        //11 is the vertical length of card including borders
        //105 is length of 3 cards + spaces inbetween
        for(let i = 0; i < (terminalLength - 105) / 2; i++){
            currentLine += ' ';
        }
        for(let char of card1Chars[i]){
            currentLine += char;
        }
        currentLine += '   ';
        for(let char of card2Chars[i]){
            currentLine += char;
        }
        currentLine += '   ';
        for(let char of card3Chars[i]){
            currentLine += char;
        }
        console.log(currentLine);
        currentLine = '';
    }
}

//helper function to dynamically display (console.log) 3 cards in a row at the same level, repeating until all cards passed in are displayed
//accepts an array of cards, returns nothing
function display3CardsByLine(cards){
    const splitCardsArray = [];
    let terminalLength = process.stdout.columns;
    let currentLine = '';

    //dynamically split all cards in array
    for(let i = 0; i < cards.length; i++){
        splitCardsArray.push(splitByNewLine(cards[i]))
    }

    //dynamically display card rows 3 per row
    for(let i = 0; i < cardsArray.length; i++){
        for(let j = 0; j < 11; j++){
            //11 is the vertical length of card including borders
            //105 is length of 3 cards + spaces inbetween
            for(let j = 0; j < (terminalLength - 105) / 2; j++){
                currentLine += ' ';
            }
            for(let char of card1Chars[j]){
                currentLine += char;
            }
            currentLine += '   ';
            for(let char of card2Chars[j]){
                currentLine += char;
            }
            currentLine += '   ';
            for(let char of card3Chars[j]){
                currentLine += char;
            }
            console.log(currentLine);
            currentLine = '';
        }
    }
}
