import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import Catalog from './Catalog';

function App() {
	// Estados

	const [products, setProducts] = useState([]);

	// Llamar al api con useEffect

	useEffect(() => {
		// Dentro de useEffect llamamos al API
		callToApi().then((response) => {
			// Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
			setProducts(response);
		});
		// Aquí ponemos un array vacío porque queremos que se llame al API solo la primera vez
	}, []);

	return (
		<div>
			<Catalog products={products} />
		</div>
	);
}

export default App;
