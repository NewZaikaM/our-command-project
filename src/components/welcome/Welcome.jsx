import React from 'react'

const Welcome = ({handleOpenSignIn, handleOpenRegistration}) => {
  return (
    <div id="welcome">
			<h1>Добро пожаловать!</h1>
			<p>Данное приложение спроектировано для сбора отправленных откликов.</p>
			<div id="buttons">
				<button onClick={handleOpenSignIn}>Войти</button>
				<button onClick={handleOpenRegistration}>Зарегистрироваться</button>
			</div>
			<a href="https://github.com/NewZaikaM/our-command-project">
				<img src="/icons8-github.svg" alt="GitHub" />
				<p>Job Applications</p>
			</a>
		</div>
  )
}

export default Welcome