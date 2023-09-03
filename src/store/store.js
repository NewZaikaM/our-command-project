import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './account-slice/accountSlice';

export const store = configureStore({
	reducer: {
		account: accountReducer,
	},
});
