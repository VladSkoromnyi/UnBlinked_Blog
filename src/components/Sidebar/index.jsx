import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { PostMiniCard } from '../PostMiniCard'
import { ReactComponent as Watch } from '../../assets/images/watch.svg'
import { ReactComponent as Cart } from '../../assets/images/shopping-cart.svg'
import { ReactComponent as Command } from '../../assets/images/command.svg'
import { ReactComponent as Hash } from '../../assets/images/hash.svg'
import { ReactComponent as Video } from '../../assets/images/video.svg'
import { Link } from 'react-router-dom'
import { setCurrentCategoryAction } from '../../store/postsReduser'

export const Sidebar = () => {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.posts)
	const popularPosts = posts?.filter(item => item.views > 1)

	return (
		<div className='Sidebar'>

			<div className="Sidebar__block">
				<h4 className='Sidebar__title'>
					Categories
				</h4>			

				<ul className="Sidebar__list">
					<li className='Sidebar__item'>
						<Link 
							to={`/posts`}
							onClick={() => {
									dispatch(setCurrentCategoryAction('unblinked'))
								}
							}
						>
							<div className='unblinked_news'>
								<Watch />
							</div>
							<span>UnBlinked News</span>
						</Link>
					</li>
					<li className='Sidebar__item'>
						<Link 
							to={`/posts`}
							onClick={() => {
									dispatch(setCurrentCategoryAction('Bitcoin'))
								}
							}
						>
							<div className='bitcoin_wiki'>
								<Cart />
							</div>
							<span>Bitcoin Wiki</span>
						</Link>
					</li>
					<li className='Sidebar__item'>
						<Link 
							to={`/posts`}
							onClick={() => dispatch(setCurrentCategoryAction('Binance'))}
						>
							<div
								className='crypto_wiki'
							>
								<Command />
							</div>
							<span>Crypto Wiki</span>
						</Link>
					</li>
					<li className='Sidebar__item'>
						<Link 
							to={`/posts`}
							onClick={() => dispatch(setCurrentCategoryAction('Ethereum'))}
						>
							<div
								className='traders_guide'
							>
								<Hash />
							</div>
							<span>Trader's Guide</span>
						</Link>
					</li>
					<li className='Sidebar__item'>
						<Link 
							to={`/posts`}
							onClick={() => dispatch(setCurrentCategoryAction('Bitcoin'))}
						>
							<div
								className='trending'
							>
								<Video />
							</div>
							<span>Trending</span>
						</Link>
					</li>
				</ul>		
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
