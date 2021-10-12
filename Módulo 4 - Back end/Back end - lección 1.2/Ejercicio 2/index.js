const fs = require('fs');

const myObject = {
	user: 'Mari Carmen',
	email: 'mari@gmail.com',
	age: 28,
};

console.log(JSON.stringify(myObject));
const string = JSON.stringify(myObject);

console.log(myObject);

const handleWriteFile = (err) => {
	if (err) {
		console.log('Error', err);
	} else {
		console.log('el archivo se ha guardado correctamente');
	}
};
fs.writeFile('./output.txt', string, handleWriteFile);
