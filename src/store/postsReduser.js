const initialState = {
  posts: [],
	currentPost: {},
	totalPages: 8,
	currentPage: 0,
	categories: [
		'UnBlinked News',
		'Bitcoin Wiki',
		'Crypto Wiki',
		'Trader\'s Guide',
		'Trending',
	]
}

const GET_POSTS = 'GET_POSTS'
const SET_CURRENT_POST = 'SET_CURRENT_POST'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
				...state,
				posts: action.payload.articles,
				// totalPages: action.payload.totalPages,
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
export const setCurrentPostsAction = (payload) => ({ type: SET_CURRENT_POST, payload})
export const setCurrentPageAction = (payload) => ({ type: SET_CURRENT_PAGE, payload})
