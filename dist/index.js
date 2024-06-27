"use strict";
const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');
const form = document.getElementById('form');
let tasks = [];
let taskId = 0;
document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting
        addTask();
    });
    function addTask() {
        const taskDescription = taskInput.value.trim();
        if (taskDescription === "") {
            alert("Please, write something!");
            return;
        }
        const newTask = {
            id: taskId++,
            title: taskDescription,
            completed: false
        };
        tasks.push(newTask);
        updateTasks();
        taskInput.value = "";
    }
    function updateTasks() {
        taskList.innerHTML = "";
        tasks.forEach(task => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => toggleTask(task.id));
            const span = document.createElement('span');
            span.innerText = task.title;
            if (task.completed) {
                span.style.textDecoration = "line-through";
            }
            else {
                span.style.textDecoration = "none";
            }
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
    function toggleTask(taskId) {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            updateTasks();
        }
    }
    function deleteTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        updateTasks();
    }
});
