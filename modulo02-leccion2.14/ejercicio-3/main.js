'use strict';

let counter = 0;
const textArea = document.querySelector('.js-text');

const howLongAgo = () => {
	counter++;
	textArea.innerHTML = `Escrito hace ${counter} segundos`;
	if (counter >= 60) {
		textArea.innerHTML = `Escrito hace un minuto`;
	}
};
setInterval(howLongAgo, 1000);
