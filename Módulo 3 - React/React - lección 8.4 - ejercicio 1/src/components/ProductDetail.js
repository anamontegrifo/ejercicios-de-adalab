import '../styles/ProductDetail.scss';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const ProductDetail = (props) => {
	return (
		<div>
			<div>
				<img
					className="list__image"
					src={props.productItem.imageUrl}
					alt="tshirt"
				/>
				<p>{props.productItem.name}</p>
				<p>{props.productItem.description}</p>
				<p>{props.productItem.price}</p>
				<p>{props.productItem.sizes}</p>
			</div>
			<Link to="/">
				<button>Volver</button>
			</Link>
		</div>
	);
};
export default ProductDetail;
