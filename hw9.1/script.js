// Дізнатись суму всіх зарплат користувачів:
// Об'єкт може містити невідому кількість департаментів та співробітників

const company = {
    sales: [
        {name: 'Jhon', selery: 1000},
        {name: 'Alice', selery: 600},
        {name: 'Bob', selery: 1200}
    ],
    development: {
        web: [
            {name: 'Peter', selery: 2000},
            {name: 'Alex', selery: 1800},
            {name: 'max', selery: 600}
        ],
        internals: [
            {name: 'Jack', selery: 1300}
        ]
    }
}


function sumSelery(data) {
    let sum = 0;
    if (Array.isArray(data)) {
        for (const item of data) {
            sum += item.selery;
        }
    } else if (typeof data === 'object' && data !== null) {
        for (const key in data) {
            sum += sumSelery(data[key]);
        }
    }
    return sum;
}

console.log(sumSelery(company));
