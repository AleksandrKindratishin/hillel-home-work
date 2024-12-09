// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.


function Contacts({ id, name, phone, email }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts = []) {
    this.contacts = contacts;
}

Book.prototype.find = function (name) {
    return this.contacts.findIndex(contact => contact.name === name);
}

Book.prototype.add = function (contact) {
    this.contacts.push(contact);
}

Book.prototype.remove = function (id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
}

Book.prototype.update = function (id, newName) {
    this.contacts = this.contacts.map(contact =>
        contact.id === id ? { ...contact, name: newName } : contact
    );
}

const contact1 = new Contacts({ id: 1, name: 'Alexandr', phone: 123, email: 'sfsd@fsf.com' });
const contact2 = new Contacts({ id: 2, name: 'Pavel', phone: 321, email: 'gmbnmb@fsf.com' });

const book1 = new Book();
book1.add(contact1);
book1.add(contact2);
console.log(book1);
book1.remove(1);
console.log(book1);
book1.update(2, 'Vova');
console.log(book1);


