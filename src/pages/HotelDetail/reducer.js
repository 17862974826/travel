import { HOTELDETAILDATA } from './actionTypes'

const defaultState = {
	data: []
}
const reducer = (state = defaultState, action) => {
	const data = action.payload
	switch (action.type) {
		case HOTELDETAILDATA: {
			return {
				...state,
				data: data.data		
			}
		}
		default: return state
	}
}
export default reducer