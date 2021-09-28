import { Link, Route } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Route path="/settings">
				<div className="mesagge">Zona no apta para manazas</div>
			</Route>
			<Route path="/projects">
				<div className="mesagge">Zona no apta para manazas</div>
			</Route>

			<nav className="nav">
				<img
					className="nav-Image"
					src="https://beta.adalab.es/resources/images/adalab-logo-128x128.png"
					alt="logo adalab"
				/>
				<ul className="nav-List">
					<li>
						<Link className="nav-List__item" to="/">
							Overview
						</Link>
					</li>
					<li>
						<Link className="nav-List__item" to="/repositories">
							Repositories
						</Link>
					</li>
					<li>
						<Link className="nav-List__item" to="/packages">
							Packages
						</Link>
					</li>
					<li>
						<Link className="nav-List__item" to="/people">
							People
						</Link>
					</li>
					<li>
						<Link className="nav-List__item" to="/teams">
							Teams
						</Link>
					</li>
					<li>
						<Link className="nav-List__item" to="/projects">
							Projects
						</Link>
					</li>
					<li>
						<Link className="nav-List__item" to="/settings">
							Settings
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Header;
