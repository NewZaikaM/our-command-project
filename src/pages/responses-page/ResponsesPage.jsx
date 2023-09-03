import React from 'react';
import { useSelector } from 'react-redux';

import { AccordionItem } from './../../components/accordionItem/AccordionItem';

function ResponsesPage() {
	const responses = useSelector(
		({ allApplications }) => allApplications.applications,
	);
	return (
		<div>
			<h2>Отклики</h2>
			{responses.map((response) => (
				<AccordionItem
					key={response.id} //TODO: Прикрутить id
					vacancy={response}
				/>
			))}
		</div>
	);
}

export { ResponsesPage };
