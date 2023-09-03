import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './account-slice/accountSlice';
import { applicationsReducer } from './applications-sclice/applicationsSlice';

export const store = configureStore({
	reducer: {
		account: accountReducer,
    allApplications: applicationsReducer,
	}
});
