import '../styles/App.scss';
import logo from '../images/adalab-logo-155x61.png';
console.log(logo);

function App() {
	return (
		<div>
			<header className="header-section">
				<a href="https://adalab.es/">
					<img
						className="logo-adalab"
						title="logo Adalab"
						// src={logo} //desde archivo local
						src="https://beta.adalab.es/resources/images/adalab-logo-128x128.png"
						alt="logo adalab"
					/>
				</a>
				<nav>
					<ul className="nav-section">
						<li className="li-items nav__items">
							<a
								className="nav__link"
								href="https://adalab.es/blog/"
								title="Acceso a blog"
								target="_blank"
								rel="noreferrer"
							>
								blog
							</a>
						</li>
						<li className="li-items">
							<a
								className="nav-link"
								href="https://adalab.es/contacto/"
								title="Acceso a contacto"
								target="_blank"
								rel="noreferrer"
							>
								contacto
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<main className="main-section">
				<h1 className="main-text">Creando diversidad digital</h1>
			</main>
		</div>
	);
}

export default App;
