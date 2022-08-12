import '../EditList/index.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Edit } from '../../../assets/images/edit.svg'
import { ReactComponent as Eye } from '../../../assets/images/eye.svg'
import { ReactComponent as EyeOff } from '../../../assets/images/eye-off.svg'
import { ReactComponent as Send } from '../../../assets/images/send.svg'
import { ReactComponent as Play } from '../../../assets/images/play.svg'
import { ReactComponent as Pause } from '../../../assets/images/pause.svg'
import { putStatus } from '../../../redux/asyncActions/editPosts'
import { putPublish } from '../../../redux/asyncActions/editPosts'

export const EditItem = ({
	id,
	category,
	views,
	created,
	published,
	title,
	status,
	setLoaded,
}) => {


	const getDate = () => {
		const today = new Date()
		return today.toISOString().slice(0, -5)
	}

	const handleStatus = async (id, title, published, status) => {
		if (published) {
			await putStatus(id, title, status)
		}
	}

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
					<span 
						className='actions__toggle'
					>
						<Send />
						<ul className='actions__list'>
							<li 
								className='actions__item'
								onClick={async () => {
										await putPublish(id, getDate(), title)
										setLoaded(false)
									}
								}
							>
								<Play />Instant Publish
							</li>
							<li 
								className='actions__item'
								onClick={async () => {
										await putPublish(id, "2022-08-13T17:23:06", title)
										setLoaded(false)
									}
								}
							>
								<Pause />Scheduled Publish
							</li>
						</ul>
					</span>
					<span>
						{
							status !== 'pending' 
								? <Eye 
										onClick={async () => {
												await handleStatus(id, title, published, 'pending')
												setLoaded(false)
											}
										}
									/> 
								: <EyeOff 
										onClick={async () => {
												await handleStatus(id, title, published, 'published')
												setLoaded(false)
											}
										}
									/>
						}
					</span>
					<Link to={`${id}`}>
						<Edit />
					</Link>
				</li>
			</ul>
		</li>
	)
}
