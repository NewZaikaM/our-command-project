//@ts-nocheck
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
	Autocomplete,
	Chip,
	TextField,
	Typography,
	FormHelperText,
} from '@mui/material';
import { FormControl } from '@mui/base';

import styles from './Form.module.css';
import { dateFormat } from '../../utils/others';

const skillsArrayMock = ['TypeScript', 'Next.js'];

function FormPage() {
	const [company, setCompany] = useState('');
	const [vacancyLink, setVacancyLink] = useState('');
	const [missingKnowledge, setMissingKnowledge] = useState([]);
	const [error, setError] = useState(null);

	const navigate = useNavigate();
	const { userId } = useParams();

	function handleCompanyNameChange(e) {
		setCompany(e.target.value);
	}

	function handleVacancyLinkChange(e) {
		setVacancyLink(e.target.value);
	}

	function handleMissingKnowledgeChange(e, value) {
		setMissingKnowledge([...value]);
	}

	function returnToAccount() {
		navigate(`/user/${userId}/account`);
	}

	function addVacancy() {
		if (!!company && !!vacancyLink) {
			console.log({
				company,
				vacancyLink,
				missingKnowledge,
				status: 'отклик',
				lastUpdate: dateFormat(new Date()),
			});
			returnToAccount();
		}
		setError('Заполните все поля');
	}

	return (
		<>
			<div className={styles.main}>
				<Typography variant="h5">Добавить вакансию</Typography>

				<FormControl>
					<TextField
						error={error}
						value={company}
						size="small"
						onChange={handleCompanyNameChange}
						sx={{ minWidth: '80%', maxWidth: '80%' }}
						label="Компания"
						required
					/>
					<FormHelperText sx={!!error ? { color: '#d32f2f' } : {}}>
						{!!error ? error : ''}
					</FormHelperText>
				</FormControl>
				<FormControl>
					<TextField
						error={error}
						value={vacancyLink}
						size="small"
						onChange={handleVacancyLinkChange}
						sx={{ minWidth: '80%', maxWidth: '80%' }}
						label="Ссылка на вакансию"
						required
					/>
					<FormHelperText sx={!!error ? { color: '#d32f2f' } : {}}>
						{!!error ? error : ''}
					</FormHelperText>
				</FormControl>

				<Autocomplete
					size="small"
					sx={{ minWidth: '80%', maxWidth: '80%' }}
					multiple
					id="tags-filled"
					onChange={handleMissingKnowledgeChange}
					options={skillsArrayMock.map((option) => option)}
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
					<button onClick={returnToAccount} className={styles.cancel}>
						Отмена
					</button>
				</div>
			</div>
		</>
	);
}

export default FormPage;
