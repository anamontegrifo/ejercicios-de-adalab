'use strict';

const users = [
	{ name: 'María', isPremium: false, pin: 2389 },
	{ name: 'Lucía', isPremium: true, pin: 2384 },
	{ name: 'Susana', isPremium: true, pin: 2837 },
	{ name: 'Rocío', isPremium: false, pin: 5232 },
	{ name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const nameEvenPins = users
	.filter((user) => {
		if (user.pin % 2 === 0) {
			return user;
		}
	})
	.map((user) => user.name);

console.log(nameEvenPins);

// const evenPins = users.filter((user) => {
// 	if (user.pin % 2 === 0) {
// 		return user;
// 	}
// });
// console.log(evenPins);

// const nameEvenPins = evenPins.map((user) => user.name);
// console.log(nameEvenPins);

// const longNames = names
// 	.filter((name) => name.length > 5)
// 	.map((name) => name.toUpperCase());
