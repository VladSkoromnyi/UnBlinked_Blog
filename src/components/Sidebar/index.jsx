import './index.scss'
import { useSelector } from 'react-redux'
import { PostMiniCard } from '../PostMiniCard'
import { SearchInput } from '../SearchInput'
import { useLocation } from 'react-router-dom'
import { Categories } from '../Categories'

export const Sidebar = () => {
	const location = useLocation()
	const posts = useSelector(state => state.posts.posts)
	const popularPosts = posts?.filter(item => item.views > 1)
	const isLocationCategory = location.pathname.includes('posts/category')

	return (
		<div className='Sidebar'>
			{
				isLocationCategory
					? null
					:	<div className="Sidebar__block">
							<SearchInput />
						</div>
			}

			<div className={`Sidebar__block ${isLocationCategory ? '' : 'flex-order-1'}`}>
				<h4 className='Sidebar__title'>
					Categories
				</h4>			

				<Categories />
			</div>

			<div className="Sidebar__block">
				<h4 className='Sidebar__title'>
					Popular posts
				</h4>	

				<ul className="Sidebar__list">
					{
						popularPosts?.slice(0, 4).map(item => {
							const { 
								articleId, 
								title, 
								time, 
								s3ArticleAddress 
							} = item
							return (
								<PostMiniCard 
									key={articleId}
									id={articleId}
									title={title}
									created={time}
									image={s3ArticleAddress}
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
						popularPosts?.slice(2).map(item => {
							const { 
								articleId, 
								title, 
								time, 
								s3ArticleAddress 
							} = item
							return (
								<PostMiniCard 
									key={articleId}
									id={articleId}
									title={title}
									created={time}
									image={s3ArticleAddress}
								/>
							)
						})
					}
				</ul>		
			</div>
		</div>
	)
}
