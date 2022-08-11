import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQueryAction } from '../../redux/store/postsReduser'

export const SearchBlock = () => {
	const dispatch = useDispatch()
	const searchQuery = useSelector(state => state.posts.searchQuery)

	return (
		<div className='SearchBlock container'>
			<h3>
				Search the post you want!
			</h3>
			<p>
				or choose a category to quickly find the help you need
			</p>
			<form>
				<input 
					type="text" 
					placeholder='Search'
					value={searchQuery}
					onChange={({ target }) => dispatch(setSearchQueryAction(target.value))}
				/>
			</form>
		</div>
	)
}
