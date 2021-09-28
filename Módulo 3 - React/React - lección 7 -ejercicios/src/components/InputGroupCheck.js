const InputGroupCheck = (props) => {
	const handleInputChange = (event) => {
		props.handleChange(event.target.ckecked);
	};
	return (
		<div className="input-group-checkbox">
			<label className="label-check" htmlFor="legalTerms">
				{props.labelText}
			</label>
			{/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
			<input
				type="checkbox"
				name={props.name}
				id={props.inputId}
				checked={props.checked}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default InputGroupCheck;
