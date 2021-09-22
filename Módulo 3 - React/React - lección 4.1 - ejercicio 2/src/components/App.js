import '../styles/App.scss';

function App() {
	const tasks = [
		{ task: 'Comprar harina, jamón y pan rallado', completed: true },
		{ task: 'Hacer croquetas ricas', completed: true },
		{ task: 'Ir a la puerta de un gimnasio', completed: false },
		{
			task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
			completed: false,
		},
	];

	const renderTasks = () => {
		return tasks.map((task, index) => {
			if (task.completed === true) {
				return (
					<li className="completed" key={index}>
						{task.task}
					</li>
				);
			} else {
				return <li key={index}>{task.task}</li>;
			}
		});
	};
	return (
		<div>
			<h1>Lista de tareas</h1>
			<ul>{renderTasks()}</ul>
		</div>
	);
}

export default App;
