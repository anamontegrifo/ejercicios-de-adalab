import InputGroupText from './InputGroupText';
import InputGroupSelect from './InputGroupSelect';
import InputGroupRadio from './InputGroupRadio';
import InputGroupCheck from './InputGroupCheck';
import Preview from './Preview';
import Button from './Button';

const Form = (props) => {
	const handleForm = (event) => {
		event.preventDefault();
		props.handleFormSubmit();
	};
	return (
		<form className="form" onSubmit={handleForm}>
			<h2>Rellena tus datos para finalizar la compra:</h2>
			<div className="form">
				{/* name */}

				<InputGroupText
					labelText="Escribe un nombre"
					inputName="name"
					inputId="name"
					inputPlaceholder="María García"
					inputValue={props.name}
					handleChange={props.handleName}
				/>

				{/* email */}

				<InputGroupText
					labelText="Escribe un email"
					inputName="email"
					inputId="email"
					inputPlaceholder="mariagarcia@gmail.com"
					inputValue={props.email}
					handleChange={props.handleEmail}
				/>

				{/* region */}

				<InputGroupSelect
					labelText="Indica tu región"
					inputName="region"
					inputId="region"
					inputValue={props.region}
					handleChange={props.handleRegion}
				/>

				{/* payment type */}

				<label className="label-text">Indica tu método de pago:</label>

				<InputGroupRadio
					labelText="Tarjeta de crédito"
					inputId="creditCard"
					inputValue="creditCard"
					name="paymentType"
					handleChange={props.handlePaymentType}
					checked={props.paymentType === 'creditCard'}
				/>

				<InputGroupRadio
					labelText="Efectivo"
					inputId="cash"
					inputValue="cash"
					name="paymentType"
					handleChange={props.handlePaymentType}
					checked={props.paymentType === 'cash'}
				/>

				<InputGroupRadio
					labelText="Contra reembolso"
					inputId="cashOnDelivery"
					inputValue="cashOnDelivery"
					name="paymentType"
					handleChange={props.handlePaymentType}
					checked={props.paymentType === 'cashOnDelivery'}
				/>

				{/* legal terms */}

				<InputGroupCheck
					labelText="Debes aceptar nuestros términos legales para completar la compra:"
					checkName="legalTerms"
					checkChecked={props.checkedRadio}
					handleChange={props.handleLegal}
				/>
			</div>

			<Preview
				name={props.name}
				email={props.email}
				region={props.region}
				paymentType={props.paymentType}
				legal={props.checkedRadio}
			/>

			{/* reset */}
			{/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
			<Button
				type="submit"
				className="button"
				handleChangeButton={props.handleValid}
				disabled={props.handleValid}
				text="Enviar"
			/>
			{/* send */}

			<Button
				className="button reset"
				handleChangeButton={props.handleResetButton}
				text="Limpiar el formulario"
			/>
		</form>
	);
};

export default Form;
