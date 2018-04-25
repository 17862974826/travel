import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../../assert/style/swiper.min.css'
import swiper from '../../../../node_modules/swiper/dist/js/swiper.min.js'
import style from '../style/banner.mcss'

class Banner extends Component {
	render() {
		return (
			<div>
				<div className="swiper-container" ref="swiper">
			    <div className="swiper-wrapper" >
		        {
		        	this.props.banner.map((val, index) => {
		        		return (
	        			 	<div className="swiper-slide" key={val.id || index}>
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
}

const mapState = () => (
	{}
)

export default connect(null, null)(Banner)