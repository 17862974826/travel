import React, { Component } from 'react'
import style from './style/pictrue.mcss'
import '../assert/style/swiper.min.css'
import swiper from '../../node_modules/swiper/dist/js/swiper.min.js'

class pictrue extends Component {

	render () {
		const { imgList } = this.props || {}
		if(!Array.isArray(imgList) || !imgList.length) return 
		const panelContent = (
			<div className={style.wrapper} onClick={this.handlePictrueClick}>
				<div className="swiper-container" ref="swiper">
				    <div className="swiper-wrapper">
				        {
				        	imgList.map((val, index) => {
				        		return (
				        			 <div className="swiper-slide" key={index}>
							        	<div className={style.imgWrap}>
							        		<img src={val} alt="" className={style.pic}/>
							        	</div>
							        </div>
				        		)
				        	})
				        }
				    </div>
				</div>
			</div>
			) 
		return panelContent
	}

	componentDidMount () {
		this.swiper = new swiper(this.refs.swiper, {
			initialSlide: 0,

			observer: true
		})
	}

	handlePictrueClick = () => {
		const { onPictrueShow } = this.props
		onPictrueShow()
	}
	
}
	
export default pictrue