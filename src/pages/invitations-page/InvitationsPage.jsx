import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { AccordionItem } from './../../components/accordionItem/accordionItem';

function InvitationsPage() {
	const invitations = useSelector(
		({ allApplications }) => allApplications.invitations,
	);
	return (
		<div>
			<h2>Приглашения</h2>
			{invitations.length !== 0 ? (
				invitations.map((invitation) => (
					<AccordionItem key={invitation.id} vacancy={invitation} />
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
						Приглашений пока нет
					</Typography>
				</div>
			)}
		</div>
	);
}

export { InvitationsPage };
