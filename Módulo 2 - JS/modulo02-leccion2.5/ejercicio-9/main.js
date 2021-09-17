'use strict';

//------------------------------------------------------------------//
//Versión elemento por elemento

// const profileA = document.querySelector('.teacher--isra');
// const profileB = document.querySelector('.teacher--tuerto');
// const profileC = document.querySelector('.teacher--nasi');

// function changeStyle(event) {
// 	event.currentTarget.classList.toggle('teacher--selected');

// 	const addOrRemove = event.currentTarget.querySelector('.favorite');
// 	if (addOrRemove.innerHTML === 'Añadir') {
// 		addOrRemove.innerHTML = 'Quitar';
// 	} else {
// 		addOrRemove.innerHTML = 'Añadir';
// 	}
// }

// profileA.addEventListener('click', changeStyle);
// profileB.addEventListener('click', changeStyle);
// profileC.addEventListener('click', changeStyle);

//------------------------------------------------------------------//

//Versión con querySelectorAll
const list = document.querySelectorAll('.teacher');

function changeStyle(event) {
	const teacher = event.currentTarget;
	teacher.classList.toggle('teacher--selected');

	const addOrRemove = teacher.querySelector('.favorite');
	console.log(addOrRemove);
	if (addOrRemove.innerHTML === 'Añadir') {
		addOrRemove.innerHTML = 'Quitar';
	} else {
		addOrRemove.innerHTML = 'Añadir';
	}
}

for (const item of list) {
	item.addEventListener('click', changeStyle);
}
