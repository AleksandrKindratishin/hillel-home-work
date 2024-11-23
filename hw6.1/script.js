// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
//
//

function deleteChar(string, char) {
    let result = '';

    for (const stringElement of string) {
        if (stringElement !== char) {
            result += stringElement;
        }
    }
    console.log(result);
}

deleteChar('Hello World!', 'l');

