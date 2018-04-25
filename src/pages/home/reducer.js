import { HOMEDATA } from './actionTypes'
const defaultState = {
	banner: [],
	icons: [],
	content: []
}
const reducer = (state = defaultState, action) => {
	const data = action.payload
	switch (action.type) {
		case HOMEDATA: {
			return Object.assign({}, state, {
				banner: data.banner,
				icons: data.icon,
				content: data.content
			})
		}
		default: return state
	}
}
export default reducer