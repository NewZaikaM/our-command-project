import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApplications = createAsyncThunk(
	'applications/fetchApplications',
	async () => {
		const response = await axios(
			'https://our-command-project-default-rtdb.firebaseio.com/allApplications.json',
		);
		return response.data;
	},
);

const applicationsSlice = createSlice({
	name: 'applications',
	initialState: {
		status: 'idle',
		applications: [],
		invitations: [],
		failures: [],
		error: null,
	},
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchApplications.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchApplications.fulfilled, (state, action) => {
				state.status = 'succeeded';
        const applications = [];
        const invitations = [];
        const failures = [];
        for(let [id, application] of Object.entries(action.payload.applications)) {
          applications.push({...application, id})
        }
        for(let [id, application] of Object.entries(action.payload.invitations)) {
          invitations.push({...application, id})
        }
        for(let [id, application] of Object.entries(action.payload.failures)) {
          failures.push({...application, id})
        }
        state.applications = applications;
        state.invitations = invitations;
        state.failures = failures;
			})
			.addCase(fetchApplications.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
      
	},
});

export const applicationsReducer = applicationsSlice.reducer;
