import './index.scss'
import logo from '../../assets/images/Footer-logo.svg'
import { ReactComponent as Twitter } from '../../assets/images/twitter-brands.svg'
import { ReactComponent as Discord } from '../../assets/images/discord-brands.svg'
import { ReactComponent as Telegram } from '../../assets/images/paper-plane-solid.svg'

export const Footer = () => {
	return (
		<div className='Footer'>
			<div className="Footer__block">
				<a 
					href="/" 
					className="Footer__link"
				>
					<img 
						src={logo} 
						alt="UnBlinked" 
						className="Footer__logo" 
					/>					
				</a>

				<ul className="Footer__social-list">
					<li className="Footer__social-item">
						<a href="/" className="Footer__social-link">
							<Twitter 
								className='Footer__social-icon twitter' 
								width={25} 
								height={25}
							/>
						</a>
					</li>
					<li className="Footer__social-item">
						<a href="/" className="Footer__social-link">
							<Discord
								className='Footer__social-icon' 
								width={25} 
								height={25}
							/>
						</a>
					</li>
					<li className="Footer__social-item">
						<a href="/" className="Footer__social-link">
							<Telegram 
								className='Footer__social-icon' 
								width={20} 
								height={25}
							/>
						</a>
					</li>
				</ul>

				<p className="Footer__copyright">
					Copyright © 2022. UnBlinked Co., Ltd.
				</p>
			</div>

			<div className="Footer__block">
				<ul className="Footer__list">
					<li className="Footer__item">
						Resources
					</li>
					<li className="Footer__item">
						<a href='/'>
							Annoucement
						</a>
					</li>
					<li className="Footer__item">
						<a href='/'>
							How it works
						</a>
					</li>
					<li className="Footer__item">
						<a href='/'>
							How to connect exchange
						</a>
					</li>
				</ul>

				<ul className="Footer__list">
					<li className="Footer__item">
						Support
					</li>
					<li className="Footer__item">
						<a href='/'>
							FAQ
						</a>
					</li>
					<li className="Footer__item">
						<a href='/'>
							Talk to us
						</a>
					</li>
				</ul>

				<ul className="Footer__list">
					<li className="Footer__item">
						Company
					</li>
					<li className="Footer__item">
						<a href='/'>
							About
						</a>
					</li>
					<li className="Footer__item">
						<a href='/'>
							Terms to Use
						</a>
					</li>
					<li className="Footer__item">
						<a href='/'>
							Privacy Policy
						</a>
					</li>
				</ul>			
			</div>
		</div>
	)
}

