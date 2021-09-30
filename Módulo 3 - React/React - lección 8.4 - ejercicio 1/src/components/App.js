import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import callToApi from '../services/api';
import Catalog from './Catalog';
import ProductDetail from './ProductDetail';

function App() {
	// Estados

	const [products, setProducts] = useState([]);
	const [searchName, setSearchName] = useState('');
	console.log(products);

	// Llamar al api con useEffect

	useEffect(() => {
		// Dentro de useEffect llamamos al API
		callToApi().then((response) => {
			// Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
			setProducts(response);
		});
		// Aquí ponemos un array vacío porque queremos que se llame al API solo la primera vez
	}, []);

	const routeData = useRouteMatch('/product-detail/:id');

	let productItem = null;
	if (routeData !== null) {
		productItem = products.find((item) => item.id === routeData.params.id);
	}

	const handleSearch = (event) => {
		setSearchName(event.currentTarget.value);
	};
	const filteredProducts = products.filter(
		(item) =>
			item.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) ||
			item.price.toString().includes(searchName) ||
			item.id.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
	);

	return (
		<div>
			<Switch>
				<Route exact path="/">
					<Catalog
						products={filteredProducts}
						searchName={searchName}
						handleSearch={handleSearch}
					/>
				</Route>
				<Route path="/product-detail/:id">
					<ProductDetail productItem={productItem} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
