import { BASE_URL } from "../../api/api"
import { 
	addAllPostsEditAction, 
	setCurrentPostEditAction 
} from "../store/editPostsReducer"

export const fetchPostsEdit = () => {
	return async dispatch => {
		try {
			fetch(`${BASE_URL}console/list`)
				.then(response => response.json())
				.then(json => dispatch(addAllPostsEditAction(json)))
		} catch (error) {
			console.error('Error', error)
		}
	}
}

export const fetchPostEdit = (id) => {
	return async dispatch => {
		try {
			fetch(`${BASE_URL}admin/update/${id}`)
				.then(response => response.json())
				.then(json => dispatch(setCurrentPostEditAction(json)))
		} catch (error) {
			console.error('Error', error)
		}
	}
}

export const putStatus = async (id, title, articleStatus) => {
	try {
		await fetch(`${BASE_URL}console/is_published`, {
			method: "PUT",
			body: JSON.stringify({
				"articleId": `${id}`,
				"title": `${title}`,
				"status": `${articleStatus}`,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		window.location.reload()
	} catch (error) {
		console.error('Error', error)
	}
}

export const putPublish = async (id, date) => {
	try {
		await fetch(`${BASE_URL}console/published_date`, {
			method: "PUT",
			body: JSON.stringify({
				"articleId": `${id}`,
				"published_date": `${date}`,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		window.location.reload()
	} catch (error) {
		console.error('Error', error)
	}
}

