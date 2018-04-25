import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as HomeReducer } from '../pages/home/' 
import { reducer as CalendarReducer } from '../pages/Calendar/' 

const reducer = combineReducers({
	Home: HomeReducer,
	Calendar: CalendarReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store