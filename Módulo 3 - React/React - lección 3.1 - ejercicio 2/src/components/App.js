import { useState } from 'react';

function App() {
	const [text, setText] = useState('');

	const handleText = (event) => {
		let sentence = event.target.value;
		let mimimiSentence = sentence.replace(/[aeiou]/gi, 'i');
		setText(mimimiSentence);
	};

	return (
		<div>
			<textarea
				onChange={handleText}
				name="text"
				id="text"
				cols="30"
				rows="10"
			></textarea>
			<p>{text}</p>
		</div>
	);
}

export default App;
