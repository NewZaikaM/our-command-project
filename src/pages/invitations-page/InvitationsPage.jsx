import React from 'react';
import { useSelector } from 'react-redux';

import { AccordionItem } from './../../components/accordionItem/accordionItem';

function InvitationsPage() {
	const invitations = useSelector(
		({ allApplications }) => allApplications.invitations,
	);
	return (
		<div>
			<h2>Приглашения</h2>
			{invitations.map((invitation) => (
				<AccordionItem
					key={invitation.id} //TODO: Прикрутить id
					vacancy={invitation}
				/>
			))}
		</div>
	);
}

export { InvitationsPage };
