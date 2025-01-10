const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = '';
    } else {
        alert('Будь ласка, введіть текст завдання.');
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
});