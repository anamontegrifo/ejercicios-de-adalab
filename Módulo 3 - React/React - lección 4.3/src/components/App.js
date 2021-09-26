// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
	// Estados

	const [series, setSeries] = useState([
		{ id: '123', isFavorite: false, name: 'Juego de tronos' },
		{ id: '456', isFavorite: false, name: 'Las chicas Gilmore' },
		{ id: '678', isFavorite: false, name: 'Gambita de Dama' },
	]);
	const [searchName, setSearchName] = useState('');
	const [searchIsFavorite, setSearchIsFavorite] = useState(false);

	// Eventos

	const handleFavorite = (ev) => {
		const clickedSerieId = ev.currentTarget.id; //id de la serie clickada
		const foundSerie = series.find((serie) => serie.id === clickedSerieId); //le pedimos que nos busque la serie cuyo id coincida con el id de la serie clickada
		foundSerie.isFavorite = !foundSerie.isFavorite; //nos cambia el estado al contrario al existente de la serie encontrada
		setSeries([...series]); //Guardamos los cambios en la variable de estado
	};

	const handleSearchName = (ev) => {
		setSearchName(ev.target.value); //búsqueda en el input
	};

	const handleSearchIsFavorite = (ev) => {
		setSearchIsFavorite(ev.target.checked); //checkbox marcado: true o false
	};

	// Funciones de renderizado

	const renderSeries = () => {
		return (
			series
				// Filtramos por nombre, nos muestra las series que incluyen en el título la búsqueda que hacemos en el input
				.filter((serie) => {
					return serie.name.toLowerCase().includes(searchName.toLowerCase());
				})
				// Filtramos por favorito, si el checkbox está marcado nos devuelve las series cuyo campo isFavorite es true.
				.filter((serie) => {
					if (searchIsFavorite === true) {
						return serie.isFavorite === true;
					} else {
						return true;
					}
				})
				// Mapeamos, imprimimos la estructura HTML después de los filtros
				.map((serie) => {
					return (
						<li key={serie.id} id={serie.id} onClick={handleFavorite}>
							<h2>{serie.name}</h2>
							<p>Es mi serie favorita: {serie.isFavorite ? 'Sí' : 'No'}</p>
						</li>
					);
				})
		);
	};

	return (
		<div>
			<h1>Lista de series:</h1>

			<ul>{renderSeries()}</ul>

			<form>
				<label htmlFor="searchName">Buscar por nombre de serie</label>
				<input
					type="text"
					id="searchName"
					value={searchName}
					onChange={handleSearchName}
				/>
				<label htmlFor="searchIsFavorite">Mostrar solo las favoritas</label>
				<input
					type="checkbox"
					id="searchIsFavorite"
					checked={searchIsFavorite}
					onChange={handleSearchIsFavorite}
				/>
			</form>
		</div>
	);
};

export default App;
