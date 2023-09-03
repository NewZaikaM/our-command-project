import React from 'react';
import { useSelector } from 'react-redux';

import { AccordionItem } from '../../components/accordionItem/AccordionItem';

function FailuresPage() {
	const failures = useSelector(
		({ allApplications }) => allApplications.failures,
	);
	return (
		<div>
			<h2>Отказы</h2>
			{failures.map((failure) => (
				<AccordionItem
					key={failure.id} //TODO: Прикрутить id
					vacancy={failure}
				/>
			))}
		</div>
	);
}

export { FailuresPage };
