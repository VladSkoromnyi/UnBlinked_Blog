import './index.scss'
import { ReactComponent as Left } from '../../../assets/images/chevron-left.svg'
import { ReactComponent as Right } from '../../../assets/images/chevron-right.svg'

export const EditPagination = ({
	perPage,
	totalPosts,
	currentPage,
	setPage
}) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div className='EditPagination Pagination'>
			<ul className='Pagination__list'>
				{
					currentPage > 1
						?	<li 
								className="EditPagination__item Pagination__item"
								onClick={() => setPage(prev => ({ ...prev, currentPage: currentPage - 1 }))}
							>
								<Left />
							</li>
						: null
				}
				<li className="EditPagination__item Pagination__item pages">
					<ul className="Pagination__item-list">
						{
							pageNumbers.map((item, i) => {
								return (
									<li 
										key={i}
										className={currentPage === item ? 'active' : ''}
										onClick={() => setPage(prev => ({ ...prev, currentPage: item }))}
									>
										{item}
									</li>
								)
							})
						}
					</ul>
				</li>
				{
					pageNumbers.length === currentPage
						? null
						:	<li 
								className="EditPagination__item Pagination__item"
								onClick={() => setPage(prev => ({ ...prev, currentPage: currentPage + 1 }))}
							>
								<Right />
							</li>
				}
			</ul>
		</div>
	)
}
