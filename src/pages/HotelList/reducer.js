import { HOTELDATA } from './actionTypes'

const defaultState = {
	distance: [],
	i2i: []
}
const reducer = (state = defaultState, action) => {
	const data = action.payload
	switch (action.type) {
		case HOTELDATA: {
			return {
				...state,
				distance: data.distance,
				i2i: data.i2i
			}
		}
		default: return state
	}
}
export default reducer