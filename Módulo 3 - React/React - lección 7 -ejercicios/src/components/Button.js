const Button = (props) => {
	const handleAllButton = (event) => {
		props.handleChangeButton();
	};
	return (
		<button
			type={props.type}
			className={props.className}
			onClick={handleAllButton}
			disabled={props.disabled}
		>
			{props.text}
		</button>
	);
};
export default Button;
