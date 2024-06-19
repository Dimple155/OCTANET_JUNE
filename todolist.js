
function addTask() {
    const taskInput = document.getElementById('task');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');
    const dueDateInput = document.getElementById('due-date');

    const taskText = taskInput.value;
    const priority = priorityInput.value;
    const category = categoryInput.value;
    const dueDate = dueDateInput.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    listItem.innerHTML = `
        <span>${taskText} - ${priority} - ${category} - ${dueDate}</span>
        <button class="complete" onclick="completeTask(this)">Complete</button>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(listItem);

    taskInput.value = '';
    priorityInput.value = 'medium';
    categoryInput.value = 'math';
    dueDateInput.value = '';
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}