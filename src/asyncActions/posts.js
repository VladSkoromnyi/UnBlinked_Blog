import { BASE_URL } from "../api/api"
import { addAllPostsAction } from "../store/postsReduser"
// import { v4 as uuidv4 } from 'uuid'

export const fetchPosts = (page, size) => {
	return async dispatch => {
		try {
			fetch(`${BASE_URL}?page=${page}&size=${size}`)
				.then(response => response.json())
				.then(json => dispatch(addAllPostsAction(
					json._embedded.articles.map((item, i) => {
						return { ...item, id: i + '-UnBlinked'} 
					})
				)))
		} catch (error) {
			console.error('Error', error)
		}
	}
}
