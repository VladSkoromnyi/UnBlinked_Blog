import './index.scss'
import avatar from '../../assets/images/avatar.svg'
import { ReactComponent as Edit } from '../../assets/images/edit.svg'
import { Link } from 'react-router-dom'

export const Header = ( ) =>  {
	return (
		<div className='Header container'>
			<div className="Header__image">
				<div className="Header__info">
					<img src={avatar} alt="UnBlinked" />
					<div className="Header__info-text">
						<h3>
							UnBlinked Blog
						</h3>
						<p>
							Latest news on Crypto and UnBlinked
						</p>						
					</div>
				</div>
			</div>

			<div className="Header__button">
				<Link to='/'>
					<Edit />Edit
				</Link>
			</div>
		</div>
	)
}
