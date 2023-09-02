import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Modal } from '@mui/base';

import FieldText from '../../../components/fields/FieldText';
import FieldPassword from '../../../components/fields/fieldPassword';

import {
	isEqualPasswords,
	isValidEmail,
	isValidName,
	isValidPassword,
} from '../../../utils/validates';

import styles from './Registration.module.css';

function RegistrationModal({ open, onClose }) {
	const [nickname, setNickname] = useState({
		nickname: '',
		error: null,
	});
	const [email, setEmail] = useState({
		email: '',
		error: null,
	});
	const [password, setPassword] = useState({
		password: '',
		error: null,
	});
	const [confirmPassword, setConfirmPassword] = useState({
		confirmPassword: '',
		error: null,
	});

	function onChangeNickname(e) {
		setNickname({ ...nickname, nickname: e.target.value });
	}
	function onChangeEmail(e) {
		setEmail({ ...email, email: e.target.value });
	}
	function onChangePassword(e) {
		setPassword({ ...password, password: e.target.value });
	}
	function onChangeConfPassword(e) {
		setConfirmPassword({ ...confirmPassword, confirmPassword: e.target.value });
	}

	const onUpdateAccount = (e) => {
		e.preventDefault();
		const isValidForm =
			isValidName(nickname.nickname) &&
			isValidEmail(email.email) &&
			isValidPassword(password.password) &&
			isEqualPasswords(confirmPassword.confirmPassword, password.password);

		if (isValidForm) {
			const createdAccount = {
				nickname: nickname.nickname,
				email: email.email,
				password: password.password,
			};
			console.log(createdAccount);
			return;
		}
		setNickname({
			...nickname,
			error: 'Никнейм должен быть от 2 до 8 символов',
		});
		setEmail({ ...email, error: 'Неверный email' });
		setPassword({ ...password, error: 'Пароль должен быть больше 6 символов' });
		setConfirmPassword({ ...confirmPassword, error: 'Пароли не совпадают' });
	};

	return (
		<Modal
			open={open}
			onClose={onClose}
			sx={{ width: '100%', cursor: 'pointer' }}
		>
			<form className={styles.main} onSubmit={onUpdateAccount}>
				<Typography variant="h5">Регистраиця</Typography>

				<FieldText
					onChange={onChangeNickname}
					value={nickname.nickname}
					label={'Никнейм'}
					placeholder={'Неизвестный'}
					error={nickname.error}
					helperStyle={nickname.error ? { color: '#d32f2f' } : {}}
					helperText={nickname.error ? nickname.error : ''}
				/>
				<FieldText
					onChange={onChangeEmail}
					value={email.email}
					label={'Почта'}
					placeholder={'example@gamil.com'}
					error={email.error}
					helperStyle={email.error ? { color: '#d32f2f' } : {}}
					helperText={email.error ? email.error : ''}
				/>
				<FieldPassword
					onChange={onChangePassword}
					value={password.password}
					id={'first-password'}
					label={'Пароль'}
					error={password.error}
					helperStyle={password.error ? { color: '#d32f2f' } : {}}
					helperText={password.error ? password.error : ''}
				/>
				<FieldPassword
					onChange={onChangeConfPassword}
					value={confirmPassword.confirmPassword}
					id={'second-password'}
					label={'Пароль повтори'}
					error={confirmPassword.error}
					helperStyle={confirmPassword.error ? { color: '#d32f2f' } : {}}
					helperText={confirmPassword.error ? confirmPassword.error : ''}
				/>

				<div className={styles.buttons}>
					<button type="submit">Зарегистрироваться</button>
					<button type="button" onClick={onClose}>
						Назад
					</button>
				</div>
			</form>
		</Modal>
	);
}

export default RegistrationModal;
