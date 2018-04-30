import * as actionTypes from './actionTypes'

const defaultState = {
	banner: [],
	listData: []
}

export default (state=defaultState, action) => {
	const data = action.payload
	switch(action.type) {
		case actionTypes.CALENDARLISTDATA: {
			return {
				...state,
				banner: data.banner,
				listData: data.listData
			}
		}
		default: return state
	}
}