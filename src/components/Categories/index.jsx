import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../../redux/asyncActions/posts'
import { ReactComponent as Watch } from '../../assets/images/watch.svg'
import { ReactComponent as Cart } from '../../assets/images/shopping-cart.svg'
import { ReactComponent as Command } from '../../assets/images/command.svg'
import { ReactComponent as Hash } from '../../assets/images/hash.svg'
import { ReactComponent as Video } from '../../assets/images/video.svg'

export const Categories = () => {
	const dispatch = useDispatch()
	const currentPage = useSelector(state => state.posts.currentPage)
	
	return (
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
	)
}

