import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FieldText from '../../../components/fields/FieldText';
import FieldPassword from '../../../components/fields/fieldPassword';

import styles from './Login.module.css';

function LoginModal({ open, onClose }) {
	const account = useSelector((state) => state.account);
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const onChangeEmail = (e) => setEmail(e.target.value);
	const onChangePassword = (e) => setPassword(e.target.value);
	const onCheckAccount = (e) => {
		e.preventDefault();
		if (account.password === password && account.email === email) {
			navigate(`/user/${account.id}/account`);
		}
		setError('Неверная почта или пароль');
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
					error={error}
					helperStyle={!!error ? { color: '#d32f2f' } : {}}
					helperText={!!error ? error : ''}
				/>
				<FieldPassword
					onChange={onChangePassword}
					value={password}
					id={'password'}
					label={'Пароль'}
					error={error}
					helperStyle={!!error ? { color: '#d32f2f' } : {}}
					helperText={!!error ? error : ''}
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
