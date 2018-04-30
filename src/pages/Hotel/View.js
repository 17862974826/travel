import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionData } from './actionCreator'
import { Link } from 'react-router-dom'
import style from './style/view.mcss'

class View extends Component {
	constructor(props) {
		super(props)

		this.state = {
			distanceItem: '',
			activeIndex: null
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
					>
						{
							distance.map((item, index) => {
								if (index === this.state.activeIndex) {
									return <p key={index} onClick={this.getDistance.bind(this, index)} className={style.activeDistanceItem}>{item}</p>
								}
								return <p key={index}  onClick={this.getDistance.bind(this, index)} className={style.cityItem}>{item}</p>
							})
						}
					</div>
					<Link to={`/hotalList/${distanceItem}`}>
					  <button className={style.searchHotalBtn}>查找酒店</button>
					 </Link>
				</div>
				<div className={style.themeRecommend}>
					<div className={style.hotelRecommend}>主题推荐</div>
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
		setTimeout(() => {
			this.refs.distanceItems.style.opacity = 1
		}, 400)
	}

	getDistance = (index, e) => {
		this.setState({
			distanceItem: e.target.innerHTML,
			activeIndex: index
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