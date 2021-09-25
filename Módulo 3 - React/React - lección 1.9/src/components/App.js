import '../styles/App.scss';
import arrow from '../images/ico-arrow.svg';
import down from '../images/ico-scroll-down.svg';
import menu from '../images/ico-menu.svg';

function App() {
	return (
		<div>
			<header className="header" id="header">
				n
				<nav>
					<a
						href="https://adalab.es/"
						className="header__menu"
						title="Acceso a Adalab"
						target="_blank"
						rel="noreferrer"
					>
						<img src={menu} alt="menu" />
					</a>
				</nav>
				<div className="header__hero wrapper">
					<h1 className="header__title">Anonymous proxy</h1>
					<p className="header__text">In hac habitasse platea dictumst.</p>
					<a href="#reasons" className="header__arrow" title="go to reasons">
						<img src={down} alt="arrow" />
					</a>
				</div>
			</header>

			<main className="main">
				<div className="wrapper">
					<section className="tips">
						<h2 className="tips__small">Insomnia tips</h2>
						<h3 className="tips__title">Looking through a window</h3>
						<p className="tips__text">
							Donec accumsan, nulla ut volutpat porttitor, quam odio tempus
							felis, at luctus ex diam nec lectus. Vivamus semper sodales
							rutrum.
						</p>
						<a
							href="https://adalab.es/"
							className="tips__button"
							title="Acceso a Adalab"
							target="_blank"
							rel="noreferrer"
						>
							Go
						</a>
					</section>
				</div>

				<section className="reasons" id="reasons">
					<div className="wrapper main-grid">
						<h3 className="reasons__title">3 reasons to purchase</h3>

						<article className="reasons__article">
							<h4 className="reasons__article--title">Ut sed metus</h4>
							<p className="reasons__article--text">
								Lorem ipsum dolor sit amet, consecteur.
							</p>
						</article>
						<article className="reasons__article">
							<h4 className="reasons__article--title">Curabitur ac erat</h4>
							<p className="reasons__article--text">
								Mauris mattis urna quis lorem molestie.
							</p>
						</article>
						<article className="reasons__article">
							<h4 className="reasons__article--title">Morbi dictum</h4>
							<p className="reasons__article--text">
								Aliquam in dolor et dolor tincidunt.
							</p>
						</article>

						<a
							href="https://adalab.es/"
							className="reasons__button"
							title="Acceso a Adalab"
							target="_blank"
							rel="noreferrer"
						>
							More reasons
						</a>
					</div>
				</section>
			</main>
			<footer className="footer">
				<a href="#header" className="footer__arrow" title="Go to top">
					<img src={arrow} alt="arrow" />
				</a>
				<div className="wrapper footer__flex">
					<nav className="footer__nav-interest">
						<ul>
							<li>
								<a
									href="https://adalab.es/"
									className="footer__item"
									title="Acceso a Adalab"
									target="_blank"
									rel="noreferrer"
								>
									articles
								</a>
							</li>
							<li>
								<a
									href="https://adalab.es/"
									className="footer__item"
									title="Acceso a Adalab"
									target="_blank"
									rel="noreferrer"
								>
									books
								</a>
							</li>
							<li>
								<a
									href="https://adalab.es/"
									className="footer__item"
									title="Acceso a Adalab"
									target="_blank"
									rel="noreferrer"
								>
									events
								</a>
							</li>
							<li>
								<a
									href="https://adalab.es/"
									className="footer__item"
									title="Acceso a Adalab"
									target="_blank"
									rel="noreferrer"
								>
									reasons
								</a>
							</li>
							<li>
								<a
									href="https://adalab.es/"
									className="footer__item"
									title="Acceso a Adalab"
									target="_blank"
									rel="noreferrer"
								>
									tips
								</a>
							</li>
						</ul>
					</nav>
					<nav className="footer__nav-sm">
						<ul>
							<li>
								<a
									href="https://adalab.es/"
									className="footer__item"
									title="Acceso a Adalab"
									target="_blank"
									rel="noreferrer"
								>
									twitter
								</a>
							</li>
							<li>
								<a
									href="https://adalab.es/"
									className="footer__item"
									title="Acceso a Adalab"
									target="_blank"
									rel="noreferrer"
								>
									instagram
								</a>
							</li>
							<li>
								<a
									href="https://adalab.es/"
									className="footer__item"
									title="Acceso a Adalab"
									target="_blank"
									rel="noreferrer"
								>
									mastodon.social
								</a>
							</li>
						</ul>
					</nav>
					<div className="footer__copy">
						<p>&copy; 2021</p>
						<p>
							we <span className="footer__copy--heart">❤︎</span> components
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
