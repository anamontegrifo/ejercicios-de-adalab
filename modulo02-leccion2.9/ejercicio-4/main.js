'use strict';
const howManyTasks = document.querySelector('.js-tasks');
const list = document.querySelector('.js-list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false
    }
];

howManyTasks.innerHTML = `En el listado hay ${tasks.length} tareas.`

function handleCheckbox(ev) {
    console.log(ev.target.parentNode.querySelector('label'));
    const labelSister = ev.target.parentNode.querySelector('label');
    labelSister.classList.toggle('completed');
}

for (const data of tasks) {
    if (data.completed) {
        const html = `<li><input type="checkbox" class="js-input" checked><label class="completed">${data.name}</label></li>`;
        list.innerHTML += html;
    } else {
        const html = `<li><input type="checkbox" class="js-input"><label>${data.name}</label></li> `;
        list.innerHTML += html;
    }
    const allInput = document.querySelectorAll('.js-input');

    for (const eachInput of allInput) {
        eachInput.addEventListener('click', handleCheckbox);
    }
}









