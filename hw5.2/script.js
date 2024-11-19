// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const dollarExchange = 40;
const euroExchange = 60;
const poundExchange = 80;

const userConfirm = confirm('Hello user! I am a smart currency converter! Click OK if you want to start working and CANCEL if you don\'t want to!');

userConfirm
    ? alert('Cool! Lats go!')
    : alert('Ok, good by!')

const instructionMassage = alert('You need to select the currency you want to convert to hryvnia, and I will give you the result of all amounts from 10 to 100 of the selected currency');

let userValue;

while (userValue !== 1 && userValue !== 2 && userValue !== 3) {
    userValue = +prompt('Specify the currency you want to convert to hryvnia, where 1 is USD, 2 is EUR, 3 is GBP');
}

if (userValue === 1) {
    for (let i = 10; i <= 100; i += 10) {
        let result = i * dollarExchange;
        alert('Your result when calculating on ' + i + ' is equal to ' + result);
    }
} else if (userValue === 2) {
    for (let i = 10; i <= 100; i += 10) {
        let result = i * euroExchange;
        alert('Your result when calculating on ' + i + ' is equal to ' + result);
    }
} else {
    for (let i = 10; i <= 100; i += 10) {
        let result = i * poundExchange;
        alert('Your result when calculating on ' + i + ' is equal to ' + result);
    }
}

const byMessage = alert('Thank you! Good by!');

