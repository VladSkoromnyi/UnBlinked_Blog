import './index.scss'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Post = () => {
	const { id } = useParams()
	const posts = useSelector(state => state.posts.posts)
	const currentPost = posts?.flat().find(item => item.id === id)

	console.log(currentPost);

	const handleDate = (d) => {
		const fullDate = new Date(d).toDateString()
		const date = fullDate.split(' ').slice(1).join(' ')
		return `${date}`
	}

	return (
			<div className='Post container'>
				<img 
					src="https://unblinked-blog.s3.ap-northeast-2.amazonaws.com/e1150e77-f8e8-4516-be23-612eb06197b6/img_5terre.jpg" 
					alt="UnBlinked" 
				/>

				<div className="Post__content">
					<h4 className='PostCard__title Post__title'>
						{currentPost.title}
					</h4>
					<div className="PostCard__info">
						<div className="writer">
							<img 
								src='https://unblinked-blog.s3.ap-northeast-2.amazonaws.com/profile/unblinked/simpleLogo.svg' 
								alt='UnBlinked' 
							/>
							by
							<span>
								{currentPost.writer}
							</span>
						</div>
						<div className="date">
							{handleDate(currentPost.created)}
						</div>
					</div>					
				</div>


			</div>
	)
}
