import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import styles from './Field.module.css';

const FieldText = ({
	error,
	onChange,
	value,
	label,
	placeholder,
	helperStyle,
	helperText,
}) => {
	return (
		<FormControl variant="filled" className={styles.input}>
			<TextField
				autoComplete="off"
				error={!!error}
				onChange={onChange}
				value={value}
				label={label}
				variant="filled"
				placeholder={placeholder}
			/>
			<FormHelperText sx={helperStyle}>{helperText}</FormHelperText>
		</FormControl>
	);
};

export default FieldText;
