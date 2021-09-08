'use strict';

let counter = 0;

const incrementCounter = () => {
	counter += 2;
	const time = document.querySelector('.js-time');
	time.innerHTML = counter;
};
setInterval(incrementCounter, 1000);
