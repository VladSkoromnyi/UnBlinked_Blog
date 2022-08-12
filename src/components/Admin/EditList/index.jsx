import './index.scss'
import { EditListControls } from '../EditListControls'
import { EditListHeaders } from '../EditListHeaders'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchPostsEdit } from '../../../redux/asyncActions/editPosts'
import { EditItem } from '../EditItem'
import { EditPagination } from '../EditPagination'

export const EditList = () => {
	const dispatch = useDispatch()
	const editPosts = useSelector(state => state.edit.editPagePosts)

	const [page, setPage] = useState({
		currentPage: 1,
		itemsOnPage: 10,
	})

	const lastItem = page.currentPage * page.itemsOnPage
	const firstItem = lastItem - page.itemsOnPage

	useEffect(() => {
		dispatch(fetchPostsEdit())
	}, [dispatch])

	return (
		<div className='EditList container'>
			<ul className='EditList__list'>
				<li className='EditList__item'>
					<EditListControls 
						perPage={page.itemsOnPage}
						setPage={setPage}
						totalPosts={editPosts.length}
					/>
				</li>
				<li className='EditList__item'>
					<EditListHeaders />
				</li>
				{
					editPosts?.slice(firstItem, lastItem).map(item => {
						const {
							articleId,
							category,
							views,
							title,
							status,
							created_date,
							published_date
						} = item

						return (
							<EditItem 
								key={articleId}
								id={articleId}
								category={category}
								views={views}
								title={title}
								status={status}
								created={created_date}
								published={published_date}
							/>
						) 
					})
				}
			</ul>
			<div className="EditList__bottom">
				<div className="EditList__bottom-block">
					Show {firstItem + 1} to {lastItem > editPosts.length ? editPosts.length : lastItem} of {editPosts.length} entries
				</div>
				<div className="EditList__bottom-block">
					<EditPagination 
						perPage={page.itemsOnPage}
						totalPosts={editPosts.length}
						setPage={setPage}
						currentPage={page.currentPage}
					/>
				</div>
			</div>
		</div>
	)
}
