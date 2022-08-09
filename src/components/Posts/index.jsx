import './index.scss'
import { useEffect } from 'react'
import { PostCard } from '../PostCard'
import { TailSpin } from  'react-loader-spinner'
import { Pagination } from '../Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../asyncActions/posts'

export const Posts = () => {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.posts)
	const currentPage = useSelector(state => state.posts.currentPage)
	const totalPages = useSelector(state => state.posts.totalPages)
	
	useEffect(() => {
		dispatch(fetchPosts(currentPage))
	}, [dispatch, currentPage])

	console.log(posts)

	return (
		<div className='Posts'>
			<ul className="Posts__list">
				{
					posts?.length === 0
						? <TailSpin 
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
					totalPages > 1
						? <Pagination />
						: null
				}
			</div>
		</div>
	)
}
