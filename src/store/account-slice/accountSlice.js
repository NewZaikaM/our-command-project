import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
	name: 'account',
	initialState: null,
	reducers: {
		createAccount(state, action) {
			return state = action.payload;
		},
	},
});

export const { createAccount } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;