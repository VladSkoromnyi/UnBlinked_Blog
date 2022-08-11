import '../EditList/index.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Edit } from '../../../assets/images/edit.svg'

export const EditItem = ({
	id,
	category,
	views,
	created,
	published,
	title,
	status,
}) => {
	return (
		<li className='EditList__item'>
			<ul className="EditList__item-list">
				<li className='number'>
					#{id}
				</li>
				<li className='category'>
					<ul>
						{
							category?.length 
								? category?.map(item => {
										return (
											<li key={item} className={item}>
												{item}
											</li>
										)
									})
								: '-'
						}						
					</ul>
				</li>
				<li className='title'>
					{title}
				</li>
				<li className='status'>
					{status}
				</li>
				<li className='created'>
					{created.split('T').join(' ')}
				</li>
				<li className='published'>
					{published.split('T').join(' ') || '-'}
				</li>
				<li className='views'>
					{views || '-'}
				</li>
				<li className='actions'>
					<Link to={`${id}`}>
						<Edit />
					</Link>
				</li>
			</ul>
		</li>
	)
}
