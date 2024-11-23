// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.


function arithmeticMean(arr) {
    let numbers = [];
    let index = 0;
    let sum = 0;
    let arithmetic = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            numbers[index] = i;
        }
    }

    for (let j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }
    arithmetic = sum / numbers.length - 1;

    console.log(arithmetic);

}

arithmeticMean([5, 'asdasd', {}, 5]);