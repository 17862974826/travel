import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import style from '../style/icons.mcss'

class Icons extends Component {
	constructor() {
		super(...arguments)
		this.routers = ['strategy', 'calendar', 'hotel', 'mate']
	}
	render () {		
		return (
			<div className={style.iconsList}>
				{
					this.props.icons.map((val, index) => {
						return (
							<Link to={ `/${this.routers[index]}` } className={style.iconsItem} key={val.id || index}>
								<img className={style.iconImg} src={val.imgUrl} alt=""/>
								<p className={style.iconTitle} style={{ color: val.color}}>{val.title}</p>
							</Link>
						)
					})
				}
			</div>
		)
	}	
}

const mapState = (state) => ({
	icons: state.Home.icons
})

export default connect(mapState, null)(Icons);