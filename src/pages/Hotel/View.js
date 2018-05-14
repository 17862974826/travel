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
			activeIndex: null,
			searchFlag: true
		}
	}

	render () {
		const { distance, i2i } = this.props || {}
		const { distanceItem, searchFlag } = this.state

		return (
			<div>
				<Link to="/">
					<div className={style.header}>官网首页</div>
				</Link>
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
					  <button disabled={searchFlag} className={style.searchHotalBtn}>查找酒店</button>
					 </Link>
				</div>
				<div className={style.themeRecommend}>
					<div className={style.hotelRecommend}>主题推荐</div>
					<div>
						{
							i2i.map((item, index) => (
								<div key={index} className={style.themeRecommendItem}>
									<img src={item} alt="" />
								</div>
							))
						}
					</div>
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
			activeIndex: index,
			searchFlag: false
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