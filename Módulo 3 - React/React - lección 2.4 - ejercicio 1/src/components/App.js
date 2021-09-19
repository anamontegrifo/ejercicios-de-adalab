import { useState } from 'react';

function App() {
	let count = 0;
	const [number, setNumber] = useState(0);

	const handleAddCounter = () => {
		count = number + 1;
		setNumber(count);
	};

	const handleSubtractCounter = () => {
		count = number - 1;
		setNumber(count);
	};

	const handleReset = () => {
		count = 0;
		setNumber(count);
	};

	return (
		<div>
			<h1>Contador: {number}</h1>
			<button onClick={handleAddCounter}>Suma</button>
			<button onClick={handleSubtractCounter}>Resta</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
}

export default App;
