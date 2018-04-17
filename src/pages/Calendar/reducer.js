import * as actionTypes from './actionTypes'

const defaultState = {
	tabData: Array(2).fill(""),
	calendar: [{
		year: '',
		title: '',
		data: []
	}]
}

const reducer = (state=defaultState, action) => {
	const data = action.payload
	switch(action.type) {
		case actionTypes.CALENDAR_DATA: {
			return {
				...state,
				tabData: data.tabData,
				calendar: data.calendar
			}
		}
		default: return state
	}
}

export default reducer