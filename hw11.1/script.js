function createMultiplicationTable(size) {
    const table = document.createElement('table'); // Створюємо таблицю
    const thead = document.createElement('thead'); // Створюємо заголовок
    const tbody = document.createElement('tbody'); // Створюємо тіло таблиці

    const headerRow = document.createElement('tr');
    const emptyCell = document.createElement('th');
    headerRow.appendChild(emptyCell);

    for (let i = 1; i <= size; i++) {
        const th = document.createElement('th');
        th.textContent = i;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    for (let i = 1; i <= size; i++) {
        const row = document.createElement('tr');

        // Заголовок рядка
        const rowHeader = document.createElement('th');
        rowHeader.textContent = i;
        row.appendChild(rowHeader);

        // Дані рядка
        for (let j = 1; j <= size; j++) {
            const cell = document.createElement('td');
            cell.textContent = i * j;
            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    return table;
}

const container = document.getElementById('multiplication-table');
const table = createMultiplicationTable(10);
container.appendChild(table);