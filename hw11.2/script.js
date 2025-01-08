const textElement = document.getElementById('text');
const button = document.getElementById('toggleColorButton');

let isOriginalColor = true;

button.addEventListener('click', () => {
    if (isOriginalColor) {
        textElement.style.color = 'red'; // Новий колір
    } else {
        textElement.style.color = 'black'; // Початковий колір
    }
    isOriginalColor = !isOriginalColor; // Перемикаємо стан
});