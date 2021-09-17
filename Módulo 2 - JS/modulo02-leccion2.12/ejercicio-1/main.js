'use strict';

const numbers = [1, 2, 3, 4];
console.log(numbers);

const list = document.querySelector('.items');

for (let i = 0; i < numbers.length; i++) {
	const newItem = document.createElement('li');
	const newContent = document.createTextNode(`${numbers[i]}`);
	newItem.appendChild(newContent);
	console.log(newItem);
	list.appendChild(newItem);
}
