import '../styles/App.scss';
import { useEffect, useState } from 'react';
import initialData from '../data/contacts.json';
import ls from '../services/localStorage.js';

function App() {
	const [data, setData] = useState(ls.get('lsData', ''));
	const [search, setSearch] = useState('');

	const [newContact, setNewContact] = useState({
		name: '',
		lastname: '',
		phone: '',
		email: '',
	});

	useEffect(() => {
		ls.set('lsData', data);
	}, [data]);

	const handleChangeSearch = (event) => {
		setSearch(event.currentTarget.value);
	};

	const handleChangeNewContact = (event) => {
		//esta condición se puede resumir así:
		// setNewContact({
		// 	...newContact,
		// 	[event.currentTarget.id]: event.currentTarget.value,
		// });

		if (event.currentTarget.id === 'name') {
			setNewContact({ ...newContact, name: event.currentTarget.value });
		} else if (event.currentTarget.id === 'lastname') {
			setNewContact({ ...newContact, lastname: event.currentTarget.value });
		} else if (event.currentTarget.id === 'phone') {
			setNewContact({ ...newContact, phone: event.currentTarget.value });
		} else if (event.currentTarget.id === 'email') {
			setNewContact({ ...newContact, email: event.currentTarget.value });
		}
	};

	const handleReset = (event) => {
		event.preventDefault();
		setData(initialData);
	};

	const handleClick = (event) => {
		event.preventDefault();

		setData([...data, newContact]);
		setNewContact({
			name: '',
			lastname: '',
			phone: '',
			email: '',
		});
	};
	console.log(data);
	const htmContactList = () => {
		return (
			data
				//Con filter primero filtramos por la búsqueda
				.filter(
					(oneContact) =>
						oneContact.name
							.toLocaleLowerCase()
							.includes(search.toLocaleLowerCase()) ||
						oneContact.lastname
							.toLocaleLowerCase()
							.includes(search.toLocaleLowerCase())
				)

				//Con map generamos cada uno de los elementos de html que hay dentro de data después del filtrado en un array
				.map((oneContact, index) => {
					return (
						<li key={index} className="contact__item">
							<p className="contact__name">
								<label className="contact__label">Nombre:</label>
								{oneContact.name + ' ' + oneContact.lastname}
							</p>
							<p className="contact__phone">
								<label className="contact__label">Teléfono:</label>
								<a
									href={`tel:${oneContact.phone}`}
									title="Pulsa aquí para llamar a Lola"
								>
									{oneContact.phone}
								</a>
							</p>
							<p className="contact__mail">
								<label className="contact__label">Email:</label>
								<a
									href={`mailto:${oneContact.email}`}
									title="Pulsa aquí para escribir a Lola"
								>
									{oneContact.email}
								</a>
							</p>
						</li>
					);
				})
		);
	};

	return (
		<div className="page">
			{/* header */}
			<header className="header">
				<h1 className="header__title">Mi agenda de contactos</h1>
				<form>
					<input
						className="header__search"
						autoComplete="off"
						type="search"
						name="search"
						placeholder="Filtrar contactos por nombre"
						onChange={handleChangeSearch}
						value={search}
					/>
				</form>
			</header>

			<main>
				{/* contact list */}
				<ul className="contact__list">{htmContactList()}</ul>

				{/* new contact */}
				<form className="new-contact__form">
					<h2 className="new-contact__title">Añade un nuevo contacto</h2>
					<input
						className="new-contact__input"
						type="text"
						name="name"
						id="name"
						placeholder="Nombre"
						onChange={handleChangeNewContact}
						value={newContact.name}
					/>
					<input
						className="new-contact__input"
						type="text"
						name="lastname"
						id="lastname"
						placeholder="Apellidos"
						onChange={handleChangeNewContact}
						value={newContact.lastname}
					/>
					<input
						className="new-contact__input"
						type="phone"
						name="phone"
						id="phone"
						placeholder="Teléfono"
						onChange={handleChangeNewContact}
						value={newContact.phone}
					/>
					<input
						className="new-contact__input"
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						onChange={handleChangeNewContact}
						value={newContact.email}
					/>
					<input
						onClick={handleClick}
						className="new-contact__btn"
						type="submit"
						value="Añadir"
					/>

					<input
						onClick={handleReset}
						className="new-contact__btn"
						type="submit"
						value="Agenda inicial"
					/>
				</form>
			</main>
		</div>
	);
}

export default App;
