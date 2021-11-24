import React from "react";
import { useState } from "react";

const Rewards = () => {
	return (
		<div>
			<form>
				<label> Insert Reward Here </label>
				<input className='inputField' type='text' />
				<button className='btnDefault'>Add Reward</button>
			</form>
		</div>
	);
};

export default Rewards;