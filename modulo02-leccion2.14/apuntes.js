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

//CLEARINTERVAL

//en este ejemplo el contador para a los 10 segundos
let count = 0;
let temp;

const increment = () => {
	count++;
	const time3 = document.querySelector('.time3');
	time3.innerHTML = count;
	if (count === 10) {
		clearInterval(temp);
	}
};
temp = setInterval(increment, 1000);
