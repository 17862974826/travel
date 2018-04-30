import { HOTELDATA } from './actionTypes'

const actionHotelData = (value) => ({
	type: HOTELDATA,
	payload: value
})


export const actionData = () => {
	return (dispatch) => {
		fetch(`/api/hotel`)
			.then(res => (res.json()))
			.then(res => {
				if (!res.ret) return
				dispatch(actionHotelData(res))
			})
	}
}

