import { useSelector } from 'react-redux'
import { PostMiniCard } from '../PostMiniCard'
import './index.scss'

export const Sidebar = () => {
	const posts = useSelector(state => state.posts.posts)
	const popularPosts = posts?.flat().filter(item => item.views > 8)

	return (
		<div className='Sidebar'>
			<div className="Sidebar__block">
				<h4 className='Sidebar__title'>
					Popular posts
				</h4>	

				<ul className="Sidebar__list">
					{
						popularPosts?.slice(0, 4).map(item => {
							const { id, title, created } = item
							return (
								<PostMiniCard 
									key={id}
									id={id}
									title={title}
									created={created}
								/>
							)
						})
					}
				</ul>			
			</div>

			<div className="Sidebar__block">
				<h4 className='Sidebar__title'>
					Recent posts
				</h4>			

				<ul className="Sidebar__list">
				{
						popularPosts?.slice(0, 4).map(item => {
							const { id, title, created } = item
							return (
								<PostMiniCard 
									key={id}
									id={id}
									title={title}
									created={created}
								/>
							)
						})
					}
				</ul>		
			</div>

			<div className="Sidebar__block">
				<h4 className='Sidebar__title'>
					Categories
				</h4>			

				<ul className="Sidebar__list">

				</ul>		
			</div>
		</div>
	)
}
