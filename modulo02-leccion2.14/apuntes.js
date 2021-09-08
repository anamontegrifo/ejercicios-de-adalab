'use strict';

//SETINTERVAL
let counter = 0;
let counter2 = 100;

//incremento
const incrementAndShowCounter = () => {
	counter++;
	const time = document.querySelector('.time');
	time.innerHTML = counter;
};
setInterval(incrementAndShowCounter, 1000);

//decremento
const decrementAndShowCounter = () => {
	counter2--;
	const time = document.querySelector('.time2');
	time.innerHTML = counter2;
};
setInterval(decrementAndShowCounter, 1000);

//SETTIMEOUT
const removeMsg = () => {
	const msg = document.querySelector('.msg');
	msg.innerHTML = '';
};

setTimeout(removeMsg, 6000);
