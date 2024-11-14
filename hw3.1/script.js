// Створити репозиторій із файлом index.html.
//     Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. Використовуючи оператор typeof та console.log

const someString = 'someString';
console.log(someString);
console.log(typeof someString); // string

const someNumber = 123;
console.log(someNumber);
console.log(typeof someNumber); // number

const nanExample = NaN;
console.log(nanExample);
console.log(typeof someNumber); // number

const booleanExample = true;
console.log(booleanExample);
console.log(typeof booleanExample); // boolean

const undefinedExample = undefined;
console.log(undefinedExample);
console.log(typeof undefinedExample); // undefined

const bigIntExample = 253n;
console.log(bigIntExample);
console.log(typeof bigIntExample); // bigInt

const symbolExample = Symbol('id');
console.log(symbolExample);
console.log(typeof symbolExample); // Symbol

const nullExample = null;
console.log(nullExample);
console.log(typeof nullExample); //null

const user = {
    login: 'login',
    password: 'password',
    sayHello: function () {
        console.log('Hello');
    }
}; // object
console.log(user);
console.log(typeof user);
user.sayHello();