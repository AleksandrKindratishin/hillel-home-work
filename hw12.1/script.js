let savedLink = '';

document.getElementById('setLink').addEventListener('click', () => {
    const userInput = prompt('Введіть посилання (починаючи з http:// або https://):');
    if (userInput) {
        savedLink = userInput;
        alert('Посилання збережено!');
    } else {
        alert('Посилання не введено!');
    }
});

document.getElementById('redirect').addEventListener('click', () => {
    if (savedLink) {
        window.location.href = savedLink;
    } else {
        alert('Посилання не встановлено. Спочатку натисніть "Ввести посилання".');
    }
});