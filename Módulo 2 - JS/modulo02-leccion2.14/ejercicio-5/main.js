'use strict';

//1º opción
let counter = 0;
let temp;
let grape = '';
let timeArea = document.querySelector('.js-time');
let grapeArea = document.querySelector('.js-grape');

const incrementAndShowCounter = () => {
	counter++;
	grape += '🍇 ';
	const time = document.querySelector('.js-time');
	time.innerHTML = counter;
	grapeArea.innerHTML = grape;

	if (counter === 12) {
		clearInterval(temp);
	}
};
temp = setInterval(incrementAndShowCounter, 1000);

//2º opción
// let counter = 0;
// let grape = ' ';
// let timeArea = document.querySelector('.js-time');
// let grapeArea = document.querySelector('.js-grape');

// const incrementAndShowCounter = setInterval(function () {
// 	timeArea.innerHTML = counter;
// 	grapeArea.innerHTML = grape;
// 	counter++;
// 	grape += '🍇 ';
// 	if (counter > 12) {
// 		clearInterval(incrementAndShowCounter);
// 	}
// }, 1000);
