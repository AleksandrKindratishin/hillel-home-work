// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

// for (let i = 0 ; i < 10; i++ ) {
//     let userNumber;
//
//     while(!Number(userNumber) || userNumber <= 100) {
//         userNumber = +prompt("Enter your number biggest 100");
//     }
// }


function printUserValue() {
    let userNumber;

    for (let i = 0; i < 10; i++) {
        userNumber = null;

        while(!Number(userNumber) || userNumber <= 100) {
            userNumber = +prompt("Enter your number biggest 100");
        }
    }

    return userNumber;

}

console.log(printUserValue());