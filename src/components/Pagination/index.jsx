import './index.scss'
import { ReactComponent as Left } from '../../assets/images/chevron-left.svg'
import { ReactComponent as Right } from '../../assets/images/chevron-right.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPageAction } from '../../redux/store/postsReduser'

export const Pagination = () => {
	const dispatch = useDispatch()
	const totalPages = useSelector(state => state.posts.totalPages)
	const currentPage = useSelector(state => state.posts.currentPage)
	const pages = Array.from({ length: totalPages}, (_, index) => index++)

	return (
		<div className='Pagination'>
			<ul className='Pagination__list'>
				{
					currentPage > 0
						?	<li 
								className="Pagination__item"
								onClick={() => dispatch(setCurrentPageAction(currentPage - 1 ))}
							>
								<Left />
							</li>
						: null
				}

				<li className="Pagination__item pages">
					<ul className="Pagination__item-list">
						{
							pages.map((item, i) => {
								return (
									<li 
										key={i}
										className={currentPage === item ? 'active' : ''}
										onClick={() => dispatch(setCurrentPageAction(item))}
									>
										{item + 1}
									</li>
								)
							})
						}
					</ul>
				</li>
				{
					totalPages - 1 === currentPage
						? null
						:	<li 
								className="Pagination__item"
								onClick={() => dispatch(setCurrentPageAction(currentPage + 1))}
							>
								<Right />
							</li>
				}
			</ul>
		</div>
	)
}
