import { BASE_URL } from "../../api/api"
import { 
	addAllPostsAction, 
	setCurrentPostsAction 
} from "../store/postsReduser"

export const fetchPosts = (page, categ) => {
	return async dispatch => {
		try {
			// if (categ) {
			// 	fetch(`${BASE_URL}mainpage/mainboard/${page}`)
			// 		.then(response => response.json())
			// 		.then(json => dispatch(addAllPostsAction({
			// 			articles: json.articlceList.filter(({ category }) => category ? category.includes(categ) : null),
			// 			totalPages: json.maxPages,
			// 		})))	
			// } else {
				fetch(`${BASE_URL}mainpage/mainboard/${page}`)
					.then(response => response.json())
					.then(json => dispatch(addAllPostsAction({
						articles: json.articlceList,
						totalPages: json.maxPages,
					})))				
			// }
		} catch (error) {
			console.error('Error', error)
		}
	}
}

export const fetchPost = (id) => {
	return async dispatch => {
		try {
			fetch(`${BASE_URL}articlepage/${id}`)
				.then(response => response.json())
				.then(json => dispatch(setCurrentPostsAction(json)))
		} catch (error) {
			console.error('Error', error)
		}
	}
}
