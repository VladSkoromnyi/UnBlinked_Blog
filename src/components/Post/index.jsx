import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchPost, fetchPosts } from '../../asyncActions/posts'
import { ReactComponent as Bookmark } from '../../assets/images/bookmark.svg'
import { ReactComponent as Comment } from '../../assets/images/comment.svg'

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

	console.log(post);

	return (
			<div className='Post container'>
				<img 
					src={post?.s3Thumbnail}
					alt="UnBlinked" 
				/>

				<div className="Post__content">
					<h4 className='PostCard__title Post__title'>
						{post?.title}
					</h4>
					<div className="PostCard__info">
						<div className="writer">
							<img 
								src={post?.s3UserProfile}
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

					<ul className="PostCard__category Post__category">
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

					<div className="Post__text">
						{post?.text}	
					</div>	

					<div className="PostCard__description">
						
					</div>

					<p className="PostCard__read Post__read">
						<span>
							<span>
								<Comment />{`${post?.views}`}
							</span>
							<span>
								<Bookmark />{`${post?.views}`}
							</span>
						</span>
						<Link
							to={`/posts/${id}`}
						>
							Read more	
						</Link>					
					</p>
				</div>
			</div>
	)
}
