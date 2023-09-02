import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/main-page/MainPage';
import FormPage from './pages/form-page/FormPage';
import ErrorPage from './pages/error-page/ErrorPage';
import WelcomePage from './pages/welcome-page/WelcomePage';
import AccountPage from './pages/account-page/AccountPage';

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
				element: <h1>Отклики</h1>,
			},
			{
				path: 'invitations',
				element: <h1>Приглашения</h1>,
			},
			{
				path: 'failures',
				element: <h1>Отказы</h1>,
			},
			{
				path: 'missing-skills',
				element: <h1>Недостающие навыки</h1>,
			},
		],
	},
]);