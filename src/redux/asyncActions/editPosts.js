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
