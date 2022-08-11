import { BASE_URL } from "../../api/api"
import { addAllPostsEditAction, setCurrentPostsEditAction } from "../store/editPostsReducer"

export const fetchPostsEdit = (page) => {
	return async dispatch => {
		try {
			fetch(`${BASE_URL}mainpage/mainboard/${page}`)
				.then(response => response.json())
				.then(json => dispatch(addAllPostsEditAction({
					articles: json.articlceList,
					totalPages: json.maxPage,
				})))
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
				.then(json => dispatch(setCurrentPostsEditAction(json)))
		} catch (error) {
			console.error('Error', error)
		}
	}
}
