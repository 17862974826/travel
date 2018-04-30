import * as actionTypes from './actionTypes'

const actionCalendarListData = (value) => ({
	type: actionTypes.CALENDARLISTDATA,
	payload: value
})

export const actionData = () => {
	return (dispatch) => {
		fetch('/api/record')
			.then(res => res.json())
			.then(res => {
				res.data && (res = res.data)
				if (res) {
					dispatch(actionCalendarListData(res))
				}
			})
			.catch(err => {
				console.log(err)
			})
	}
}