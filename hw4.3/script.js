// Основне завдання, cтворити скрипт яки повинен виконувати наступне:
//     запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
//     При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
//
//     його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
//     Додаткове завдання *
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
//
// Все це має бути відображено в одному вікні (алерті).
//
//     Додаткове завдання
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

const currentYear = new Date().getFullYear();

const userDate = +prompt('Enter your birdth year');

const userAge = currentYear - userDate;
if (!userDate) {
    alert('It is a pity that you did not want to enter your date of birdth(');
} else {
    alert('You are ' + userAge + ' years old');
}



const userSity = prompt('Enter your sity');
if (!userSity) {
    alert('It is a pity that you did not want to enter your sity(');
} else {
    if (userSity === 'Kyiv') {
        alert('You liv in the capital of Ukraine!');
    } else if (userSity === 'Washington') {
        alert('You liv in the capital of USA!');
    } else if (userSity === 'London') {
        alert('You liv in the capital of Great Britan!');
    } else {
        alert('You liv in the ' + userSity);
    }
}


const userFavoriteSport = prompt('Enter your favorite sport');
if (!userFavoriteSport) {
    alert('It is a pity that you did not want to enter your favorite sport(');
} else {
    if (userFavoriteSport === 'Boxing') {
        alert('Cool! You want to be Alexandr Usik?');
    } else if (userFavoriteSport === 'Football') {
        alert('Cool! You want to be Chrishtiano Ronaldo?');
    } else if (userFavoriteSport === 'MMA') {
        alert('Cool! You want to be Anderson Silva?');
    } else {
        alert('Cool! Wary good!');
    }
}


