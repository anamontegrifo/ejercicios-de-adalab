import { useState } from 'react';
import '../styles/App.scss';

function App() {
	const [cebolla, setCebolla] = useState('');
	const [huevos, setHuevos] = useState('');
	const [patatas, setPatatas] = useState('');
	const [nueces, setNueces] = useState('');
	const [macarrones, setMacarrones] = useState('');
	const [cerveza, setCerveza] = useState('');

	const handleTortilla = (event) => {
		if (event.target.id === 'cebolla') {
			setCebolla(event.target.checked);
		} else if (event.target.id === 'huevos') {
			setHuevos(event.target.checked);
		} else if (event.target.id === 'patatas') {
			setPatatas(event.target.checked);
		} else if (event.target.id === 'nueces') {
			setNueces(event.target.checked);
		} else if (event.target.id === 'macarrones') {
			setMacarrones(event.target.checked);
		} else if (event.target.id === 'cerveza') {
			setCerveza(event.target.checked);
		}
	};
	const recipe = () => {
		if (cebolla && huevos && patatas && !nueces && !macarrones && !cerveza) {
			return 'Eres una persona concebollista';
		} else {
			return 'Eres un robot sin paladar';
		}
	};

	return (
		<div>
			<h1>Selecciona los ingredientes de la tortilla de patata</h1>

			<form className="formContainer" action="">
				<label htmlFor="macarrones">
					<input
						onChange={handleTortilla}
						type="checkbox"
						value="noRecipe"
						name="ing"
						id="macarrones"
					/>
					Macarrones
				</label>

				<label htmlFor="patatas">
					<input
						onChange={handleTortilla}
						type="checkbox"
						value="recipe"
						name="ing"
						id="patatas"
					/>
					Patatas
				</label>
				<label htmlFor="nueces">
					<input
						onChange={handleTortilla}
						type="checkbox"
						value="noRecipe"
						name="ing"
						id="nueces"
					/>
					Nueces
				</label>
				<label htmlFor="huevos">
					<input
						onChange={handleTortilla}
						type="checkbox"
						value="recipe"
						name="ing"
						id="huevos"
					/>
					Huevos
				</label>
				<label htmlFor="cebolla">
					<input
						onChange={handleTortilla}
						type="checkbox"
						value="recipe"
						name="ing"
						id="cebolla"
					/>
					Cebolla
				</label>
				<label htmlFor="cerveza">
					<input
						onChange={handleTortilla}
						type="checkbox"
						value="noRecipe"
						name="ing"
						id="cerveza"
					/>
					Cerveza
				</label>
			</form>

			<p>{recipe()}</p>
		</div>
	);
}

export default App;
