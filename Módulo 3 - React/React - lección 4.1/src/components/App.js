// Fichero src/components/App.js

function App() {
	const list = [];

	for (let index = 0; index < 10; index++) {
		list.push(<li>Elemento #{index}</li>);
	}

	// map
	const adalabers = ['María', 'Lucía', 'Sofía', 'Nerea'];

	const renderAdalabers = () => {
		return adalabers.map((adalaber, index) => {
			return (
				<li key={index}>
					{/* Aquí podemos poner todas las etiquetas que queramos */}
					<span className="adalaber__prefix">El nombre de la alumna es:</span>
					<strong className="adalaber__name">{adalaber}</strong>
				</li>
			);
		});
	};

	return (
		<div>
			<h1>Trabajando con Arrays</h1>
			<ul>{list}</ul>
			<h1>Lista de Adalabers</h1>
			<ul>{renderAdalabers()}</ul>
		</div>
	);
}

export default App;
