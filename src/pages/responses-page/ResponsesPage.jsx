import React from 'react';
import { AccordionItem } from './../../components/accordionItem/AccordionItem';
import companies from './../../../public/companies.json';

function ResponsesPage() {
	return (
		<div>
			<h2>Отклики</h2>
			{companies.map((company) => (
				<AccordionItem
					key={company.companyName} //TODO: Прикрутить id
					company={company}
				/>
			))}
		</div>
	);
}

export { ResponsesPage };
