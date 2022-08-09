import './index.scss'
import { ReactComponent as Comment } from '../../assets/images/comment.svg'
import { Link } from 'react-router-dom'

export const PostCard = ({
	id,
	title,
	writer,
	views,
	created,
	category,
	body,
	image,
	userImage,
}) => {

	const handleDate = (d) => {
		const fullDate = new Date(d).toDateString()
		const date = fullDate.split(' ').slice(1).join(' ')
		return `${date}`
	}

	return (
		<li
			className='PostCard container'
			key={id}
		>
			<img 
				alt='test'
				src={image}
			/>

			<div className="PostCard__content">
				<h4 className='PostCard__title'>
					<Link to={`/posts/${id}`}>
						{title}
					</Link>
				</h4>
				<div className="PostCard__info">
					<div className="writer">
						<img 
							src={userImage}
							alt='UnBlinked' 
						/>
						by
						<span>
							{writer}
						</span>
					</div>
					<div className="date">
						{handleDate(created)}
					</div>
				</div>

				<ul className="PostCard__category">
					{
						category?.map(item => {
							return (
								<li 
									key={item}
									className={item}
								>
									{item}
								</li>
							)
						})
					}
				</ul>

				<p className="PostCard__description">
					{body?.slice(0, 70)}...
				</p>

				<p className="PostCard__read">
					<span>
						<Comment />{`${views} Comments`}
					</span>
					<Link 
						to={`/posts/${id}`}
					>
						Read more	
					</Link>					
				</p>
			</div>
		</li>
	)
}
