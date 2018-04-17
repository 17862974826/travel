import * as actionTypes from './actionTypes'

const calendarData = (value) => ({
	type: actionTypes.CALENDAR_DATA,
	payload: value
})

export const dataAction = () => {
	return (dispatch) => {
		fetch('/api/calendar')
			.then(res => res.json())
			.then(res => {
				if (!res) return
				dispatch(calendarData(res.data))
			})
	}
}
