'use strict';

const users = [
	{ name: 'María', isPremium: false },
	{ name: 'Lucía', isPremium: true },
	{ name: 'Susana', isPremium: true },
	{ name: 'Rocío', isPremium: false },
	{ name: 'Inmaculada', isPremium: false },
];

const welcome = (one) => {
	if (one.isPremium) {
		return `Bienvenida ${one.name}. Gracias por confiar en nosotros.`;
	} else {
		return `Bienvenida ${one.name}.`;
	}
};

const newArray = users.map(welcome);
console.log(newArray);
