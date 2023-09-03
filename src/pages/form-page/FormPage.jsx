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
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchApplications } from '../../store/applications-sclice/applicationsSlice';

import FieldText from '../../components/fields/FieldText';

import { dateFormat } from '../../utils/others';

import styles from './Form.module.css';

const skillsArrayMock = ['TypeScript', 'Next.js'];

function FormPage() {
	const [company, setCompany] = useState('');
	const [vacancyLink, setVacancyLink] = useState('');
	const [missingKnowledge, setMissingKnowledge] = useState([]);
	const [error, setError] = useState(null);

	const dispatch = useDispatch();
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

	async function addVacancy() {
		if (!!company && !!vacancyLink) {
			await axios.post(
				'https://our-command-project-default-rtdb.firebaseio.com/allApplications/applications.json',
				{
					company,
					vacancyLink,
					missingKnowledge,
					status: 'отклик',
					lastUpdate: new Date(),
				},
			);

			dispatch(fetchApplications());

			returnToAccount();
		}
		setError('Заполните все поля');
	}

	return (
		<>
			<div className={styles.main}>
				<Typography variant="h5">Добавить вакансию</Typography>

				<FieldText
					onChange={handleCompanyNameChange}
					value={company}
					label={'Компания'}
					placeholder={''}
					error={error}
					helperStyle={!!error ? { color: '#d32f2f' } : {}}
					helperText={!!error ? error : ''}
				/>
				<FieldText
					onChange={handleVacancyLinkChange}
					value={vacancyLink}
					label={'Ссылка на вакансию'}
					placeholder={''}
					error={error}
					helperStyle={!!error ? { color: '#d32f2f' } : {}}
					helperText={!!error ? error : ''}
				/>
				<Autocomplete
					sx={{ width: '100%' }}
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
