// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
//
//     Наприклад:
//
// const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    let result = [];
    let index = 0;

    for (const element of array) {
        if (element !== item) {
            result[index] = element;
            index++
        }
    }
    console.log(result);
}

removeElement([1, 2, 3, 4], 3);