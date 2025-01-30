class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null); // Масив відвідуваності (25 елементів)
    }


    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }


    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.log("Оцінка повинна бути від 0 до 100");
        }
    }


    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    }


    present() {
        let index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Відвідуваність вже заповнена!");
        }
    }


    absent() {
        let index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Відвідуваність вже заповнена!");
        }
    }


    getAttendanceRate() {
        let attendedClasses = this.attendance.filter(val => val === true).length;
        let totalClasses = this.attendance.filter(val => val !== null).length;
        return totalClasses === 0 ? 0 : attendedClasses / totalClasses;
    }


    summary() {
        let avgGrade = this.getAverageGrade();
        let avgAttendance = this.getAttendanceRate();

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}


const student1 = new Student("Іван", "Петров", 2002);
const student2 = new Student("Марія", "Коваленко", 2001);


student1.addGrade(95);
student1.addGrade(88);
student1.addGrade(92);

student2.addGrade(70);
student2.addGrade(85);
student2.addGrade(80);


student1.present();
student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.absent();
student2.present();


console.log(`${student1.firstName} ${student1.lastName}, Вік: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Відвідуваність: ${student1.getAttendanceRate()}`);
console.log(`Оцінка: ${student1.summary()}`);

console.log(`${student2.firstName} ${student2.lastName}, Вік: ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getAverageGrade()}`);
console.log(`Відвідуваність: ${student2.getAttendanceRate()}`);
console.log(`Оцінка: ${student2.summary()}`);
