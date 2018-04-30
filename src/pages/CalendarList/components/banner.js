import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from '../style/banner.mcss'

class Banner extends Component {
	render() {
		return (
			<div className={style.banner}>
				<img src={this.props.banner} alt="" />
			</div>
		)
	}
}

const mapState = (state) => ({
	banner: state.CalendarList.banner
})

export default connect(mapState, null)(Banner)