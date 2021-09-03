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
    ev.currentTarget.classList.toggle('completed');

}

function render() {
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
    const allInput = document.querySelectorAll('.js-li');
    console.log(allInput);

    for (const eachInput of allInput) {
        eachInput.addEventListener('click', handleCheckbox);

    }
}



























