import { frostSpells } from "../classes/Cards/Mage/frost.js";
import { constructDeck } from "../utils/deckBuilder.js";
import { getClassCards } from "../utils/cards/retrieveCards.js";
import chalk from "chalk";
import align from 'align-text';
const classCards = getClassCards("mage");
// console.log(classCards);

function listCards(classCards) {
  for (let key in classCards) {
    console.log(`${formatCard(classCards[key])}\n`);
    // console.log(`|${formatCardDescription(classCards[key], classCards[key].description.split(' '))}|`)
    // console.log(`|${centerCardName(classCards[key].type)}|`);
  }
}

listCards(classCards);

// function centerCardName(cardName, classCard) {
//   debugger;
//   let maxLength = 31;
//   let centeredString = "|";
//   if (classCard) {
//     centeredString += colorResourceText(classCard);
//     maxLength = 28;
//   }
//   // console.log('cardName:', cardName, 'cardName length:', cardName.length);
//   const fillerLength = maxLength - cardName.length;

//   for (let i = 0; i < fillerLength / 2; i++) {
//     let length = centeredString.length;
//     centeredString += " ";
//   }

//   centeredString += cardName;
//   // console.log('centeredString length:', centeredString.length);
//   for (let i = centeredString.length; i < maxLength; i++) {
//     // console.log('string:', centeredString, 'length:', centeredString.length)
//     if (centeredString.length === maxLength - 1) centeredString += "|";
//     else centeredString += " ";
//   }
//   console.log(
//     "centeredString",
//     centeredString,
//     "centeredString length:",
//     centeredString.length
//   );
//   return centeredString;
// }

// function formatCardDescription(
//   card,
//   cardDescriptionArr,
//   formattedDescription = "",
//   formattedDescriptionArr = [],
//   lineLength = 0
// ) {
//   // debugger;
//   const maxLength = 26;
//   let currentWord = cardDescriptionArr[0];
//   if (cardDescriptionArr.length === 0) {
//     formattedDescriptionArr.push(align(formattedDescription, (maxLength - formattedDescription.length)));
//     return formattedDescriptionArr.join("\n");
//   }

//   if (lineLength + currentWord.length >= maxLength) {
//     for (let i = lineLength; i < maxLength; i++) {
//       formattedDescription += " ";
//     }

//     // formattedDescription += '|';
//     // formattedDescription += '\n';
//     lineLength = 0;
//     formattedDescriptionArr.push(align(formattedDescription, maxLength - 2));
//     formattedDescription = "";
//     // formattedDescription += '';
//   }

//   if (currentWord === "damageVariable") {
//     lineLength += String(card.damage).length + 1;
//     formattedDescription += `${card.damage} `;
//   } else {
//     lineLength += currentWord.length + 1;
//     formattedDescription += `${currentWord} `;
//   }

//   cardDescriptionArr.shift();

//   // console.log(formattedDescription.length)
//   return formatCardDescription(
//     card,
//     cardDescriptionArr,
//     formattedDescription,
//     formattedDescriptionArr,
//     lineLength
//   );
// }


function colorResourceText(classCard) {
  if (classCard.manaCost !== undefined) return chalk.blue(classCard.manaCost);
}

function formatCardDescription(stringArr){
    const maxLength = 30;
    let currentLength = 0;
    let currentLine = '';
    let allLines = [];
    console.log(stringArr)
    for(let i = 0; i < stringArr.length; i++){

        if(currentLength + stringArr[i].length < maxLength){
            currentLine += stringArr[i];
            currentLength += stringArr[i].length;
        } else {
            console.log(currentLine);
            allLines.push(currentLine);
            currentLine = '';
        }
    }
    allLines.push(currentLine);
    console.log(allLines);
    return allLines;
}

function formatCard(classCard) {
  let formattedCard = "";

  formattedCard += '|';
  formattedCard += colorResourceText(classCard);
  formattedCard += align(classCard.name, 5);
  formattedCard += align('|', 5)
  formattedCard += "\n";

  // formattedCard += `${'\u0304'}`;
  formattedCard += "\n";

  // formattedCard += '| ';
  formattedCard += formatCardDescription(
    classCard.description.split(" ")
  );
  // formattedCard += '|';
  formattedCard += "\n";

  // formattedCard += '';
  formattedCard += align(classCard.type, 12);
  // formattedCard += '|';

  // console.log(formattedCard);
  return formattedCard;
}
