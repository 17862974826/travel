import { HOMEDATA } from './actionTypes'
const defaultState = {
	banner: []
}
const reducer = (state = defaultState, action) => {
	const data = action.payload
	switch (action.type) {
		case HOMEDATA: {
			return Object.assign({}, state, {
				banner: data.banner
			})
		}
		default: return state
	}
}
export default reducer