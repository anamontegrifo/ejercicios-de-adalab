import { useState } from 'react';
import '../styles/App.scss';

function App() {
	const [mode, setMode] = useState('light');
	const [paragraph, setParagraph] = useState('');

	const handleChangeMode = () => {
		if (mode === 'light') {
			setMode('dark');
			// setParagraph('Tienes activado el dark mode');
		} else {
			setMode('light');
			// setParagraph('');
		}
		renderDarkmodeText();
	};

	const renderDarkmodeText = () => {
		if (mode === 'light') {
			setParagraph('Tienes activado el dark mode');
		} else {
			setParagraph('');
		}
	};

	return (
		<div className={mode}>
			<button onClick={handleChangeMode}>Des / activar el dark mode</button>
			<p>{paragraph}</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eius
				nisi, eveniet suscipit ex voluptatum id asperiores aliquam, deleniti
				nesciunt animi. Enim at modi, corrupti eaque esse inventore eveniet nemo
				sequi fugit molestiae sit suscipit maxime iure est quidem quia sapiente
				sunt fugiat, quae similique? Error, recusandae molestiae. Quas aliquid
				numquam minus magni dolorum similique officiis inventore minima. Vitae
				qui inventore molestias quisquam laborum ea consectetur voluptates
				recusandae aperiam adipisci similique atque necessitatibus porro vero,
				ratione pariatur consequuntur distinctio debitis voluptatibus ipsum quos
				enim repellat perferendis. Quibusdam porro, officiis eius fugiat quasi
				alias quas, ex veritatis minus libero fuga voluptas.
			</p>
		</div>
	);
}

export default App;
