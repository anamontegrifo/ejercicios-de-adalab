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
			<form action="">
				<input
					type="text"
					name="name"
					value={props.searchName}
					onChange={props.handleSearch}
				/>
			</form>
			<h1>Listado de camisetas</h1>
			<ul className="list">{renderProducts()}</ul>
		</div>
	);
};

export default Catalog;
