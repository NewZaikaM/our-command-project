import React from 'react';

const WelcomePage = () => {
	return (
		<div id="welcome">
			<h1>Добро пожаловать!</h1>
			<p>Данное приложение спроектировано для сбора отправленных откликов.</p>
			<div id="buttons">
				<button>Войти</button>
				<button>Зарегистрироваться</button>
			</div>
			<a href="https://github.com/NewZaikaM/our-command-project">
				<img src="./../../../public/icons8-github.svg" alt="GitHub"/>
				<p>Job Applications</p>
			</a>
		</div>
	);
};

export default WelcomePage;
