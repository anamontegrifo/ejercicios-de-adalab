import { useState } from 'react';
import '../styles/App.scss';

function App() {
	const [numberA, setNumberA] = useState(0);
	const [numberB, setNumberB] = useState(0);
	const [operator, setOperator] = useState('sum');

	const handleChangeOperator = (ev) => {
		const newOperator = ev.currentTarget.value;
		setOperator(newOperator);
	};

	const handleNumberA = (ev) => {
		const newValue = ev.currentTarget.value;
		setNumberA(parseInt(newValue));
	};

	const handleNumberB = (ev) => {
		const newValue = ev.currentTarget.value;
		setNumberB(parseInt(newValue));
	};

	/*- -  Esto es equivalente al operador ternario de abajo - -*/
	// let total;
	// let operatorName;

	// if (operator === 'sum') {
	// 	total = numberA + numberB;
	// 	operatorName = 'suma';
	// } else {
	// 	total = numberA - numberB;
	// 	operatorName = 'resta';
	// }

	const total = operator === 'sum' ? numberA + numberB : numberA - numberB;
	const operatorName = operator === 'sum' ? 'suma' : 'resta';

	const handleReset = (ev) => {
		setNumberA(0);
		setNumberB(0);
		setOperator('sum');
	};

	return (
		<div>
			<h1>La calculadora:</h1>
			<form className="formContainer">
				<select
					class="selector"
					name="operator"
					id="operator"
					value={operator}
					onChange={handleChangeOperator}
				>
					<option value="sum">Sumar</option>
					<option value="subs">Restar</option>
				</select>
				<label>
					Escribe un número:
					<input
						type="number"
						name="name"
						onChange={handleNumberA}
						value={numberA}
					/>
				</label>
				<label>
					Escribe otro número:
					<input
						type="number"
						name="email"
						onChange={handleNumberB}
						value={numberB}
					/>
				</label>
			</form>
			<p>
				La {operatorName} de <strong>{numberA}</strong> y{' '}
				<strong>{numberB}</strong> es
				<strong> {total}</strong>.
			</p>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
}

export default App;
