import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { AccordionItem } from './../../components/accordionItem/AccordionItem';

function ResponsesPage() {
	const responses = useSelector(
		({ allApplications }) => allApplications.applications,
	);
	return (
		<div>
			<h2>Отклики</h2>
			{responses.length !== 0 ? (
				responses.map((response) => (
					<AccordionItem key={response.id} vacancy={response} />
				))
			) : (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '60vh',
					}}
				>
					<Typography textAlign="center" fontSize="30px">
						Откликов пока нет
					</Typography>
				</div>
			)}
		</div>
	);
}

export { ResponsesPage };
