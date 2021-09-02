'use strict';
const howManyTasks = document.querySelector('.js-tasks');
const list = document.querySelector('.js-list');
const listInput = document.querySelector('.js-listInput');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false
    },
    { name: 'Recoger setas en el campo', completed: true },

];

howManyTasks.innerHTML = `En el listado hay ${tasks.length} tareas.`

for (const data of tasks) {

    //esto equivale a (data.completed === true)
    if (data.completed) {
        const html = `<li class="completed">${data.name}</li> `;
        list.innerHTML += html;
    } else {
        const html = `<li>${data.name}</li> `;
        list.innerHTML += html;
    }
}

for (const data of tasks) {
    //esto equivale a (data.completed === true)
    if (data.completed) {
        const html = `<li class="completed">${data.name}<input type="checkbox" value="checked" checked></li>`;
        listInput.innerHTML += html;
    } else {
        const html = `<li>${data.name}<input type="checkbox" value=""></li>`;
        listInput.innerHTML += html;
    }
}


function handleComplete(ev) {

    console.log(ev.currentTarget);
    console.log(ev.target);

    ev.target.classList.toggle('completed');
}
list.addEventListener('click', handleComplete);
listInput.addEventListener('click', handleComplete);














