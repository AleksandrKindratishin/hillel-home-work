// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
//
//  Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
//
//     ladder.up();
//
// ladder.up();
//
// ladder.down();
//
// ladder.showStep(); // 1
//
// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
//
// ladder.up().up().down().showStep(); // 1
//
// Такий підхід широко використовується в бібліотеках JavaScript.


let ladder = {
    ladde: 0,
    up: function () {
        this.ladde += 1;
        return this;// підніматиме вас на одну сходинку
    },
    down: function () {
        this.ladde -= 1;
        return this// опускатиме вас на одну сходинку
    },
    showStep: function () {
        console.log(this.ladde);
        return this// показує поточну сходинку
    }
};


ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

ladder.up().up().down().showStep();

