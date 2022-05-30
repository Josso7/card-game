import { optionFormatter } from '../utils/textFormatting';
import { LinkedList, Node } from '../utils/LinkedList/linkedList';
import { constructDeck } from '../utils/deckBuilder'
import { getClassCards } from '../utils/cards/retrieveCards';

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let playerClass;
const mainMenuOptions = {
    'Please select an option': 0,
    'Make Deck': 1,
    'Battle': 2
}

function pickClass(){
    r1.question('Hello please pick your class\n', (answer) => {
        if(answer.toLowerCase() === 'mage'){
            console.log('You have selected mage.')
            playerClass = 'mage';  

            r1.close();
        } else {
            console.log('Please select a valid class.')
            pickClass();
        };
    });
};

function mainMenu(){
    r1.question(optionFormatter(mainMenuOptions), (answer) => {
        if(answer.toLowerCase() === 'make deck'){
            pickClass();
            constructDeck(playerClass)
        }
        if(answer.toLowerCase() === 'battle'){

        }

    })
}
mainMenu()
