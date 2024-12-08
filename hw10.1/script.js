
// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.

function User (name, surname, age, address) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.address = address;
    this.getUserData = function () {
        return `Name: ${this.name};\nsurname: ${this.surname};\nage: ${this.age};\naddress: ${this.address};`;
    }
}

const user = new User('Alexandr', 'Kindratishin', 25, 'Dnipro');

console.log(user.getUserData());

const user2 = new User('Ivan', 'Romanov', 33, 'Lviv');

console.log(user2.getUserData())