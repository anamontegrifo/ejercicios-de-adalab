'use strict';
const howManyTasks = document.querySelector('.js-tasks');
const list = document.querySelector('.js-list');

let tasks = [];


fetch('http://api.igarrido.es/tasks.json')
    .then(response => response.json()) //esto equivale a .then((response)=>{return response.json();})
    .then((jsonData) => {
        for (const data of jsonData) {
            //esto equivale a (data.completed === true)
            if (data.completed) {
                const html = `<li class="lineTrough">${data.name}</li> `;
                list.innerHTML += html;
            } else {
                const html = `<li>${data.name}</li> `;
                list.innerHTML += html;
            }
        }
    });
























