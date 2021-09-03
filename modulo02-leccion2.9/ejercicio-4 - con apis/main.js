'use strict';
const list = document.querySelector('.js-list');

let tasks = [];

fetch('http://api.igarrido.es/tasks.json')
    .then(response => response.json()) //esto equivale a .then((response)=>{return response.json();})
    .then((jsonData) => {
        tasks = jsonData;

        render();
    });

function render() {
    for (const data of tasks) {
        //esto equivale a (data.completed === true)
        if (data.completed) {
            const html = `<li class="lineTrough js-item"><input type="checkbox" value="checked" checked>${data.name}</li>`;
            list.innerHTML += html;
        } else {
            const html = `<li class="js-item"><input type="checkbox" value="unchecked">${data.name}</li> `;
            list.innerHTML += html;
        }
    }
}

const itemTask = document.querySelectorAll('.js-item');
console.log(itemTask);

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



// for (const eachInput of allInput) {
//     eachInput.addEventListener('click, handleCheckbox');
// }





















