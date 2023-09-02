import React from 'react';
import { Outlet } from 'react-router-dom';

const Content = () => {
	return (
		<div id="detail">
			<Outlet />
		</div>
	);
};

export default Content;
