// Отримуємо посилання на батьківський контейнер
const container = document.getElementById('buttonContainer');

// Додаємо обробник подій до батьківського контейнера
container.addEventListener('click', (event) => {
    // Перевіряємо, чи елемент є кнопкою
    if (event.target.tagName === 'BUTTON') {
        const buttonNumber = event.target.getAttribute('data-btn'); // Отримуємо номер кнопки
        alert(`Ви натиснули на кнопку ${buttonNumber}`);
    }
});