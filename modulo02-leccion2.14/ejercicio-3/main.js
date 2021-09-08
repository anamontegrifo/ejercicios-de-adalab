'use strict';

//1º opción

let counter = 0;
const textArea = document.querySelector('.js-text');

const howLongAgo = () => {
	counter++;
	textArea.innerHTML = `Escrito hace ${counter} segundos`;
	if (counter === 60) {
		textArea.innerHTML = `Escrito hace un minuto`;
		clearInterval(temp);
	}
};

temp = setInterval(howLongAgo, 1000);

//2º opción
// let counter = 1;
// const textArea = document.querySelector('.js-text');

// const howLongAgo = setInterval(function () {
// 	textArea.innerHTML = `Escrito hace ${counter} segundos`;
// 	counter++;
// 	if (counter > 60) {
// 		textArea.innerHTML = `Escrito hace un minuto`;
// 		clearInterval(howLongAgo);
// 	}
// }, 1000);
