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
						Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.
					</p>
					<h4 className='about-title'>
						Joined
					</h4>
					<p>
						November 15, 2015
					</p>
					<h4 className='about-title'>
						Lives:
					</h4>
					<p>
						New York, USA
					</p>
					<h4 className='about-title'>
						Email:
					</h4>
					<p>
						<a href='mailto:hannah.ruiz@gmail.com'>
							hannah.ruiz@gmail.com
						</a>
					</p>
					<h4 className='about-title'>
						Website
					</h4>
					<p>
						<a href='http://www.pixinvent.com'>
							www.pixinvent.com
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
