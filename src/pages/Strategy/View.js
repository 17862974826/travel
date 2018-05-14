import React, { Component } from 'react'
import '../../assert/style/swiper.min.css'
import swiper from '../../../node_modules/swiper/dist/js/swiper.min.js'

import style from './style/view.mcss'

class View extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {},
			navIndex: 0
		}
	}

	render() {

		const { data: {
			navigator = [],
			playing = [],
			sight = []
		} = {},
		navIndex } = this.state || {};

		let renderSight = ''
		if (!Array.isArray(sight) || !sight.length) {
			renderSight = ''
		} else {
			renderSight = (
				<div>
					<div className={style.bannerCon}>
						<img src={sight[navIndex].imgUrl} alt="" />
					</div>
					<div className={style.strategyCon}>
						<h3 className={style.strategyTitle}>旅游攻略</h3>
						<div className={style.desc}>
							{sight[navIndex].title}
						</div>
					</div>
				</div>
			)
		}


		return (
			<div className={style.wrapper}>
				<div className={style.nav}>
					{
						navigator.map((navItem, navIndex) => {
							return (
								<p key={`strategy-nav${navIndex}`} onClick={this.handleChangeNav.bind(this, navIndex)}>{navItem}</p>
							)
						})
					}
				</div>	
				<div className={style.contentCon}>
					{renderSight}
					<div className={style.playingCon}>
						<h3 className={style.playingTitle}>玩法路线</h3>
						<div className="swiper-container" ref={swiper => {this.swiperRef = swiper}}>
					    <div className="swiper-wrapper">
				        {
				        	playing.map((val, index) => {
				        		return (
				        			 <div className={style.swiperSlide + ' swiper-slide'} key={`${val.imgUrl}${index}`}>
				        			 	<h5 className={style.playingItemTitle}>
				        			 		<span className={style.num}>{index + 1}</span>
				        			 		<span>{val.title}</span>
				        			 	</h5>
							        	<div className={style.imgWrap}>
							        		<img src={val.imgUrl} alt="" className={style.pic}/>
							        	</div>
							        	<div className={style.playingItemDesc}>{val.desc}</div>
							        </div>
				        		)
				        	})
				        }
					    </div>
					  </div>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.getData()
			this.swiper = new swiper(this.swiperRef, {
				initialSlide: 0,
			 	observer:true,
			 	observeParents:true,
			 	loop: true
		})
	}

	getData = () => {
		fetch('/api/playIndex')
			.then(res => res && res.json())
			.then(res => {
				const { data = [] } = res
				this.setState({
					data: data[0]
				})
			})
	}

	handleChangeNav = (navIndex, e) => {
		this.setState({
			navIndex
		})
	}
}
export default View