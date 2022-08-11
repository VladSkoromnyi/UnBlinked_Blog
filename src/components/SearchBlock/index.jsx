import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQueryAction } from '../../redux/store/postsReduser'
// import { Categories } from '../Categories'
// import { useLocation } from 'react-router-dom'

export const SearchBlock = () => {
	const dispatch = useDispatch()
	const searchQuery = useSelector(state => state.posts.searchQuery)
	// const location = useLocation()
	// const isLocationCategory = location.pathname.includes('posts/category')

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
			{/* {
				isLocationCategory
				?	<Categories />
				: null
			} */}
		</div>
	)
}
