const apiUrl = 'http://localhost:5001/api/todos';  // Заміни на свій серверний порт

async function loadTodos() {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    const todoList = document.getElementById('todo-list');

    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.textContent = todo.text;
        todoList.appendChild(li);
    });
}

document.getElementById('todo-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const todoText = document.getElementById('todo-input').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: todoText })
    });

    if (response.ok) {
        document.getElementById('todo-input').value = '';  // Очистити поле вводу
        loadTodos();
    } else {
        alert('Error adding todo');
    }
});

loadTodos();
