import { useState } from 'react';
import '../styles/App.scss';

function App() {
	const [tasks, setTasks] = useState([
		{ task: 'Comprar harina, jamón y pan rallado', completed: true },
		{ task: 'Hacer croquetas ricas', completed: true },
		{ task: 'Ir a la puerta de un gimnasio', completed: false },
		{
			task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
			completed: false,
		},
	]);

	const [searchTask, setSearchTask] = useState('');

	const handleSearch = (event) => {
		setSearchTask(event.target.value);
	};

	const handleClicked = (event) => {
		/* Aquí guardamos la id del elemento clickado, se la pusimos en la función render al generar los <li> */
		const id = event.currentTarget.id;
		console.log(id);
		console.log(tasks[id]);
		console.log(tasks[id].task);
		console.log(tasks[id].completed);
		/* Aplicamos el valor contrario a lo que tenemos en el momento de clickar*/
		tasks[id].completed = !tasks[id].completed;

		setTasks([...tasks]);
	};

	const renderTasks = () => {
		return (
			tasks
				/* Primero filtramos por la búsqueda en el input, nos da todas las tasks que incluyan las letras que escribimos en el input*/
				.filter((task) => {
					return task.task.toLowerCase().includes(searchTask.toLowerCase());
				})
				/* Este es el map que nos genera todos los li del array, después de hacer el filtro (si se hace)*/
				.map((task, index) => {
					return (
						<li
							onClick={handleClicked}
							id={index}
							/* Podemos concatenar una clase fija con una con condición*/
							className={`text ${task.completed ? 'completed' : ''}`}
							key={index}
						>
							<p>{task.task}</p>
						</li>
					);
				})
		);
	};
	return (
		<div>
			<h1>Lista de tareas</h1>
			<form action="">
				<input type="text" id="searchTask" onChange={handleSearch} />
			</form>
			<ul>{renderTasks()}</ul>
		</div>
	);
}

export default App;
