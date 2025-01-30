document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".js--form");
    const input = document.querySelector(".js--form__input");
    const todoList = document.querySelector(".js--todos-wrapper");

    // Функція отримання завдань з localStorage
    function getTodos() {
        return JSON.parse(localStorage.getItem("todos")) || [];
    }

    // Функція збереження завдань у localStorage
    function saveTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // Функція створення HTML-елемента для завдання
    function createTodoElement(todo) {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        if (todo.completed) li.classList.add("todo-item--checked");

        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? "checked" : ""}>
            <span class="todo-item__description">${todo.text}</span>
            <button class="todo-item__delete">Видалити</button>
        `;

        // Обробник кліку на чекбокс
        li.querySelector("input").addEventListener("change", () => {
            todo.completed = !todo.completed;
            saveTodos(getTodos().map(t => t.text === todo.text ? todo : t));
            li.classList.toggle("todo-item--checked");
        });

        // Обробник кліку на кнопку "Видалити"
        li.querySelector(".todo-item__delete").addEventListener("click", () => {
            const updatedTodos = getTodos().filter(t => t.text !== todo.text);
            saveTodos(updatedTodos);
            li.remove();
        });

        return li;
    }

    // Відновлення списку завдань при завантаженні сторінки
    function renderTodos() {
        todoList.innerHTML = "";
        getTodos().forEach(todo => {
            todoList.appendChild(createTodoElement(todo));
        });
    }

    // Додавання нового завдання
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const text = input.value.trim();
        if (text === "") return;

        const todos = getTodos();
        const newTodo = { text, completed: false };
        todos.push(newTodo);
        saveTodos(todos);

        todoList.appendChild(createTodoElement(newTodo));
        input.value = "";
    });

    renderTodos(); // Відображення завдань при завантаженні сторінки
});
