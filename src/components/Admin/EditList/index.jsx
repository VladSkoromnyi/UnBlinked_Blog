import './index.scss'
import { EditListControls } from '../EditListControls'
import { EditListHeaders } from '../EditListHeaders'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPostsEdit } from '../../../redux/asyncActions/editPosts'
import { EditItem } from '../EditItem'
import { EditPagination } from '../EditPagination'

export const EditList = () => {
	const dispatch = useDispatch()
	const editPosts = useSelector(state => state.edit.editPagePosts)
	const editPageCurrentPage = useSelector(state => state.edit.editPageCurrentPage)

	useEffect(() => {
		dispatch(fetchPostsEdit())
	}, [dispatch, editPageCurrentPage])

	console.log(editPosts);

	return (
		<div className='EditList container'>
			<ul className='EditList__list'>
				<li className='EditList__item'>
					<EditListControls />
				</li>
				<li className='EditList__item'>
					<EditListHeaders />
				</li>
				{
					editPosts?.map(item => {
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
					test
				</div>
				<div className="EditList__bottom-block">
					<EditPagination />
				</div>
			</div>
		</div>
	)
}
