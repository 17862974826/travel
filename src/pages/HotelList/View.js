import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionData } from './actionCreator'
import { Link } from 'react-router-dom'
import style from './style/view.mcss'

class View extends Component {
	constructor(props) {
		super(props)

		this.state = {
			distanceItem: '丽江'
		}
	}

	render () {
		const { distance, i2i } = this.props || {}
		const { distanceItem } = this.state

		return (
			<div>
				<div className={style.header}>
					<p className={style.logo}>
						<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2428856136,3987620462&fm=27&gp=0.jpg" alt="" />
					</p>
					<Link to="/" className={style.home}>官网首页</Link>
				</div>
				<div className={style.distanceCon}>
					<p className={style.distance}>目的地</p>
					<div className={style.chooseDistance} onClick={this.handleShowDistance}>目的地/城市</div>
					<div 
						className={style.distanceItems} 
						ref="distanceItems"
						onClick={this.getDistance}
					>
						{
							distance.map((item, index) => (
								<p key={index} className={style.cityItem}>{item}</p>
							))
						}
					</div>
					<Link to={`/hotalDetail/${distanceItem}`}>
					  <button className={style.searchHotalBtn}>查找酒店</button>
					 </Link>
				</div>
			</div>
		)
	}

	componentDidMount () {
		const { getHotelData } = this.props || {}
		getHotelData()
	}

	handleShowDistance = () => {
		this.refs.distanceItems.style.height = '1rem'
		this.refs.distanceItems.style.opacity = 1
	}

	getDistance = (e) => {
		this.setState({
			distanceItem: e.target.innerHTML
		})
	}
}

const mapState = (state) => {
	const { distance, i2i } = state.Hotel
	return {
		distance,
		i2i
	}
}

const mapDispatch = (dispatch) => ({	
	getHotelData () {
		dispatch(actionData())
	}
})

export default connect(mapState, mapDispatch)(View)