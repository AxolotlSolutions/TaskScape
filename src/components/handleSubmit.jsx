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
			<label>Insert Task Here</label>
				<input
					className='inputField'
					value={taskCreated}
					type='text'
					onChange={(e) => setTaskCreated(e.target.value)}
				/>
				
				<button onClick={handleSubmit} className='btnDefault'>
					Add Task
				</button>
		</div>
	);
};

export default SubmitTask;