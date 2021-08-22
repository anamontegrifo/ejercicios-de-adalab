'use strict';
const profileA = document.querySelector('.teacher--isra');
const profileB = document.querySelector('.teacher--tuerto');
const profileC = document.querySelector('.teacher--nasi');

function changeStyle(event) {
    console.log('Elemento clickado que lanza el evento', event.target);
    console.log('Elemento que escucha el evento', event.currentTarget);
    const selectedTeacher = event.currentTarget;
    const addOrRemove = selectedTeacher.querySelector('.favorite');

    selectedTeacher.classList.toggle('teacher--selected');
    if (addOrRemove.innerHTML === 'Añadir') {
        addOrRemove.innerHTML = 'Quitar';
    }
    else {
        addOrRemove.innerHTML = 'Añadir';
    }
}

const teacherProfile = document.querySelector('.teacher');

teacherProfile.addEventListener('click', changeStyle);
