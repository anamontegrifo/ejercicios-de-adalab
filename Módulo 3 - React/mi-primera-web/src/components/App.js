import logo from '../images/logo.svg';
import '../stylesheets/App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<p>Módulo 3.1 Ejercicio 1</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Aprende React
				</a>
			</header>
		</div>
	);
}

export default App;
