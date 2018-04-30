import { HOMEDATA, LOADMOREDATA } from './actionTypes'
const defaultState = {
	banner: [],
	icons: [],
	content: [],
	pNum: 2,
	pSize: 5
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
		case LOADMOREDATA: {
			return {
				...state,
				content: [...state.content, ...data.content],
				pNum: state.pNum + 1
			}
		}
		default: return state
	}
}
export default reducer