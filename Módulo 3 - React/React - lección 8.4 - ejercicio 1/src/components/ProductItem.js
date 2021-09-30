import { Link } from 'react-router-dom';

const ProductItem = (props) => {
	return (
		<>
			<img className="list__image" src={props.shirt.imageUrl} alt="tshirt" />
			<p>{props.shirt.name}</p>
			<p>{props.shirt.price}</p>
			<Link to={`/product-detail/${props.shirt.id}`}>
				<button>Ver detalle de producto</button>
			</Link>
		</>
	);
};

export default ProductItem;
