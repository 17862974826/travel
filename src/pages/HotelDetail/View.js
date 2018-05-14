import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionData } from './actionCreator'
import style from './style/view.mcss'

import Pictrue from '../../component/Pictrue'

class View extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: null,
			activeIndex: null,
			price: '还未选择房间',
			showPic: false
		}
	}

	render() {
		const { data: { data } = {} } = this.props || {}
		if(!Array.isArray(data) || !data.length) return null
		const { banner, desc, title, imgList, apartment } = data[0] || {}
		const { activeIndex, price, showPic } = this.state || {}
		if(showPic) return <Pictrue onPictrueShow={this.handlePictrueShow} imgList={imgList}/>
		return (
			<div>
				<div className={style.picWrap}>
					<img src={banner} alt=""  className={style.pic} onClick={this.handlePictrueShow}/>
					<p className={style.title}>{title}</p>
				</div>
				<div className={style.desc}>{desc}</div>
				<div className={style.hotel}>
					{
						Array.isArray(apartment) && apartment.length ? (apartment.map((item, index) => {
							const { desc, title, prie, imgUrl, id } = item || {}
							return (
								<div key={id}>
									<div onClick={this.handleActiveChange.bind(this, index, prie, id)} className={activeIndex === index ? style.itemActive : style.itemContent}>
										<img src={imgUrl} alt="" className={style.itemPic}/>
										<div className={style.textWrap}>
											<p className={style.itemTitle}>{title}</p>
											<p className={style.itemDesc}>{desc}</p>
											<p className={style.price}>￥{prie}</p>
										</div>
									</div>
								</div>
								)
						})) : null
					}
				</div>
				<div className={style.pay}>
					<div className={style.down}>{price}</div>
					<p className={style.parchase} onClick={this.handlePayClick}>现在就预订</p>
				</div>
			</div>
		)
	}

	handleActiveChange = (index, price, id) => {
		this.setState({
			activeIndex: index,
			price: `最低￥${price}`,
			id
		})
	}

	handlePictrueShow = () => {
		const { showPic } = this.state
		this.setState({
			showPic: !showPic
		})
	}

	handlePayClick = () => {
		const { id } = this.state || {}
		if (!id) return 
		this.props.sendHotelId(id)
	}

	componentDidMount() {
		const { getHotelListData } = this.props || {}
		getHotelListData(this)
	}
}

const mapState = (state) => {
	const { data } = state.HotelDetail || {}
	return {
		data
	}
}

const mapDispatch = (dispatch) => ({	
	getHotelListData (context) {
		const { location: { pathname } = {} } = context.props
		const flag = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.lastIndexOf('/') + 2)
		let city = null
		if (flag === 'x') {
			city = '西藏'
		} else {
			city = '丽江'
		}
		dispatch(actionData(city))
	},
	sendHotelId (id) {
		const { username } = localStorage || {}
		fetch(`/api/saveUserHotel?id=${id}&username=${username}`)
			.then(res => {
				if(res == "undefined" || res == "null") {
					return res = {}
				}
				res.json()
			})
			.then(res => {
				console.log(res)
			})
	}
})

export default connect(mapState, mapDispatch)(View)