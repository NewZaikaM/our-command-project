import React from 'react';
import { Avatar } from '@mui/material';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
	const { nickname } = useSelector(({ account }) => account);
	const navigate = useNavigate();
	const { userId } = useParams();

	return (
		<div className="wrapper">
			<div id="sidebar">
				<button className="exit" onClick={() => navigate(`/`)}>
					Выйти
				</button>
				<div>
					<Link to={`/user/${userId}/account`} className="avatar">
						<Avatar />
						<p>{nickname}</p>
					</Link>
					<button
						className="add"
						onClick={() => navigate(`/user/${userId}/add-applications`)}
					>
						Добавить
					</button>
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
		</div>
	);
};

export default Sidebar;
