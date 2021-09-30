import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductItem from './ProductItem';

const Catalog = (props) => {
	const renderProducts = () => {
		return props.products.map((shirt) => {
			return (
				<li key={shirt.id} className="list__item">
					<ProductItem shirt={shirt} />
				</li>
			);
		});
	};

	return (
		<div>
			<h1>Listado de camisetas</h1>
			<ul className="list">{renderProducts()}</ul>
		</div>
	);
};

export default Catalog;
