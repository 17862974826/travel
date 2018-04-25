import React, { Component } from 'react'
import { connect } from 'react-redux'
import Banner from './components/banner'
import * as actionCreator from './actionCreator'
// import './style/view.mcss'

class CalendarList extends Component {
	render() {
		return (
			<div>
				<Banner />
			</div>
		)
	}
	componentDidMount() {
		
	}
}

const mapDispatch = (dispatch) => ({
}
	
)

export default connect(null, null)(CalendarList)