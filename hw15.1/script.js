const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todoList = document.querySelector(".js--todos-wrapper");


function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}


function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}


function createTodoElement(todo) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (todo.completed) li.classList.add("todo-item--checked");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = !todo.completed;
        saveTodos(getTodos().map(t => t.text === todo.text ? todo : t));
        li.classList.toggle("todo-item--checked");
    });

    const span = document.createElement("span");
    span.classList.add("todo-item__description");
    span.textContent = todo.text;

    const button = document.createElement("button");
    button.classList.add("todo-item__delete");
    button.textContent = "Видалити";
    button.addEventListener("click", () => {
        const updatedTodos = getTodos().filter(t => t.text !== todo.text);
        saveTodos(updatedTodos);
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);

    return li;
}


function renderTodos() {
    todoList.textContent = "";
    getTodos().forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const todos = getTodos();
    const newTodo = { text, completed: false };
    todos.push(newTodo);
    saveTodos(todos);

    todoList.appendChild(createTodoElement(newTodo));
    input.value = "";
});

renderTodos();
