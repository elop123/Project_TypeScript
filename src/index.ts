interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const taskInput = document.getElementById('task') as HTMLInputElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;
const form = document.getElementById('form') as HTMLFormElement;

let tasks: Task[] = [];
let taskId = 0;

document.addEventListener('DOMContentLoaded', function() {
    form.addEventListener('submit', function(event: Event) {
        event.preventDefault(); // Prevent form from submitting
        addTask();
    });

    function addTask(): void {
        const taskDescription = taskInput.value.trim();
        if (taskDescription === "") {
            alert("Please, write something!");
            return;
        }

        const newTask: Task = {
            id: taskId++,
            title: taskDescription,
            completed: false
        };

        tasks.push(newTask);
        renderTasks();
        taskInput.value = ""; 
    }

    function renderTasks(): void {
        taskList.innerHTML = ""; // Clear existing tasks
        tasks.forEach(task => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => toggleTask(task.id));

            const span = document.createElement('span');
            span.innerText = task.title;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'deleteBtn';
            deleteButton.innerHTML = '<img src="src/images/delete.png" alt="Delete">';
            deleteButton.addEventListener('click', () => deleteTask(task.id));

            if (task.completed) {
                li.classList.add('completed');
            }

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }

    function toggleTask(taskId: number): void {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            renderTasks();
        }
    }

    function deleteTask(taskId: number): void {
        tasks = tasks.filter(task => task.id !== taskId);
        renderTasks();
    }
});
