"use strict";
const task = document.getElementById('task');
const taskList = document.getElementById('taskList');
const form = document.getElementById('form');
document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting
        addTask();
    });
    function addTask() {
        if (task.value.trim() === "") {
            alert("You must write something!");
        }
        else {
            let li = document.createElement('li');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(task.value));
            taskList.appendChild(li);
            task.value = ""; // Clear the input field
        }
    }
});
