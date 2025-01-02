const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const completionMessage = document.getElementById('completionMessage');

// Function to check if all tasks are completed
function checkAllTasksCompleted() {
    const tasks = document.querySelectorAll('.todo-item');
    const completedTasks = document.querySelectorAll('.todo-item.completed');

    if (tasks.length > 0 && tasks.length === completedTasks.length) {
        completionMessage.textContent = 'All tasks are completed! Well done!✅';
    } else {
        completionMessage.textContent = '';
    }
}

// Function to add a new task
addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');

        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.addEventListener('click', () => {
            listItem.classList.toggle('completed');
            checkAllTasksCompleted();
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete 🗑';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
            checkAllTasksCompleted();
        });

        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);

        todoInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

// Allow Enter key to add tasks
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});