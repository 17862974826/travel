import { HOMEDATA } from './actionTypes'

const actionHomeData = (value) => ({
	type: HOMEDATA,
	payload: value
})
export const actionData = () => {
	return (dispatch) => {
		fetch('/api/home')
			.then(res => (res.json()))
			.then(res => {
				res.data && (res = res.data)
				if (res) {
					dispatch(actionHomeData(res))
				}
			})
	}
}