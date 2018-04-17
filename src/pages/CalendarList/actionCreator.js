import * as actionTypes from './actionTypes'

export const actionData = () => (
	(dispatch) => {
		fetch('/api/record')
			.then(res => res.json)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	}
)