import { HOTELDETAILDATA } from './actionTypes'

const actionHotelDetailData = (value) => ({
	type: HOTELDETAILDATA,
	payload: value
})


export const actionData = (city) => {
	return (dispatch) => {
		fetch(`/api/hotelDetail?city=${city}`)
			.then(res => (res.json()))
			.then(res => {
				if (!res.ret) return
				dispatch(actionHotelDetailData(res))
			})
	}
}

