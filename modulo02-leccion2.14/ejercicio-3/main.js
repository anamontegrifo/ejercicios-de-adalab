'use strict';

let counter = 1;
const textArea = document.querySelector('.js-text');

const howLongAgo = setInterval(function () {
	textArea.innerHTML = `Escrito hace ${counter} segundos`;
	counter++;
	if (counter > 60) {
		textArea.innerHTML = `Escrito hace un minuto`;
		clearInterval(howLongAgo);
	}
}, 1000);
