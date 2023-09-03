import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { AccordionItem } from '../../components/accordionItem/AccordionItem';

function FailuresPage() {
	const failures = useSelector(
		({ allApplications }) => allApplications.failures,
	);
	return (
		<div>
			<h2>Отказы</h2>
			{failures.length !== 0 ? (
				failures.map((failure) => (
					<AccordionItem key={failure.id} vacancy={failure} />
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
						Отказов пока нет
					</Typography>
				</div>
			)}
		</div>
	);
}

export { FailuresPage };
