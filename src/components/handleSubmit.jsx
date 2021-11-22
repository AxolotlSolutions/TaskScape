import React from "react";
import { useState } from "react";

const SubmitTask = (props) => {
	const [taskCreated, setTaskCreated] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addTask(taskCreated);
		setTaskCreated("");
	};
	return (
		<div>
			<label>
				<input
					className='inputField'
					value={taskCreated}
					type='text'
					onChange={(e) => setTaskCreated(e.target.value)}
				/>
				<button onClick={handleSubmit} className='btnForm'>
					Add Task
				</button>
			</label>
		</div>
	);
};

export default SubmitTask;