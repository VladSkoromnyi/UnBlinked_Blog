import './index.scss'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const PageTitle = () => {
	const location = useLocation()
	const id = useSelector(state => state.posts.currentPost.id)
	const [pageTitle, setPageTitle] = useState('Home')

	const path = {
		home: '/',
		postsList: '/posts/list',
		postsCategory: '/posts/category',
		post: `/posts/${id}`,
	}

	useEffect(() => {
		switch (location.pathname) {
			case path.home:
				setPageTitle('Home')
				break
			case path.postsList:
				setPageTitle('Posts - List')
				break
			case path.postsCategory:
				setPageTitle('Posts - Category')
				break
			case path.post:
				setPageTitle('Post')
				break
			default:
				setPageTitle('Home')
		}
	}, [
		location.pathname,
		path.home,
		path.post,
		path.postsCategory,
		path.postsList,
	])

	return (
		<h1 className="PageTitle">
			{pageTitle}
		</h1>
	)
}
