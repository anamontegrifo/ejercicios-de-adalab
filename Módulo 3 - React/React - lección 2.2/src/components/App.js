import '../styles/App.css';

function App() {
	const handleInput = (event) => {
		console.log(event.key);
	};

	const preventEnter = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={preventEnter} action="">
				<input type="text" name="name" id="name" onKeyUp={handleInput} />
			</form>
		</div>
	);
}

export default App;
