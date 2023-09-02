import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import styles from './Account.module.css';
import { Typography } from '@mui/material';

function AccountPage() {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Box>
			<Paper className={styles.paper}>
				<Typography variant="h5" className={styles.title}>
					Редактирование аккаунта
				</Typography>
				<FormControl variant="filled" className={styles.input}>
					<TextField
						label="Никнейм"
						variant="filled"
						placeholder="Неизвестынй"
					/>
					<FormHelperText>Введите новое имя</FormHelperText>
				</FormControl>
				<FormControl variant="filled" className={styles.input}>
					<InputLabel htmlFor="old-password">Старый пароль</InputLabel>
					<FilledInput
						id="old-password"
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					<FormHelperText>Введите старый пароль</FormHelperText>
				</FormControl>
				<FormControl variant="filled" className={styles.input}>
					<InputLabel htmlFor="new-password">Новый пароль</InputLabel>
					<FilledInput
						id="new-password"
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					<FormHelperText>Введите новый пароль</FormHelperText>
				</FormControl>
				<button className={styles.save}>Сохранить</button>
			</Paper>
		</Box>
	);
}

export default AccountPage;
