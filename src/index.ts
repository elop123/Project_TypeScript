// //import ITask from './iTasks';
// import {v4 as uuidV4} from "uuid";

// type Task ={
//     id:string, 
//     title:string, 
//     completed:boolean, 
//     createdAt:Date}

// let tasks: Task[] = [];

// const input = document.getElementById('task') as HTMLInputElement;
// const addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;
// const list = document.getElementById('taskList') as HTMLUListElement;
// const form = document.getElementById('form')as HTMLFormElement;

// form.addEventListener('submit', e=>{
//     e.preventDefault();


// if(input.value== "" || input.value == null) 
//     return

//   const newTask:Task ={
//     id:uuidV4(),
//     title:input.value,
//     completed:false,
//     createdAt: new Date(),
//   }
// addTaskItem(newTask);
//   })

// function addTaskItem(task:Task){
//     const item = document.createElement('li');
//     const label =document.createElement('label');
//     const checkbox = document.createElement('input');
//     checkbox.type = "checkbox"
//     label.append(checkbox, task.title)
//     item.append(label)
//     list.append(item)
// }

//import { v4 as uuidv4 } from 'uuid';

interface Task {
    id: string;
    title: string;
    completed: boolean;
}



let tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

const form = document.getElementById('form') as HTMLFormElement;
const taskInput = document.getElementById('task') as HTMLInputElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskTitle = taskInput.value.trim();
    if (taskTitle === '') return;

    const newTask: Task = {
        id: string,
        title: taskTitle,
        completed: false,
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = '';
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} id="${task.id}">
            <label for="${task.id}" class="${task.completed ? 'completed' : ''}">${task.title}</label>
            <button class="delete-btn">❌</button>
        `;
        const checkbox = taskItem.querySelector('input[type="checkbox"]');
        const deleteBtn = taskItem.querySelector('.delete-btn');

        checkbox?.addEventListener('change', () => {
            task.completed = !task.completed;
            renderTasks();
        });

        deleteBtn?.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        });

        taskList.appendChild(taskItem);
    });
}
