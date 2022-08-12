const initialState = {
	editPagePosts: [],
	editPageCurrentPost: {},
	searchQuery: '',
}

const GET_EDIT_PAGE_POSTS = 'GET_EDIT_PAGE_POSTS'
const SET_EDIT_PAGE_CURRENT_POST = 'SET_EDIT_PAGE_CURRENT_POST'

export const editPostsReducer = (state = initialState, action) => {
  switch (action.type) {
		case GET_EDIT_PAGE_POSTS:
			return {
				...state,
				editPagePosts: [ ...action.payload ],
			}

		case SET_EDIT_PAGE_CURRENT_POST:
			return {
				...state,
				editPageCurrentPost: { ...state.editPageCurrentPost, ...action.payload },
			}	
  
    default:
      return state
  }
}

export const addAllPostsEditAction = (payload) => ({ type: GET_EDIT_PAGE_POSTS, payload})
export const setCurrentPostEditAction = (payload) => ({ type: SET_EDIT_PAGE_CURRENT_POST, payload})
