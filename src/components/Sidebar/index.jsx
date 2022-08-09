import { useSelector } from 'react-redux'
import { PostMiniCard } from '../PostMiniCard'
import './index.scss'

export const Sidebar = () => {
	const posts = useSelector(state => state.posts.posts)
	const popularPosts = posts?.filter(item => item.views > 1)
	const categories = useSelector(state => state.posts.categories)

	console.log(categories);

	return (
		<div className='Sidebar'>
			<div className="Sidebar__block">
				<h4 className='Sidebar__title'>
					Popular posts
				</h4>	

				<ul className="Sidebar__list">
					{
						popularPosts?.slice(0, 4).map(item => {
							const { articleId, title, time, s3ArticleAddress } = item
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
							const { articleId, title, time, s3ArticleAddress } = item
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
					Categories
				</h4>			

				<ul className="Sidebar__list">

				</ul>		
			</div>
		</div>
	)
}
