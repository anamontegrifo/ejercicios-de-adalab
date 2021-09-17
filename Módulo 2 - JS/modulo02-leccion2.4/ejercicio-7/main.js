'use strict';

//Ejercicio 7

function getEl(selector) {
	const shortHand = document.querySelector(selector);

	if (shortHand === null) {
		console.error(
			`No existe ningún elemento con clase, id o tag llamado ${shortHand}`
		);
	} else {
		return shortHand;
	}
}

let textEl = getEl('.text');
let newNumber = parseInt(textEl.innerHTML);

textEl.innerHTML = 33;
newNumber = textEl.innerHTML;

console.log(newNumber);

function oddAndEven(a) {
	if (a % 2 === 0) {
		console.log(`${a} is an even number`);
	} else {
		console.log(`${a} is not an even number`);
	}
}
oddAndEven(newNumber);
