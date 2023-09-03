import React from 'react';
import { AccordionItem } from './../../components/accordionItem/accordionItem';
import companies from './../../../public/companies.json';

function InvitationsPage() {
	return (
		<div>
			<h2>Приглашения</h2>
			{companies.map((company) => (
				<AccordionItem
					key={company.companyName} //TODO: Прикрутить id
					company={company}
				/>
			))}
		</div>
	);
}

export { InvitationsPage };
