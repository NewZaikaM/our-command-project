import React from 'react';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import styles from './Field.module.css';
import usePassword from './usePassword';

const FieldPassword = ({
	error,
	onChange,
	value,
	id,
	label,
	helperStyle,
	helperText,
}) => {
	const [showPassword, handleClickShowPassword, handleMouseDownPassword] =
		usePassword();

	return (
		<FormControl variant="filled" className={styles.input} 
		error={!!error}>
			<InputLabel htmlFor={id}>{label}</InputLabel>
			<FilledInput
				autoComplete="off"
				id={id}
				onChange={onChange}
				value={value}
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
			<FormHelperText sx={helperStyle}>{helperText}</FormHelperText>
		</FormControl>
	);
};

export default FieldPassword;
