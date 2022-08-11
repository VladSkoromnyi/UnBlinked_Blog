const initialState = {
	editPagePosts: [],
	editPageCurrentPost: {},

	totalItems: 0,
	itemsOnPage: 10,
	currentPage: 1,
	totalPages: 0,
	
	searchQuery: '',
}

const GET_EDIT_PAGE_POSTS = 'GET_EDIT_PAGE_POSTS'
const SET_EDIT_PAGE_CURRENT_POST = 'SET_EDIT_PAGE_CURRENT_POST'

const SET_EDIT_PAGE_CURRENT_PAGE = 'SET_EDIT_PAGE_CURRENT_PAGE'
const SET_EDIT_PAGE_TOTAL_ITEMS = 'SET_EDIT_PAGE_TOTAL_ITEMS'
const SET_EDIT_PAGE_TOTAL_PAGES = 'SET_EDIT_PAGE_TOTAL_PAGES'
const SET_EDIT_PAGE_ITEMS_ON_PAGE = 'SET_EDIT_PAGE_ITEMS_ON_PAGE'

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
		
		case SET_EDIT_PAGE_CURRENT_PAGE:
			return {
				...state,
				editPageCurrentPage: action.payload,
			}
  
    default:
      return state
  }
}

export const addAllPostsEditAction = (payload) => ({ type: GET_EDIT_PAGE_POSTS, payload})
export const setCurrentPostEditAction = (payload) => ({ type: SET_EDIT_PAGE_CURRENT_POST, payload})
export const setCurrentPageEditAction = (payload) => ({ type: SET_EDIT_PAGE_CURRENT_PAGE, payload})
