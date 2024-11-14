// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки);?

function getString () {
    for (let i = 0; i < 3; i++) {
        const userMassage = prompt('Enter your massage');
        console.log(userMassage);
    }
}

getString();