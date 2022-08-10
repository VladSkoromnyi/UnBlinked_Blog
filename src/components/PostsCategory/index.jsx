import './index.scss'
import { useEffect } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/asyncActions/posts'
import { Pagination } from '../Pagination'
import { PostCard } from '../PostCard'
import { useParams } from 'react-router-dom'

export const PostsCategory = () => {
	const dispatch = useDispatch()
	const { category } = useParams() 
	const posts = useSelector(state => state.posts.posts)
	const currentPage = useSelector(state => state.posts.currentPage)
	const totalPages = useSelector(state => state.posts.totalPages)
	
	useEffect(() => {
			dispatch(fetchPosts(currentPage, category))
	}, [dispatch, currentPage,category])

	return (
		<div className='PostsCategory'>
			<h2>{category}</h2>

			<ul className="Posts__list">
				{
					posts?.length === 0
						? <TailSpin
								className='loader'
								color='#7367F0' 
								width={100}
								height={100}
							/>
						:	posts?.map((item, i) => {
								const {
									articleId,
									title,
									writer,
									views,
									time,
									category,
									s3ArticleAddress,
									s3UserProfile
								} = item

								return (
									<PostCard
										key={articleId}
										id={articleId}
										title={title}
										writer={writer}
										created={time}
										views={views}
										category={category}
										image={s3ArticleAddress}
										userImage={s3UserProfile}
									/>
								)
							})
				}
			</ul>
			
			<div className="Posts__pagination">
				{
					totalPages > 0
						? <Pagination />
						: null
				}
			</div>
		</div>
	)
}
