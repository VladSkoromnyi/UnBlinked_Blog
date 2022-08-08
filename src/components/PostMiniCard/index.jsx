import { Link } from 'react-router-dom'
import './index.scss'

export const PostMiniCard = ({ id, title, created }) => {
	const handleDate = (d) => {
		const fullDate = new Date(d).toDateString()
		const date = fullDate.split(' ').slice(1).join(' ')
		return date
	}

	return (
		<li className='PostMiniCard'>
			<Link to={id} className="PostMiniCard__link">
				<img 
					src='https://unblinked-blog.s3.ap-northeast-2.amazonaws.com/e1150e77-f8e8-4516-be23-612eb06197b6/img_5terre.jpg' 
					alt='UnBlinked' 
					className='PostMiniCard__image'
				/>

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
