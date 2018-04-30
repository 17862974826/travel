import { DETAILDATA } from './actionTypes'

const actionDetailData = (value) => ({
	type: DETAILDATA,
	payload: value
})


export const actionData = (id) => {
	return (dispatch) => {
		fetch(`/api/detail?id=${id}`)
			.then(res => (res.json()))
			.then(res => {
				res.data && (res = res.data)
				if (res) {
					dispatch(actionDetailData(res))
				}
			})
	}
}

export const actionSendCommit = (comment) => {
	const { id, title } = comment
	return (dispatch) => {
		fetch(`/api/detailComment?id=${id}&title=${title}`)
			.then(res => (res.json()))
			.then(res => {
				if (!res.ret) return
				actionData(id)(dispatch)
			})
	}
}
