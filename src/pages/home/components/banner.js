import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../../../assert/style/swiper.min.css'
import swiper from '../../../../node_modules/swiper/dist/js/swiper.min.js'
import style from '../style/banner.mcss'
import '../style/banner.css'
class Banner extends Component {
	render () {
		return (
			<div>
			<div className="swiper-container" ref="swiper">
			    <div className="swiper-wrapper">
			        {
			        	this.props.banner.map((val) => {
			        		return (
			        			 <div className="swiper-slide" key={val.id}>
						        	<div className={style.imgWrap}>
						        	<img src={val.imgUrl} alt="" className={style.pic}/>
						        	</div>
						        </div>
			        		)
			        	})
			        }
			    </div>
			    <div className="swiper-pagination"></div>
			</div>
			</div>
			)
	}
	componentDidUpdate () {
		this.props.createSwiper(this)
	}
} 

const mapState = (state) => ({
	banner: state.Home.banner
})
const mapDispatch = () => ({
	createSwiper (context) {
		context.swiper = new swiper(context.refs.swiper, {
			autoplay: 6000,
			initialSlide: 0,
			pagination: '.swiper-pagination',
			loop: true
		})
	}
})
export default connect(mapState, mapDispatch)(Banner)