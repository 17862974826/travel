import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as HomeReducer } from '../pages/home/' 
import { reducer as CalendarReducer } from '../pages/Calendar/' 
import { reducer as CalendarListReducer } from '../pages/CalendarList/' 
import { reducer as DetailReducer } from '../pages/Detail/' 
import { reducer as HotelReducer } from '../pages/Hotel/' 
import { reducer as HotelListReducer } from '../pages/HotelList/' 
import { reducer as HotelDetailReducer } from '../pages/HotelDetail/' 

const reducer = combineReducers({
	Home: HomeReducer,
	Calendar: CalendarReducer,
	CalendarList: CalendarListReducer,
	Detail: DetailReducer,
	Hotel: HotelReducer,
	HotelList: HotelListReducer,
	HotelDetail: HotelDetailReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store