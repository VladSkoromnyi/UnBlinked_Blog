import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchPost, fetchPosts } from '../../asyncActions/posts'

export const Post = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const post = useSelector(state => state.posts.currentPost)
	const currentPage = useSelector(state => state.posts.currentPage)

	useEffect(() => {
		dispatch(fetchPosts(currentPage))
		dispatch(fetchPost(id))
	}, [id, dispatch, currentPage])

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
						{post?.title}
					</h4>
					<div className="PostCard__info">
						<div className="writer">
							<img 
								src='https://unblinked-blog.s3.ap-northeast-2.amazonaws.com/profile/unblinked/simpleLogo.svg' 
								alt='UnBlinked' 
							/>
							by
							<span>
								{post?.writer}
							</span>
						</div>
						<div className="date">
							{handleDate(post?.time)}
						</div>
					</div>	

					<ul className="PostCard__category">
						{
							post?.category?.map(item => {
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
				</div>
			</div>
	)
}
