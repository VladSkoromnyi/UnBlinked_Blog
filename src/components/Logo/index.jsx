import './index.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/UnBlinkedLogo.png'

export const Logo = () => {
	return (
		<div className='Logo'>
			<Link 
				to='/'
				className='Logo__link'
			>
				<img 
					src={logo} 
					alt='UnBlinked' 
					className='Logo__image'
				/>
			</Link>
		</div>
	)
}
