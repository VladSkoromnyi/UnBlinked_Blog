import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { editPostsReducer } from './editPostsReducer';
import { postsReducer } from './postsReduser';

const rootReducer = combineReducers({
	posts: postsReducer,
	edit: editPostsReducer,
})

export const store = createStore(
	rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))
	)
