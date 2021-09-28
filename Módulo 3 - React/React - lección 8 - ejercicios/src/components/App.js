// Fichero src/components/App.js (código con Switch)
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Header from './Header';

const App = () => {
	return (
		<div className="body">
			<Header />

			<Switch>
				<Route exact path="/">
					<h2>Página de inicio</h2>
				</Route>

				<Route path="/repositories">
					<h2>Página de repositorios</h2>
				</Route>

				<Route path="/packages">
					<h2>Página de paquetes</h2>
				</Route>

				<Route path="/people">
					<h2>Página de personas</h2>
				</Route>

				<Route path="/teams">
					<h2>Página de equipos</h2>
				</Route>

				<Route path="/projects">
					<h2>Página de proyectos</h2>
				</Route>
				<Route path="/settings">
					<h2>Página de ajustes</h2>
				</Route>
				<Route>
					<NotFoundPage />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
