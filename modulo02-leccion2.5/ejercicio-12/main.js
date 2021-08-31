'use strict';

const teacherProfile = document.querySelector('.teachers');

function changeStyle(event) {

    if (event.target.classList.contains('teacher')) {
        event.target.classList.toggle('teacher--selected');
    }
    if (event.target.classList.contains('favorite')) {

        if (event.target.innerHTML === 'Añadir') {
            event.target.innerHTML = 'Quitar';
        }
        else {
            event.target.innerHTML = 'Añadir';
        }
    }
}

teacherProfile.addEventListener('click', changeStyle);

