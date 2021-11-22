import React from "react";
import { useState } from "react";
import SubmitTask from "./handleSubmit.jsx";
import TaskCard from "./taskCard.jsx";

const Tasks = () => {
	const [tasks, setTask] = useState([]);
	const addTask = (userInput) => {
		const newInput = [...tasks, userInput];
		setTask(newInput);
	};

	const taskHolder = [];
	tasks.map((writtenText, index) => {
		taskHolder.push(<TaskCard key={index} writtenText={writtenText} />);
	});

	return (
		<div>
			<SubmitTask addTask={addTask} />
			{taskHolder}
		</div>
	);
};

export default Tasks;
