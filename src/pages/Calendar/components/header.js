import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import style from '../style/header.mcss'

class Header extends Component {
	render () {
		return (
			<div className={style.header}>
				<Link to='/'><div className={style.backBtn}></div></Link>
				<div className={style.actionYear}>
					{this.props.tabData[0]}
				</div>
				<Link 
					className={style.all}
					to='/calendarList'>
					{this.props.tabData[1]}
				</Link>
			</div>
		)
	}
}

const mapState = (state) => {
	const { tabData, calendar } = state.Calendar
	return {
		tabData,
		calendar
	}	
}

const mapDispatch = (dispatch) => ({
	
})

export default connect(mapState, mapDispatch)(Header)