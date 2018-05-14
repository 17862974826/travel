import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './style/view.mcss'

class View extends Component {
	render() {
		return (
			<div>
				<div className={style.header}>我的</div>
				<div>
					<Link to="/share">分享</Link>
				</div>
			</div>
		)
	}
}
export default View