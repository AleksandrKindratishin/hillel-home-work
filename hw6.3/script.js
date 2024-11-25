// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
//
//     Наприклад:
//
// const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    let length = array.length;

    for (let i = 0; i < length; i++) {
        if (array[i] === item) {
            for (let j = i; j < length - 1; j++) {
                array[j] = array[j + 1];
            }
            length--;
            i--;
        }
    }

    array.length = length;
    return array;
}

console.log(removeElement([1, 2, 3, 4], 3));
