import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './style/view.mcss'

class View extends Component {
	constructor () {
		super(...arguments)
		this.state = {
			targetActiveFlag: false,
			timeActiveFlag: false,
			data: {}
		}
	}

	render() {
		const { data: {
			banner = "https://images.mafengwo.net/mobile/images/together/topNum-bg.jpg",
			travelPlans = "363567",
			people = "148437",
			targets = "376485",
			teams = [],
			distances = [],
			startDate = []
		}, targetActiveFlag, timeActiveFlag } = this.state || {}
		let _renderlist = ""
		if (!Array.isArray(teams) || !teams.length) {
			_renderlist = (<div className={style.try}>发起结伴试试！</div>)
		} else {
			_renderlist = (
				<ul style={{overflow: 'hidden'}}>
					{
						teams.map((item, index) => (
							<li className={style.item} key={item.id}>
						    <a href="https://m.mafengwo.cn/together/detail/2147475.html">
					        <div className={style.cover}>
				            <img src={item.imgUrl} alt="" />
				            <div className={style.title}>
				                <h3>{item.title}</h3>
				                <span>{item.days}</span>
				            </div>
				            <span className={style.departureDate}>{item.start} 出发</span>
					        </div>
					        <div className={style.info}>
				            <span className={style.userPic}><img src={item.picUrl} alt="" /></span>
				            <span className={style.name}>{item.name}</span>
				            <span className={style.level}>{item.level}</span>
				            <span className={style.location}>{item.location}</span>
				            <p className={style.txt}>{item.desc}</p>
					        </div>
						    </a>
							</li>
						))
					}
				</ul>
			)
		}

		return (
			<div className={style.wrapper}>
				<Link to="/">
					<div className={style.header}>官网首页</div>
				</Link>
				<div className={style.tab}>
					<div onClick={this.showDistances} className={!targetActiveFlag ? style.target : style.activeTab}>目的地</div>
					<div onClick={this.showStartDate}  className={!timeActiveFlag ? style.time : style.activeTab }>全部出发时间</div>
				</div>
				<div className={style.content}>
					<div className={style.banner}>
				    <img width="100%" src={banner} alt=""/>
				    <div className={style.vam}>
			        <ul>
		            <li>
	                <span><em>{travelPlans}</em><br/>个旅行计划</span>
	                <span><em>{people}</em><br/>人参与</span>
	                <span><em>{targets}</em><br/>个目的地</span>
		            </li>
			        </ul>
				    </div>
					</div>
					<div className={style.listCon}>
						{_renderlist}
					</div>
					<div className={style.footer}>
						<a className={style.getMateBtn}>发起结伴</a>
					</div>
					{
						targetActiveFlag ? (
							<div className={style.distances}>
								<ul>
									{
										distances.map((item, index) => (
											<li key={index} onClick={this.getCurrentDistanceData.bind(this, item)}>{item}</li>
										))
									}
								</ul>
							</div>
						) : null
					}
					{
						timeActiveFlag ? (
							<div className={style.startDate}>
								<ul>
									{
										startDate.map((item, index) => (
											<li key={index}  onClick={this.getCurrentStartDateData.bind(this, item[0])}>
												<span>{item[0]}</span>
												<span className={style.mateCount}>{item[1]}</span>
											</li>
										))
									}
								</ul>
							</div>
						) : null
					}
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.getData()
	}

	getData = () => {
		fetch('/api/mate.json')
			.then(res => res.json())
			.then(res => {
				res = res.data
				this.setState({
					data: res
				})
			})
	}

	showDistances = () => {
		const { targetActiveFlag, timeActiveFlag } = this.state || {}
		if (timeActiveFlag) {
			this.setState({
				timeActiveFlag: false
			})
		}
		this.setState({
			targetActiveFlag: !targetActiveFlag
		})
	}

	showStartDate = () => {
		const { targetActiveFlag, timeActiveFlag } = this.state || {}
		if (targetActiveFlag) {
			this.setState({
				targetActiveFlag: false
			})
		}
		this.setState({
			timeActiveFlag: !timeActiveFlag
		})
	}

	getCurrentDistanceData = (distance) => {
		const { targetActiveFlag } = this.state || {}
		this.setState({
			targetActiveFlag: false
		})
		fetch('/api/distance.json')
			.then(res => res.json())
			.then(res => {
				res = res.data
				this.setState({
					data: res
				})
			})
	}

	getCurrentStartDateData = (startDate) => {
		const { timeActiveFlag } = this.state || {}
		this.setState({
			timeActiveFlag: false
		})
		fetch('/api/startDate.json')
			.then(res => res.json())
			.then(res => {
				res = res.data
				this.setState({
					data: res
				})
			})
	}
}
export default View