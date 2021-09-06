'use strict';

//Ejemplo de sintaxis de método POST
const data = {
	subject: inputSubject.value,
	to: inputTo.value,
	bodyEmail: textArea.value,
};

fetch('http://api.gmail.com/emails', {
	method: 'POST',
	headers: {
		'Content-type': 'application/json',
	},
	body: JSON.stringify(data),
})
	.then()
	.then();
