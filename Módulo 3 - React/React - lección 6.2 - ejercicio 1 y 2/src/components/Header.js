import Link from './Link';

const Header = () => {
	return (
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
				<ul className="nav">
					<Link
						href="https://adalab.es/blog/"
						title="Acceso a blog"
						text="blog"
						openInNewTab={true}
					/>
					<Link
						href="https://adalab.es/contacto/"
						title="Acceso a contacto"
						text="contacto"
						openInNewTab={false}
					/>
				</ul>
			</nav>
			<nav>
				<ul className="nav">
					<Link
						href="https://adalab.es/blog/"
						title="Acceso a blog"
						text="quiénes somos"
						openInNewTab={true}
					/>
					<Link
						href="https://adalab.es/contacto/"
						title="Acceso a contacto"
						text="contacto"
						openInNewTab={false}
					/>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
