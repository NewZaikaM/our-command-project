import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { isValidName, isValidPassword } from '../../utils/validates';
import { updateAccount } from '../../store/account-slice/accountSlice';

const useAccount = () => {
  const { nickname: name } = useSelector(({ account }) => account);
	const dispatch = useDispatch();
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
			dispatch(updateAccount(updatedAccount));
			setNickname({
				nickname: '',
				error: null,
			});
			setPasswords({
				old: '',
				new: '',
				error: null,
			});
			return;
		}
		if (isValidNickname) {
			const updatedAccount = {
				nickname: nickname.nickname,
			};
			dispatch(updateAccount(updatedAccount));
			setNickname({
				nickname: '',
				error: null,
			});
			setPasswords({
				old: '',
				new: '',
				error: null,
			});
			return;
		}
		if (isValidPasswords) {
			const updatedAccount = {
				password: passwords.new,
			};
			dispatch(updateAccount(updatedAccount));
			setNickname({
				nickname: '',
				error: null,
			});
			setPasswords({
				old: '',
				new: '',
				error: null,
			});
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

  return [name, nickname, passwords, onChangeNickname, onChangePasswords, onUpdateAccount];
}

export default useAccount