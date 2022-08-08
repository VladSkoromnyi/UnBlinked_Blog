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
	const itemsOnPage = useSelector(state => state.posts.itemsOnPage)
	
	useEffect(() => {
		dispatch(fetchPosts(currentPage, 20))
	}, [dispatch, currentPage, itemsOnPage])

	console.log(posts.flat())

	return (
		<div className='Posts'>
			<ul className="Posts__list">
				{
					posts?.flat().length === 0
						? <TailSpin 
								className='loader' 
								color='#7367F0' 
								width={100} 
							/>
						:	posts.flat()?.map((item, i) => {
								const {
									id,
									title,
									writer,
									views,
									created,
									category,
								} = item

								return (
									<PostCard 
										key={id}
										id={id}
										title={title}
										writer={writer}
										created={created}
										views={views}
										category={category}
									/>
								)
							})
				}
			</ul>
			
			<div className="Posts__pagination">
				<Pagination />
			</div>
		</div>
	)
}
