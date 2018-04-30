import { DETAILDATA } from './actionTypes'

const defaultState = {
	detailData: [],
	recommend: []
}
const reducer = (state = defaultState, action) => {
	const data = action.payload
	switch (action.type) {
		case DETAILDATA: {
			return {
				...state,
				detailData: data.detailData,
				recommend: data.recommend
			}
		}
		default: return state
	}
}
export default reducer