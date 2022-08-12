import { Link } from "react-router-dom"

export const EditListControls = ({ perPage, setPage, totalPosts }) => {
	const onPageValues = []

	for (let i = 10; i <= Math.ceil(totalPosts / 10) * 10; i += 10) {
		onPageValues.push(i)
	}

	return (
		<ul className='EditList__controls-list'>
			<li className='EditList__controls-item'>
				<span>
					Show
				</span>
				<select 
					className='show'
					value={perPage}
					onChange={({ target }) => setPage(prev => ({...prev, itemsOnPage: target.value}))}
				>
					{onPageValues.map(item => <option key={item}>{item}</option>)}
				</select>

				<Link to='add'>
					Add Post
				</Link>
			</li>
			<li className='EditList__controls-item'>
				<span>
					Search
				</span>
				<input 
					type='text' 
					placeholder='Search Invoice'
					className='search'
				/>
				<select className='status'>
					<option selected disabled>
						Select status
					</option>
					<option>
						Published
					</option>
					<option>
						Draft
					</option>
					<option>
						Pending
					</option>
					<option>
						Hidden
					</option>
				</select>
			</li>
		</ul>
	)
}
