import React from 'react';
import { Paper, Rating, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';

import styles from './MissingSkills.module.css';

function MissingSkillsPage() {
	const applications = useSelector(
		({ allApplications }) => allApplications.applications,
	);
	const invitations = useSelector(
		({ allApplications }) => allApplications.invitations,
	);
	const failures = useSelector(
		({ allApplications }) => allApplications.failures,
	);
	
	const allApplications = [...applications, ...invitations, ...failures];
	const allSkills = [];
	allApplications.forEach((item) => {
		if (item.missingKnowledge) {
			allSkills.push(
				...item.missingKnowledge.map((missKnowledge) =>
					missKnowledge.toLowerCase(),
				),
			);
		}
	});
	const skillsRepetition = allSkills.reduce((acc, el) => {
		acc[el] = (acc[el] || 0) + 1;
		return acc;
	}, {});
	const skillsRepetitionSorted = Object.entries(skillsRepetition).sort(
		(a, b) => b[1] - a[1],
	);

	const missingSkillsList = skillsRepetitionSorted.map((skill) => (
		<Paper key={skill[0]} className={styles.paper}>
			<Typography variant="h5" className={styles.text}>
				{skill[0]}
				<Rating
					className={styles.priority}
					size="small"
					value={skill[1]}
					readOnly
					precision={0.5}
					emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
				/>
			</Typography>
		</Paper>
	));

	return (
		<div>
			<h2>Недостающие навыки</h2>
			<ul className={styles.list}>{missingSkillsList}</ul>
		</div>
	);
}

export default MissingSkillsPage;
