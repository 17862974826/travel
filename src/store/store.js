import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as HomeReducer } from '../pages/home/' 

const reducer = combineReducers({
	Home: HomeReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store