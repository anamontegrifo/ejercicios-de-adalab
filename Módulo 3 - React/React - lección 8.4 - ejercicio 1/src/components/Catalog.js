import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const Catalog = (props) => {
	const renderProducts = () => {
		return props.products.map((shirt) => {
			return (
				<li className="list__item">
					<img className="list__image" src={shirt.imageUrl} alt="tshirt" />
					<p>{shirt.name}</p>
					<p>{shirt.price}</p>
					<Link to={`/product-detail/${shirt.id}`}>
						<button>Ver detalle de producto</button>
					</Link>
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
