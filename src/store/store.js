import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as HomeReducer } from '../pages/home/' 
import { reducer as CalendarReducer } from '../pages/Calendar/' 
import { reducer as CalendarListReducer } from '../pages/CalendarList/' 
import { reducer as DetailReducer } from '../pages/Detail/' 
import { reducer as HotelReducer } from '../pages/Hotel/' 

const reducer = combineReducers({
	Home: HomeReducer,
	Calendar: CalendarReducer,
	CalendarList: CalendarListReducer,
	Detail: DetailReducer,
	Hotel: HotelReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store