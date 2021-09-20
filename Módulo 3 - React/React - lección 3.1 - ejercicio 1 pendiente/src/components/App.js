import { useState } from 'react';
import '../styles/App.scss';

function App() {
	const [paragraph, setParagraph] = useState('Eres un robot sin paladar');
	const [ingredient, setIngredient] = useState('');

	const handleTortilla = (event) => {
		setIngredient(event.currentTarget.id);
		console.log(ingredient);

		if (event.currentTarget.checked === false) {
			setParagraph('Eres un robot sin paladar');
		} else {
			switch (ingredient) {
				case 'cebolla':
				case 'huevos':
				case 'patatas':
					setParagraph('Eres una persona concebollista');
					break;
				default:
					setParagraph('Eres un robot sin paladar');
			}
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

			<p>{paragraph}</p>
		</div>
	);
}

export default App;
