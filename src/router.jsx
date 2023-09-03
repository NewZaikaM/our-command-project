import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/main-page/MainPage';
import FormPage from './pages/form-page/FormPage';
import ErrorPage from './pages/error-page/ErrorPage';
import WelcomePage from './pages/welcome-page/WelcomePage';
import AccountPage from './pages/account-page/AccountPage';
import { ResponsesPage } from './pages/responses-page/ResponsesPage';
import { InvitationsPage } from './pages/invitations-page/InvitationsPage';
import { FailuresPage } from './pages/failures-page/FailuresPage';
import MissingSkillsPage from './pages/missing-skills-page/missingSkillsPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <WelcomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/user/:userId',
		element: <MainPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'add-applications',
				element: <FormPage />,
			},
			{
				path: 'account',
				element: <AccountPage />,
			},
			{
				path: 'applications',
				element: <ResponsesPage />,
			},
			{
				path: 'invitations',
				element: <InvitationsPage />,
			},
			{
				path: 'failures',
				element: <FailuresPage />,
			},
			{
				path: 'missing-skills',
				element: <MissingSkillsPage />
			},
		],
	},
]);
