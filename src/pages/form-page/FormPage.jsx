//@ts-nocheck
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Autocomplete, Chip, TextField, Typography } from '@mui/material';

import styles from './Form.module.css';

const skillsArrayMock = ['TypeScript', 'Next.js'];

function FormPage() {
	const [companyName, setCompanyName] = useState('');
	const [link, setLink] = useState('');
	const [skillsArray, setSkillsArray] = useState([]);

	const navigate = useNavigate();
	const { userId } = useParams();

	function handleCompanyNameChange(e) {
		setCompanyName(e.target.value);
	}

	function handleLinkChange(e) {
		setLink(e.target.value);
	}

	function handleSkillsArrayChange(e, value) {
		setSkillsArray([...value]);
	}

	function addVacancy() {
		alert(`Вакансия ${companyName} успешно добавлена`);
		return {
			company: companyName,
			companyLink: link,
			missingSkills: skillsArray,
		};
	}

	return (
		<>
			<div className={styles.main}>
				<Typography variant="h5">Добавить вакансию</Typography>

				<TextField
					value={companyName}
					size="small"
					onChange={handleCompanyNameChange}
					sx={{ minWidth: '80%', maxWidth: '80%' }}
					label="Компания"
					required
				/>

				<TextField
					value={link}
					size="small"
					onChange={handleLinkChange}
					sx={{ minWidth: '80%', maxWidth: '80%' }}
					label="Ссылка на вакансию"
					required
				/>

				<Autocomplete
					size="small"
					sx={{ minWidth: '80%', maxWidth: '80%' }}
					multiple
					id="tags-filled"
					onChange={handleSkillsArrayChange}
					options={skillsArrayMock.map((option) => option)}
					defaultValue={[skillsArrayMock[0]]}
					freeSolo
					limitTags={2}
					renderTags={(value, getTagProps) =>
						value.map((option, index) => (
							<Chip
								variant="outlined"
								label={option}
								{...getTagProps({ index })}
							/>
						))
					}
					renderInput={(params) => (
						<TextField
							{...params}
							variant="filled"
							label="Недостающие знания"
						/>
					)}
				/>

				<div className={styles.buttons}>
					<button onClick={addVacancy}>Добавить</button>
					<button onClick={() => navigate(`/user/${userId}/account`)} className={styles.cancel}>
						Отмена
					</button>
				</div>
			</div>
		</>
	);
}

export default FormPage;
