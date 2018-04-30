import React, { Component } from 'react'
import { connect } from 'react-redux'
import Banner from './components/banner'
import Content from './components/content'
import * as actionCreator from './actionCreator'
import style from './style/view.mcss'

class CalendarList extends Component {
	render() {
		return (
			<div className={style.root}>
				<div>
					<Banner />
					<Content />
					<div ref="navigatorShowMask" className={style.navigatorShowMaskCon}>
						<div className={style.navigatorShowMask}>
							<p>全部攻略</p>
							<div className={style.smallBanner}>
								<img src={this.props.banner} alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.props.getCalendarListData()
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		let scrollTop = document.documentElement.scrollTop;
		if (scrollTop >= 170) {
			this.refs.navigatorShowMask && (this.refs.navigatorShowMask.style.opacity = 1)
		} else {
			this.refs.navigatorShowMask && (this.refs.navigatorShowMask.style.opacity = 0)
		}
	}
}

const mapState = (state) => ({
	banner: state.CalendarList.banner
})

const mapDispatch = (dispatch) => ({
	getCalendarListData() {
		dispatch(actionCreator.actionData())
	}
})

export default connect(mapState, mapDispatch)(CalendarList)