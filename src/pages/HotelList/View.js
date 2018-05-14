import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionData } from './actionCreator'
import { Link } from 'react-router-dom'
import style from './style/view.mcss'

class View extends Component {
	constructor(props) {
		super(props)
		this.state = {
			city: '丽江',
			priceFlag: true,
			distanceFlag: true
		}
	}

	render() {
		const { data } = this.props || {}
		let panelConetnt = null
		if(Array.isArray(data) && data.length) {
			panelConetnt = (
				data.map((item, index) => (
					<Link className={style.item} key={item.id} to={`/hotelDetail/${item.id}`}>
						<dl>
							<dt className={style.image}>
								<img src={item.img} alt="" />
							</dt>
							<dd>
								<div className={style.title}>
									<h3>{item.title}</h3>
								</div>
								<div className={style.location}>{item.value}</div>
								<div className={style.tips}>{item.desc}</div>										
								<div className={style.rpos}>
									<div className={style.price}>
										<span></span>
										<strong>&yen;{item.price}</strong>起
									</div>
								</div>
							</dd>
						</dl>
					</Link>
				)))
		}

		return (
			<div>
				<Link to="/">
					<div className={style.header}>官网首页</div>
				</Link>
				<div className={style.sortCon}>
					<p onClick={this.handleDefaultSort}>综合排序</p>
					<p className={style.priceSort} onClick={this.handlePriceSort}>价格排序</p>
					<p  onClick={this.handleDistanceSort}>距离排序</p>
				</div>
				<div className={style.hotelItemCon}>
					{panelConetnt}
				</div>
			</div>
		)
	}

	componentDidMount() {
		const { getHotelListData } = this.props || {}
		const { location: { pathname } = {} } = this.props
		const city = pathname.substr(11)
		this.setState({
			city
		}, () => {
			let flag
			getHotelListData(city, flag="all")
		})
	}

	handleDefaultSort = () => {
		const { getHotelListData } = this.props || {}
		const { city } = this.state
		let flag
		getHotelListData(city, flag="all")
	}

	handlePriceSort = (e) => {
		const { getHotelListData } = this.props || {}
		const { priceFlag, city } = this.state
		let flag
		if (priceFlag) {
			e.target.innerHTML = "价格升序"
			getHotelListData(city, flag="priceUp")
		} else {
			e.target.innerHTML = "价格降序"
			getHotelListData(city, flag="priceDown")
		}
		this.setState({
			priceFlag: !priceFlag
		})
	}

	handleDistanceSort = (e) => {
		const { getHotelListData } = this.props || {}
		const { distanceFlag, city } = this.state
		let flag
		if (distanceFlag) {
			e.target.innerHTML = "距离升序"
			getHotelListData(city, flag="distanceUp")
		} else {
			e.target.innerHTML = "距离降序"
			getHotelListData(city, flag="distanceDown")
		}
		this.setState({
			distanceFlag: !distanceFlag
		})
	}
}

const mapState = (state) => {
	const { data } = state.HotelList
	return {
		data
	}
}

const mapDispatch = (dispatch) => ({	
	getHotelListData (city, flag) {
		dispatch(actionData(city, flag))
	}
})

export default connect(mapState, mapDispatch)(View)