
const task = document.getElementById('task') as HTMLInputElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;
const form = document.getElementById('form') as HTMLFormElement;

document.addEventListener('DOMContentLoaded', function() {

    form.addEventListener('submit', function(event: Event) {
        event.preventDefault(); // Prevent form from submitting

        addTask();
    });

    function addTask(): void {
        if (task.value.trim() === "") {
            alert("You must write something!");
        } else {
            let li = document.createElement('li');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            let span = document.createElement('span');
            span.innerHTML = task.value;

            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(task.value));

            taskList.appendChild(li);
            li.appendChild(span);
           
             task.value = ""; // Clear the input field
        }
    }
});
