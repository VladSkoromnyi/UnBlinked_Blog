import { useEffect } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/asyncActions/posts'
import { PostCard } from '../PostCard'
import { PostMiniCard } from '../PostMiniCard'
import './index.scss'

export const Home = () => {
	const dispatch = useDispatch()
	const currentPage = useSelector(state => state.posts.currentPage)
	const posts = useSelector(state => state.posts.posts)

	useEffect(() => {
		dispatch(fetchPosts(currentPage)) 
	},[dispatch, currentPage])

	return (
		<div className='Home'>
			<div className="Home__sidebar">
				<div className="Home__sidebar-block container">
					<h4 className='about-title'>
						About
					</h4>
					<p>
						The all-in-one workspace for Crypto
						Investors. Scale your trading with us.
						Please join UnBlinked.
					</p>
					<h4 className='about-title'>
						Website
					</h4>
					<p>
						<a href='https://www.unblinked.com'>
							www.unblinked.com
						</a>
					</p>
					<h4 className='about-title'>
						Twitter
					</h4>
					<p>
						<a href="https://twitter.com/UnBlinked_tweet">
							twitter.com/UnBlinked_tweet
						</a>
					</p>
					<h4 className='about-title'>
						Discord
					</h4>
					<p>
						<a href="https://discord.com/invite/hsppZSUcDu">
							discord.com/invite/hsppZSUcDu
						</a>
					</p>
					<h4 className='about-title'>
						Manual - Docs
					</h4>
					<p>
						<a href='https://www.docs.unblinked.com'>
							www.docs.unblinked.com
						</a>
					</p>
				</div>
			</div>

			<div className="Home__main">
				<h2 className='Home__title'>
					Recent Posts
				</h2>
				<ul>
					{
						posts?.length === 0
							? <TailSpin
									color='#7367F0' 
									width={100}
									height={100}
								/>
							:	posts?.slice(0, 6).map((item, i) => {
									const {
										articleId,
										title,
										writer,
										views,
										time,
										category,
										s3ArticleAddress,
										s3UserProfile
									} = item

									return (
										<PostCard
											key={articleId}
											id={articleId}
											title={title}
											writer={writer}
											created={time}
											views={views}
											category={category}
											image={s3ArticleAddress}
											userImage={s3UserProfile}
										/>
									)
								})
					}					
				</ul>
			</div>

			<div className="Home__sidebar">
				<div className="Home__sidebar-block container">
					<h4>
						Popular Posts
					</h4>
					<ul className="Sidebar__list">
						{
							posts?.slice(0, 4).map(item => {
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
		</div>
	)
}
