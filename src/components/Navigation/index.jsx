import './index.scss'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/images/UnBlinked-logo.svg'

export const Navigation = () => {
	const [isShowMenu, setIsShowMenu] = useState(false)

	const toggleMenu = () => {
		setIsShowMenu(!isShowMenu)
	}

	return (
		<>
			<div
				onClick={() => toggleMenu()} 
				className="Navigation__toggle open"
			></div>

			<nav 
				className={
					`Navigation container ${isShowMenu ? 'show' : ''}`
				}>

				<div
					className="Navigation__toggle close"
					onClick={() => toggleMenu()}
				></div>

				<ul className='Navigation__list'>
					<li className="Navigation__item">
					<Link 
						to='/'
						className='Logo__link'
						onClick={() => toggleMenu()} 
					>
						<img 
							src={logo} 
							alt='UnBlinked' 
							className='Logo__image'
						/>
					</Link>
					</li>
					<li className='Navigation__item'>
						<NavLink
							to='/'
							className={({ isActive }) => isActive ? 'active' : ''}
							onClick={() => toggleMenu()} 
						>
							Home
						</NavLink>
					</li>
					<li className='Navigation__item'>

						<NavLink
							to='posts'
							className={({ isActive }) => isActive ? 'active' : ''}
							onClick={() => toggleMenu()} 
						>
							Posts
						</NavLink>
					</li>
				</ul>
			</nav>		
		</>

	)
}
