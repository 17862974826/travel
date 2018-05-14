import { HOTELLISTDATA } from './actionTypes'

const actionHotelListData = (value) => ({
	type: HOTELLISTDATA,
	payload: value
})


export const actionData = (city, flag) => {
	return (dispatch) => {
		fetch(`/api/hotelContent?city=${city}&flag=${flag}`)
			.then(res => (res.json()))
			.then(res => {
				if (!res.ret) return
				dispatch(actionHotelListData(res))
			})
	}
}

