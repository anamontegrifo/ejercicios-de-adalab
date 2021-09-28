// Fichero src/components/App.js
import { useState } from 'react';
import InputGroupText from './InputGroupText';
import InputGroupSelect from './InputGroupSelect';
import InputGroupRadio from './InputGroupRadio';
import Preview from './Preview';
import InputGroupCheck from './InputGroupCheck';

const App = () => {
	// Estados del componente
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [region, setRegion] = useState('España peninsular'); // Iniciamos el componente con la primera opción del select
	const [paymentType, setPaymentType] = useState('');
	const [legalTerms, setLegalTerms] = useState(false);

	// Eventos
	const handleName = (value) => {
		setName(value);
	};

	const handleEmail = (value) => {
		setEmail(value);
	};

	const handleRegion = (value) => {
		setRegion(value);
	};

	const handlePaymentType = (value) => {
		setPaymentType(value);
	};

	const handleLegalTerms = (checked) => {
		// Como lo que nos interesa es si está activo o no guardamos el checked
		setLegalTerms(checked);
	};

	const handleResetButton = () => {
		// Ponemos los mismo valores que hemos usado arriba en los useState
		setName('');
		setEmail('');
		setRegion('España peninsular');
		setPaymentType('');
		setLegalTerms(false);
	};

	const handleForm = (ev) => {
		ev.preventDefault();
		console.log('Enviando datos al servidor...');
	};

	const isValidForm = () => {
		// El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado una tipo de pago y cuando los términos legales sean true
		// También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
		if (
			name !== '' &&
			email !== '' &&
			paymentType !== '' &&
			legalTerms === true
		) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div>
			<form className="form" onSubmit={handleForm}>
				<h2>Rellena tus datos para finalizar la compra:</h2>
				<div className="form">
					{/* name */}

					<InputGroupText
						labelText="Escribe un nombre"
						inputName="name"
						inputId="name"
						inputPlaceholder="María García"
						inputValue={name}
						handleChange={handleName}
					/>

					{/* email */}

					<InputGroupText
						labelText="Escribe un email"
						inputName="email"
						inputId="email"
						inputPlaceholder="mariagarcia@gmail.com"
						inputValue={email}
						handleChange={handleEmail}
					/>

					{/* region */}

					<InputGroupSelect
						labelText="Indica tu región"
						inputName="region"
						inputId="region"
						inputValue={region}
						handleChange={handleRegion}
					/>

					{/* payment type */}

					<label className="label-text">Indica tu método de pago:</label>

					<InputGroupRadio
						labelText="Tarjeta de crédito"
						inputId="creditCard"
						inputValue="creditCard"
						name="paymentType"
						handleChange={handlePaymentType}
						checked={paymentType === 'creditCard'}
					/>

					<InputGroupRadio
						labelText="Efectivo"
						inputId="cash"
						inputValue="cash"
						name="paymentType"
						handleChange={handlePaymentType}
						checked={paymentType === 'cash'}
					/>

					<InputGroupRadio
						labelText="Contra reembolso"
						inputId="cashOnDelivery"
						inputValue="cashOnDelivery"
						name="paymentType"
						handleChange={handlePaymentType}
						checked={paymentType === 'cashOnDelivery'}
					/>

					{/* legal terms */}

					<InputGroupCheck
						labelText="Debes aceptar nuestros términos legales para completar la compra:"
						inputId="legalTerms"
						name="legalTerms"
						checked={legalTerms}
						handleChange={handleLegalTerms}
					/>
				</div>

				<Preview
					name={name}
					email={email}
					region={region}
					paymentType={paymentType}
					legalTerms={legalTerms}
				/>

				{/* reset */}
				{/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
				<input
					className="button"
					type="submit"
					value="Enviar"
					disabled={isValidForm() === false}
				/>

				{/* send */}
				<button className="button reset" onClick={handleResetButton}>
					Limpiar el formulario
				</button>
			</form>
		</div>
	);
};

export default App;
