'use strict';
const list = document.querySelector('.js-list');

let tasks = [];

fetch('http://api.igarrido.es/tasks.json')
    .then(response => response.json()) //esto equivale a .then((response)=>{return response.json();})
    .then((jsonData) => {
        tasks = jsonData;

        render();
    });


function handleCheckbox(ev) {
    console.log(ev.target.parentNode.querySelector('label'));
    const labelSister = ev.target.parentNode.querySelector('label');
    labelSister.classList.toggle('completed');
}

function render() {
    for (const data of tasks) {
        //esto equivale a (data.completed === true)
        if (data.completed) {

            const html = `<li><input type="checkbox" class="js-input" checked><label class="completed">${data.name}</label></li>`;
            list.innerHTML += html;
        } else {
            const html = `<li><input type="checkbox" class="js-input"><label>${data.name}</label></li> `;
            list.innerHTML += html;
        }
    }
    const allInput = document.querySelectorAll('.js-input');
    console.log(allInput);

    for (const eachInput of allInput) {
        eachInput.addEventListener('click', handleCheckbox);
    }
}



























