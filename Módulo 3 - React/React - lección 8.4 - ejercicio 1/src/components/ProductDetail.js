import '../styles/ProductDetail.scss';

const ProductDetail = (props) => {
	return (
		<div>
			<img
				className="list__image"
				src={props.productItem.imageUrl}
				alt="tshirt"
			/>
			<p>{props.productItem.name}</p>
			<p>{props.productItem.price}</p>
			<button>Ver detalle de producto</button>
		</div>
	);
};
export default ProductDetail;
