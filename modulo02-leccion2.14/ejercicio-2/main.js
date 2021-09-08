'use strict';

let counter = 0;
let grape = ' ';
let timeArea = document.querySelector('.js-time');
let grapeArea = document.querySelector('.js-grape');

const incrementAndShowCounter = setInterval(function () {
	timeArea.innerHTML = counter;
	grapeArea.innerHTML = grape;
	counter++;
	grape += '🍇 ';
	if (counter > 12) {
		clearInterval(incrementAndShowCounter);
	}
}, 1000);
