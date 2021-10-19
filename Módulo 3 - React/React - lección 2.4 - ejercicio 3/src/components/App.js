import '../styles/App.scss';
import x from '../images/letterx.svg';
import menu from '../images/ico-menu.svg';
import { useState } from 'react';

function App() {
	const [mode, setMode] = useState('close');

	const handleChangeMode = () => {
		if (mode === 'close') {
			setMode('open');
		} else {
			setMode('close');
		}
	};

	return (
		<div>
			<header className="header" id="header">
				<nav className="header__menu">
					<img
						className="icon"
						src={menu}
						onClick={handleChangeMode}
						alt="menu"
					/>
				</nav>
			</header>

			<div className="container">
				<aside className={mode}>
					<nav className="header__menu">
						<img
							className="icon"
							src={x}
							onClick={handleChangeMode}
							alt="menu"
						/>
					</nav>
					<h2>Información de interés</h2>
					<h2>Información de interés</h2>
					<h2>Información de interés</h2>
					<h2>Información de interés</h2>
					<h2>Información de interés</h2>
					<h2>Información de interés</h2>
				</aside>
				<main className="main">
					<div className="wrapper">
						<section className="tips">
							<h2 className="tips__small">Insomnia tips</h2>
							<h3 className="tips__title">Looking through a window</h3>
							<p className="tips__text">
								Donec accumsan, nulla ut volutpat porttitor, quam odio tempus
								felis, at luctus ex diam nec lectus. Vivamus semper sodales
								rutrum. Lorem ipsum dolor sit amet, consectetur adipisicing
								elit. Libero voluptatem blanditiis deserunt sit aperiam maxime,
								cum, ipsum sed aliquam expedita tempore officiis obcaecati
								mollitia voluptate voluptates repudiandae laborum soluta
								deleniti labore veritatis laudantium quaerat excepturi nobis
								modi. Ipsum eligendi, laborum eveniet quam minima unde cumque,
								nam accusantium, dicta voluptate tempora. Dolorum dignissimos
								eaque quibusdam doloremque natus quia eligendi veniam omnis?
								Fuga dolor doloribus modi minus eaque consectetur aliquam libero
								tenetur atque accusamus nobis eos quidem, aperiam provident
								debitis aliquid voluptate tempore officia eveniet culpa laborum,
								quis quos voluptas! Nostrum reiciendis obcaecati ratione minima
								optio. Modi, laborum consectetur ad doloribus natus sint.
								Cupiditate consequuntur modi repudiandae laudantium molestias
								fugit tenetur officiis magnam, iure blanditiis unde sunt.
								Aliquam repudiandae possimus totam exercitationem, quo sit
								provident officiis expedita nulla alias debitis nihil doloribus
								magni inventore rerum quos, dolor corporis sequi laboriosam,
								minima illum culpa! Dignissimos at voluptatibus laboriosam,
								mollitia alias nisi obcaecati rerum? Distinctio facilis esse
								doloribus tempora aperiam! Excepturi qui, tenetur vitae
								molestias voluptates alias unde mollitia dolor quas quaerat, ab
								iste reprehenderit beatae, sint distinctio et. Fuga iste
								voluptates odit! In voluptatum, tempora deserunt incidunt
								voluptate beatae qui repudiandae labore voluptatibus libero
								explicabo, laboriosam id dolor? Saepe sunt nisi quam veniam.
							</p>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
