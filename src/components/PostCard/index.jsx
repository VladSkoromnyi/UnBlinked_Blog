import './index.scss'
import { ReactComponent as Comment } from '../../assets/images/comment.svg'
import { Link } from 'react-router-dom'

export const PostCard = ({
	id,
	title,
	userId,
	body,
}) => {
	return (
		<li
			className='PostCard container'
		>
			<img 
				alt='test'
				src='https://unblinked-blog.s3.ap-northeast-2.amazonaws.com/e1150e77-f8e8-4516-be23-612eb06197b6/img_5terre.jpg'
			/>

			<div className="PostCard__content">
				<h4 className='PostCard__title'>
					{title}
				</h4>

				<div className="PostCard__info">
					
				</div>

				<div className="PostCard__category">
					
				</div>

				<p className="PostCard__description">
					{body.slice(0, 70)}...
				</p>

				<p className="PostCard__read">
					<span>
						<Comment />{`${userId} Comments`}
					</span>
					<Link 
						to={`${id}`}
					>
						Read more	
					</Link>					
				</p>

			</div>
		</li>
	)
}
