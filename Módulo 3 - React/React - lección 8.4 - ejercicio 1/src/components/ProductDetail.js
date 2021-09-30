import '../styles/ProductDetail.scss';
import { Link } from 'react-router-dom';

const ProductDetail = (props) => {
	const newSizes = props.productItem.sizes;

	const [firstSize, secondSize, thirthSize] = newSizes;

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
				<p>{`Tallas ${firstSize} - ${secondSize} - ${thirthSize}`}</p>
			</div>
			<Link to="/">
				<button>Volver</button>
			</Link>
		</div>
	);
};
export default ProductDetail;
