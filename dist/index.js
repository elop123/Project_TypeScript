"use strict";
// //import ITask from './iTasks';
// import {v4 as uuidV4} from "uuid";
Object.defineProperty(exports, "__esModule", { value: true });
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
const uuid_1 = require("uuid");
let tasks = [];
const form = document.getElementById('form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskTitle = taskInput.value.trim();
    if (taskTitle === '')
        return;
    const newTask = {
        id: (0, uuid_1.v4)(),
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
        checkbox === null || checkbox === void 0 ? void 0 : checkbox.addEventListener('change', () => {
            task.completed = !task.completed;
            renderTasks();
        });
        deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        });
        taskList.appendChild(taskItem);
    });
}
