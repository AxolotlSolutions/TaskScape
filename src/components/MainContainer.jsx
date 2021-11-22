import React from "react";
import { useState } from "react";
import Tasks from "./tasks.jsx";
import Rewards from "./rewards.jsx";

const MainContainer = () => {
	return (
		<div className='mainContainer'>
			<Tasks />
			<Rewards />
		</div>
	);
};

export default MainContainer;
