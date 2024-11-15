// Дано тризначне число, яке надае користувач, потрибно визначити:
//
//     Чи правда, що всі цифри однакові?
//     Чи є серед цифр цифри однакові?

const someNumber = +prompt("Enter your number", "123");

const someNumberToString = String(someNumber);

if (someNumberToString[0] === someNumberToString[1] && someNumberToString[1] === someNumberToString[2]) {
    alert('All numbers is identical!');
} else if (someNumberToString[0] === someNumberToString[1]) {
    alert('First number and second number is identical!');
} else if (someNumberToString[0] === someNumberToString[2]) {
    alert('Last number and first number is identical!');
} else if (someNumberToString[1] === someNumberToString[2]) {
    alert('Last number and second number is identical!');
} else {
    alert('Thanks!)')
}