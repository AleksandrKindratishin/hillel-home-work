// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let userNumber;

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) return false;
    }
    return true
}

while (true) {
    userNumber = +prompt('Enter your a prime number');

    if (isNaN(userNumber) || userNumber === null) { break; }

    if (isPrime(userNumber)) {
        alert('Your prime number is ' + userNumber);
    } else {
        alert('You enter is not prime number');
    }
}
