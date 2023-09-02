import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Typography } from '@mui/material';

import FieldText from './../../components/fields/FieldText';
import FieldPassword from '../../components/fields/fieldPassword';

import { isValidName, isValidPassword } from '../../utils/validates';

import styles from './Account.module.css';

function AccountPage() {
	const [nickname, setNickname] = useState({
		nickname: '',
		error: null,
	});
	const [passwords, setPasswords] = useState({
		old: '',
		new: '',
		error: null,
	});

	const onChangeNickname = (e) =>
		setNickname({
			...nickname,
			nickname: e.target.value,
		});

	const onChangePasswords = (e) => {
		const namePassword = e.target.id;
		setPasswords({ ...passwords, [namePassword]: e.target.value });
	};

	const onUpdateAccount = (e) => {
		e.preventDefault();
		const isValidNickname = isValidName(nickname.nickname);
		const isValidPasswords =
			isValidPassword(passwords.old) && isValidPassword(passwords.new);

		if (isValidNickname && isValidPasswords) {
			const updatedAccount = {
				nickname: nickname.nickname,
				password: passwords.new,
			};
			console.log(updatedAccount);
			return;
		}
		if (isValidNickname) {
			const updatedAccount = {
				nickname: nickname.nickname,
			};
			console.log(updatedAccount);
			return;
		}
		if (isValidPasswords) {
			const updatedAccount = {
				password: passwords.new,
			};
			console.log(updatedAccount);
			return;
		}

		setNickname({
			...nickname,
			error: 'Никнейм должен быть от 2 до 8 символов',
		});
		setPasswords({
			...passwords,
			error: 'Неверный прошлый пароль или меньше 6 символов',
		});
	};

	return (
		<Box>
			<form onSubmit={onUpdateAccount}>
				<Paper className={styles.paper}>
					<Typography variant="h5" className={styles.title}>
						Редактирование аккаунта
					</Typography>
					<FieldText
						onChange={onChangeNickname}
						value={nickname.nickname}
						label={'Никнейм'}
						placeholder={'Неизвестынй'}
						error={nickname.error}
						helperStyle={nickname.error ? { color: '#d32f2f' } : {}}
						helperText={nickname.error ? nickname.error : 'Введите новое имя'}
					/>
					<FieldPassword
						error={passwords.error}
						onChange={onChangePasswords}
						value={passwords.old}
						id={'old'}
						label={'Старый пароль'}
						helperStyle={passwords.error ? { color: '#d32f2f' } : {}}
						helperText={
							passwords.error ? passwords.error : 'Введите старый пароль'
						}
					/>
					<FieldPassword
						error={passwords.error}
						onChange={onChangePasswords}
						value={passwords.new}
						id={'new'}
						label={'Новый пароль'}
						helperStyle={passwords.error ? { color: '#d32f2f' } : {}}
						helperText={
							passwords.error ? passwords.error : 'Введите новый пароль'
						}
					/>
					<button type="submit" className={styles.save}>
						Сохранить
					</button>
				</Paper>
			</form>
		</Box>
	);
}

export default AccountPage;
