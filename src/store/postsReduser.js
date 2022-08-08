const initialState = {
  posts: [],
	currentPost: {},
	currentPage: 0,
	itemsOnPage: 20,
}

const GET_POSTS = 'GET_POSTS'
const SET_CURRENT_POST = 'SET_CURRENT_POST'
const PREV_POSTS_PAGE = 'PREV_POSTS_PAGE'
const NEXT_POSTS_PAGE = 'NEXT_POSTS_PAGE'
const CHANGE_ITEMS_ON_PAGE = 'CHANGE_ITEMS_ON_PAGE'

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
				...state,
				posts: [ ...state.posts, action.payload ],
			}

		case SET_CURRENT_POST:
			return {
				...state,
				currentPost: state.posts.flat().find(item => item.id === action.payload),
			}	
		
		case PREV_POSTS_PAGE:
			return {
				...state,
				currentPage: state.currentPage--,
			}
		
		case NEXT_POSTS_PAGE:
			return {
				...state,
				currentPage: state.currentPage++,
			}
		
		case CHANGE_ITEMS_ON_PAGE:
			return {
				...state,
				itemsOnPage: action.payload,
			}
  
    default:
      return state
  }
}

export const addAllPostsAction = (payload) => ({ type: GET_POSTS, payload})
export const setCurrentPostsAction = (payload) => ({ type: SET_CURRENT_POST, payload})
export const prevPostsPageAction = (payload) => ({ type: PREV_POSTS_PAGE, payload})
export const nextPostsPageAction = (payload) => ({ type: NEXT_POSTS_PAGE, payload})
