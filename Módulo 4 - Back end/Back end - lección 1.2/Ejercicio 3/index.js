const fs = require('fs');

let jsonData = {};
let fileContent = '';

const handleReadFile = (err, fileContent) => {
	if (err) {
		console.log('Error:', err);
	} else {
		jsonData = JSON.parse(fileContent);
		jsonData.user = 'Sara';
		fileContent = JSON.stringify(jsonData);
		console.log('Contenido del fichero en formato objeto:', jsonData);
		console.log(fileContent);

		const handleWriteFile = (err) => {
			if (err) {
				console.log('Error:', err);
			} else {
				console.log('The file has been saved!');
			}
		};
		fs.writeFile('./output-file.json', fileContent, handleWriteFile);
	}
};

fs.readFile('./input-file.json', 'utf8', handleReadFile);
