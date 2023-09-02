import React, { useState } from 'react';

import Welcome from '../../components/welcome/Welcome';
import LoginModal from './Login/LoginModal';
import RegistrationModal from './Registration/RegistrationModal';

const WelcomePage = () => {
	const [openSignIn, setOpenSignIn] = useState(false);
	const [openRegistration, setOpenRegistration] = useState(false);
	const handleOpenSignIn = () => {
		setOpenSignIn(true);
	};
	const handleCloseSignIn = () => {
		setOpenSignIn(false);
	};
	const handleOpenRegistration = () => {
		setOpenRegistration(true);
	};
	const handleCloseRegistration = () => {
		setOpenRegistration(false);
	};
	return (
		<>
			<Welcome
				handleOpenSignIn={handleOpenSignIn}
				handleOpenRegistration={handleOpenRegistration}
			/>
			<LoginModal open={openSignIn} onClose={handleCloseSignIn} />
			<RegistrationModal open={openRegistration} onClose={handleCloseRegistration} />
		</>
	);
};

export default WelcomePage;
