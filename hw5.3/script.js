// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let userNumber;

while (!Number.isInteger(userNumber) || userNumber === 0) {
    userNumber = +prompt('Enter your integer number');
}

for (let i = 1; i <= 100; i++) {
    let squareNumber = i ** 2;
    alert(i);
    if (squareNumber >= userNumber) {
        break;
    }
}
