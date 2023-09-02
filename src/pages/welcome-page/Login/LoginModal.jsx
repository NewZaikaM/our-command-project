import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';

import FieldText from '../../../components/fields/FieldText';
import FieldPassword from '../../../components/fields/fieldPassword';

import styles from './Login.module.css';

function LoginModal({ open, onClose }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const onChangeEmail = (e) => setEmail(e.target.value);
	const onChangePassword = (e) => setPassword(e.target.value);
	const onCheckAccount = (e) => {
		e.preventDefault();
		console.log({ email, password });
	};
	return (
		<Modal
			open={open}
			onClose={onClose}
			sx={{ width: '100%', cursor: 'pointer' }}
		>
			<form className={styles.main} onSubmit={onCheckAccount}>
				<Typography variant="h5">Войти</Typography>

				<FieldText
					onChange={onChangeEmail}
					value={email}
					label={'Почта'}
					placeholder={'example@gamil.com'}
					helperText={''}
				/>
				<FieldPassword
					onChange={onChangePassword}
					value={password}
					id={'password'}
					label={'Пароль'}
					helperText={''}
				/>

				<div className={styles.buttons}>
					<button type="submit">Войти</button>
					<button type="button" onClick={onClose}>
						Назад
					</button>
				</div>
			</form>
		</Modal>
	);
}

export default LoginModal;
