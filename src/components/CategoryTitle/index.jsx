import { Link, useParams } from "react-router-dom"
import { fetchPosts } from "../../redux/asyncActions/posts"
import { ReactComponent as Watch } from '../../assets/images/watch.svg'
import { ReactComponent as Cart } from '../../assets/images/shopping-cart.svg'
import { ReactComponent as Command } from '../../assets/images/command.svg'
import { ReactComponent as Hash } from '../../assets/images/hash.svg'
import { ReactComponent as Video } from '../../assets/images/video.svg'
import { useDispatch, useSelector } from "react-redux"

export const CategoryTitle = () => {
	const { category } = useParams()
	const dispatch = useDispatch()
	const currentPage = useSelector(state => state.posts.currentPage)

	switch (category) {
		case 'unblinked':
			return (
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
			)
		case 'Bitcoin':
			return (
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
			)

		case 'Binance':
			return (
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
			)

		case 'Ethereum':
			return (
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
			)

		case 'Altcoin':
			return (
				<li className='Sidebar__item'>
					<Link 
						to={`/posts/category/Altcoin`}
						onClick={() => dispatch(fetchPosts(currentPage, 'Altcoin'))}
					>
						<div
							className='trending'
						>
							<Video />
						</div>
						<span>Trending</span>
					</Link>
				</li>
			)

		default:
			return null
	}
}
