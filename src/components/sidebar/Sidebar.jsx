import React from 'react'
import { Avatar } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  
  return (
    <div id="sidebar">
				<button className="exit">Выйти</button>
				<div>
					<div className="avatar">
						<Avatar />
						<p>Неизвестный</p>
					</div>
					<form>
						<button className="add" onClick={() => navigate('/add-applications')}>
							Добавить
						</button>
					</form>
				</div>
				<nav>
					<ul>
						<li>
							<NavLink to={`/account`}>Аккаунт</NavLink>
						</li>
						<li>
							<NavLink to={`/applications`}>Отклики</NavLink>
						</li>
						<li>
							<NavLink to={`/invitations`}>Приглашения</NavLink>
						</li>
						<li>
							<NavLink to={`/failures`}>Отказы</NavLink>
						</li>
						<li>
							<NavLink to={`/missing-skills`}>Недостающие навыки</NavLink>
						</li>
					</ul>
				</nav>
			</div>
  )
}

export default Sidebar