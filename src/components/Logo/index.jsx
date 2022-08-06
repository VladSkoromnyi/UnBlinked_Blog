import './index.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/UnBlinked-logo.svg'

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
					{'\n'}Blog
			</Link>
		</div>
	)
}
