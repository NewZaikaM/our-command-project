import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

import FieldText from './../../components/fields/FieldText';
import FieldPassword from '../../components/fields/fieldPassword';

import styles from './Account.module.css';
import useAccount from './useAccount';

function AccountPage() {
	const [name, nickname, passwords, onChangeNickname, onChangePasswords, onUpdateAccount] = useAccount();

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
						placeholder={name}
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
