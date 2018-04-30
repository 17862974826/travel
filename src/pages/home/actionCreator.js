import { HOMEDATA, LOADMOREDATA } from './actionTypes'

const actionHomeData = (value) => ({
	type: HOMEDATA,
	payload: value
})

const actionHomeLoadMoreData = (value) => ({
	type: LOADMOREDATA,
	payload: value
})

export const actionData = (context) => {
	return (dispatch) => {
		fetch('/api/home')
			.then(res => (res.json()))
			.then(res => {
				context.scroll.refresh()
				res.data && (res = res.data)
				if (res) {
					dispatch(actionHomeData(res))
				}
			})
	}
}

export const actionLoadMoreData = (value) => {
	return (dispatch) => {
		fetch('api/home/loadMore?pNum=' + value.pNum + '&pSize=' + value.pSize)
			.then(res => res.json())
			.then(res => {
				value.context.scroll.finishPullUp()
				value.context.scroll.refresh()
				if (!res.data.content || !res.data.content.length) return
				res.data && (res = res.data)
				dispatch(actionHomeLoadMoreData(res))
			})
	}
}