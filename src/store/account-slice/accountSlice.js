import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
	name: 'account',
	initialState: {
		nickname: '',
		email: '',
		password: '',
		id: Date.now(),
	},
	reducers: {
		createAccount(state, action) {
			return action.payload;
		},
		updateAccount(state, { payload: { nickname, password } }) {
			if (!!nickname) {
				state.nickname = nickname;
			}
			if (!!password) {
				state.password = password;
			}
		},
	},
});

export const { createAccount, updateAccount } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
