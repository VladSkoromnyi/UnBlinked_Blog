const initialState = {
	editPagePosts: [],
	editPageCurrentPost: {},
	editPageTotalPages: 0,
	editPageCurrentPage: 0,
	
	searchQuery: '',
}

const GET_EDIT_PAGE_POSTS = 'GET_EDIT_PAGE_POSTS'
const SET_EDIT_PAGE_CURRENT_POST = 'GET_EDIT_PAGE_POSTS'
const SET_EDIT_PAGE_CURRENT_PAGE = 'GET_EDIT_PAGE_POSTS'

export const editPostsReducer = (state = initialState, action) => {
  switch (action.type) {
		case GET_EDIT_PAGE_POSTS:
			return {
				...state,
				editPagePosts: [ ...action.payload.articles ],
				editPageTotalPages: action.payload.totalPages,
			}
		
		case SET_EDIT_PAGE_CURRENT_PAGE:
			return {
				...state,
				editPageCurrentPage: action.payload,
			}

		case SET_EDIT_PAGE_CURRENT_POST:
			return {
				...state,
				editPageCurrentPost: action.payload,
			}	
  
    default:
      return state
  }
}

export const addAllPostsEditAction = (payload) => ({ type: GET_EDIT_PAGE_POSTS, payload})
export const setCurrentPostsEditAction = (payload) => ({ type: SET_EDIT_PAGE_CURRENT_PAGE, payload})
export const setCurrentPageEditAction = (payload) => ({ type: SET_EDIT_PAGE_CURRENT_POST, payload})
