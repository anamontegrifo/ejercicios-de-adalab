'use strict';

const profileA = document.querySelector('.teacher--isra');
const profileB = document.querySelector('.teacher--tuerto');
const profileC = document.querySelector('.teacher--nasi');

function changeStyle(event) {
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

profileA.addEventListener('click', changeStyle);
profileB.addEventListener('click', changeStyle);
profileC.addEventListener('click', changeStyle);