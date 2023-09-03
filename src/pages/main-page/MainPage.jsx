import React, { useEffect } from 'react';

import Content from '../../components/content/Content';
import Sidebar from '../../components/sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { fetchApplications } from '../../store/applications-sclice/applicationsSlice';

function MainPage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchApplications());
	});
	return (
		<>
			<Sidebar />
			<Content />
		</>
	);
}

export default MainPage;
