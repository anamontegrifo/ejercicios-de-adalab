'use strict';

const teacherProfile = document.querySelector('.teachers');

function changeStyle(event) {
	const child = event.target;
	const teacher = child.parentNode;

	teacher.classList.toggle('teacher--selected');

	const text = teacher.querySelector('.favorite');

	console.log(child);
	console.log(teacher);
	console.log(text);

	if (text.innerHTML === 'Añadir') {
		text.innerHTML = 'Quitar';
	} else {
		text.innerHTML = 'Añadir';
	}
}

teacherProfile.addEventListener('click', changeStyle);
