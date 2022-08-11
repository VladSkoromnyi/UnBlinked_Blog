import './index.scss'
import { EditListControls } from '../EditListControls'
import { EditListHeaders } from '../EditListHeaders'
import { Pagination } from '../../Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPostsEdit } from '../../../redux/asyncActions/editPosts'

export const EditList = () => {
	const dispatch = useDispatch()
	const editPosts = useSelector(state => state.edit.editPagePosts)
	const editPageCurrentPage = useSelector(state => state.edit.editPageCurrentPage)

	useEffect(() => {
		dispatch(fetchPostsEdit(editPageCurrentPage))
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
				<li className='EditList__item'>

					<ul className="EditList__item-list">
						<li className='number'>
							#
						</li>
						<li className='category'>
							Category
						</li>
						<li className='title'>
							Title
						</li>
						<li className='status'>
							Status
						</li>
						<li className='created'>
							Created
						</li>
						<li className='published'>
							Published
						</li>
						<li className='views'>
							Views
						</li>
						<li className='actions'>
							Actions
						</li>
					</ul>

				</li>
			</ul>
			<div className="EditList__bottom">
				<div className="EditList__bottom-block">
					Showing 1 to 7 of 100 entries
				</div>
				<div className="EditList__bottom-block">
					<Pagination />
				</div>
			</div>
		</div>
	)
}
