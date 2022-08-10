const initialState = {
  posts: [],
	currentPost: {},
	totalPages: 0,
	currentPage: 0,
	currentCategory: '',
}

const GET_POSTS = 'GET_POSTS'
const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'
const SET_CURRENT_POST = 'SET_CURRENT_POST'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
				...state,
				posts: [ ...action.payload.articles ],
				totalPages: action.payload.totalPages,
			}

		case FILTER_BY_CATEGORY:
			return {
				...state,
				posts: state.posts.filter(({ category }) => category ? category.includes(action.payload) : null),
			}	
		
		case SET_CURRENT_CATEGORY:
			return {
				...state,
				currentCategory: action.payload,
			}
		
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			}

		case SET_CURRENT_POST:
			return {
				...state,
				currentPost: action.payload,
			}	
  
    default:
      return state
  }
}

export const addAllPostsAction = (payload) => ({ type: GET_POSTS, payload})
export const filterByCategoryAction = (payload) => ({ type: FILTER_BY_CATEGORY, payload})
export const setCurrentCategoryAction = (payload) => ({ type: SET_CURRENT_CATEGORY, payload})
export const setCurrentPostsAction = (payload) => ({ type: SET_CURRENT_POST, payload})
export const setCurrentPageAction = (payload) => ({ type: SET_CURRENT_PAGE, payload})
