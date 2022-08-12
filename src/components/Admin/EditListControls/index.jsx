import { Link } from "react-router-dom"

export const EditListControls = () => {
	

	return (
		<ul className='EditList__controls-list'>
			<li className='EditList__controls-item'>
				<span>
					Show
				</span>
				<select 
					className='show'
				>
					<option defaultValue>
						10
					</option>
					<option>
						20
					</option>
					<option>
						30
					</option>
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
