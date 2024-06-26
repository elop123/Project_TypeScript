const task = document.getElementById('task');
const taskList = document.getElementById('taskList');
const form = document.getElementById('form');



document.addEventListener('DOMContentLoaded', function() {
    

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        addTask();
    });

    function addTask() {
        if (task.value.trim() === "") {
            alert("You must write something!");
        } else {
            let li = document.createElement('li');
            li.innerHTML = task.value;
            taskList.appendChild(li);
            task.value = ""; // Clear the input field
        }
    }
});
