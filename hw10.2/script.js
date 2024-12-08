// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEvenNumbers(arr) {
    return arr
        .map(num => (num % 2 === 0 ? num : null))
        .filter(num => num !== null);
}

const even = getEvenNumbers(arr);
console.log(even)