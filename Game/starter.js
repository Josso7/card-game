const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Hello please pick your class', (answer) => {

    if(answer === mage){
        console.log('You have selected mage.')
    } else {

    }
})
console.log('Hello, please pick your class.')
