import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { PostMiniCard } from '../PostMiniCard'
import { SearchInput } from '../SearchInput'
import { ReactComponent as Watch } from '../../assets/images/watch.svg'
import { ReactComponent as Cart } from '../../assets/images/shopping-cart.svg'
import { ReactComponent as Command } from '../../assets/images/command.svg'
import { ReactComponent as Hash } from '../../assets/images/hash.svg'
import { ReactComponent as Video } from '../../assets/images/video.svg'
import { Link, useLocation } from 'react-router-dom'
import { fetchPosts } from '../../redux/asyncActions/posts'

export const Sidebar = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const posts = useSelector(state => state.posts.posts)
	const popularPosts = posts?.filter(item => item.views > 1)
	const currentPage = useSelector(state => state.posts.currentPage)
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

				<ul className="Sidebar__list">
					<li className='Sidebar__item'>
						<Link 
							to={`/posts/category/unblinked`}
							onClick={() => {
									dispatch(fetchPosts(currentPage, 'unblinked'))
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
							to={`/posts/category/Bitcoin`}
							onClick={() => {
									dispatch(fetchPosts(currentPage, 'Bitcoin'))
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
							to={`/posts/category/Binance`}
							onClick={() => dispatch(fetchPosts(currentPage, 'Binance'))}
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
							to={`/posts/category/Ethereum`}
							onClick={() => dispatch(fetchPosts(currentPage, 'Ethereum'))}
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
							to={`/posts/category/Bitcoin`}
							onClick={() => dispatch(fetchPosts(currentPage, 'Bitcoin'))}
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
