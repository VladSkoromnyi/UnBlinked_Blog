import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQueryAction } from '../../redux/store/postsReduser'

export const SearchInput = () => {
	const dispatch = useDispatch()
	const searchQuery = useSelector(state => state.posts.searchQuery)

	return (
		<div className='SearchInput'>
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
