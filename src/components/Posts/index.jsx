import './index.scss'
import { useEffect, useState } from 'react'
import { getPosts } from '../../api'
import { PostCard } from '../PostCard'
import { TailSpin } from  'react-loader-spinner'

export const Posts = () => {
	const [posts, setPosts] = useState([])

	const fetchData = async () => {
		const data = await getPosts()
		setPosts(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	console.log(posts);

	return (
		<div className='Posts'>
			<ul className="Posts__list">
				{
					posts.length === 0
						? <TailSpin 
								className='loader' 
								color='#7367F0' 
								width={100} 
							/>
						:	posts?.map((item, i) => {
								const {
									id,
									title,
									userId,
									body,
								} = item

								return (
									<PostCard 
										key={id}
										id={id}
										title={title}
										userId={userId}
										body={body}
									/>
								)
							})
				}
			</ul>
		</div>
	)
}
