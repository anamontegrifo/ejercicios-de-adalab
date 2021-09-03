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
    }

];

howManyTasks.innerHTML = `En el listado hay ${tasks.length} tareas.`


function handleComplete(ev) {

    console.log(ev.currentTarget);
    console.log(ev.target);

    ev.target.classList.toggle('lineTrough');
}


//segunda parte



for (const data of tasks) {
    //esto equivale a (data.completed === true)
    if (data.completed) {
        const html = `<li class="completed js-li"><input type="checkbox" value="checked" checked><label>${data.name}</label></li>`;
        list.innerHTML += html;
    } else {
        const html = `<li class="js-li"><input type="checkbox" value="unchecked"><label>${data.name}</label></li> `;
        list.innerHTML += html;
    }
}
const itemTask = document.querySelector('.js-item');

function handleCheckbox(ev) {
    console.log(ev.currentTarget);
    console.log(ev.target);

    if (ev.target.value === 'checked') {
        ev.currentTarget.classList.toggle('lineTrough');
        ev.target.value = ('unchecked');


    } else if (ev.target.value === 'unchecked') {
        ev.currentTarget.classList.toggle('lineTrough');
        ev.target.value = ('checked');
    }
}

console.log(tasks);
list.addEventListener('click', handleComplete);
itemTask.addEventListener('click', handleCheckbox);














