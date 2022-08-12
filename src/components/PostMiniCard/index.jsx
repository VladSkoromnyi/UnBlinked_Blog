import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export const PostMiniCard = ({ id, title, created, image }) => {
	const handleDate = (d) => {
		const fullDate = new Date(d).toDateString()
		const date = fullDate.split(' ').slice(1).join(' ')
		return date
	}

	const [isLoad, setIsLoad] = useState(true)

	const handleLoad = () => {
		setIsLoad(false)
	}

	return (
		<li key={id} className='PostMiniCard'>
			<Link to={`/posts/${id}`} className="PostMiniCard__link">

				<div className={isLoad ? 'no-image' : ''}>
					<img 
						src={image}
						alt='UnBlinked' 
						className='PostMiniCard__image'
						onLoad={handleLoad}
					/>
				</div>

				<div className="PostMiniCard__info">
					<h4 className="PostMiniCard__title">
						{title}
					</h4>				

					<p className="PostMiniCard__date">
						{handleDate(created)}
					</p>
				</div>
			</Link>
		</li>
	)
}
