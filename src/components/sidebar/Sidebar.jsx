import React from 'react';
import { Avatar } from '@mui/material';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';

const Sidebar = () => {
	const navigate = useNavigate();
	const { userId } = useParams();
	
	return (
		<div id="sidebar">
			<button className="exit">Выйти</button>
			<div>
				<Link to={`/user/${userId}/account`} className="avatar">
					<Avatar />
					<p>Неизвестный</p>
				</Link>
				<form>
					<button className="add" onClick={() => navigate('/add-applications')}>
						Добавить
					</button>
				</form>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to={`/user/${userId}/account`}>Аккаунт</NavLink>
					</li>
					<li>
						<NavLink to={`/user/${userId}/applications`}>Отклики</NavLink>
					</li>
					<li>
						<NavLink to={`/user/${userId}/invitations`}>Приглашения</NavLink>
					</li>
					<li>
						<NavLink to={`/user/${userId}/failures`}>Отказы</NavLink>
					</li>
					<li>
						<NavLink to={`/user/${userId}/missing-skills`}>
							Недостающие навыки
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
