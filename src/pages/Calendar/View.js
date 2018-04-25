import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './components/header'
import Year from './components/year'
import * as actionCreator from './actionCreator'
import style from './style/view.mcss'

class Calendar extends Component {
	render () {
		return (
			<div className={style.container}>
				<Header></Header>
				<Year></Year>
			</div>
		)
	}

	componentDidMount () {
		this.props.getCalendarData()
	}
} 

const mapDispatch = (dispatch) => ({
	getCalendarData () {
		dispatch(actionCreator.dataAction())
	}
})

export default connect(null, mapDispatch)(Calendar)