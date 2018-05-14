import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../style/content.mcss'

class Content extends Component {
	render() {
		return (
			<div className={style.contentCon}>
				<div className={style.mask}></div>
				<div className={style.content}>
					{
						this.props.listData.map((item, index) => (
							<div onClick={this.handleAddPraise.bind(this, item.id)} key={item.id}>
								<Link to={`/detail/travel/${index % 3 + 1}`} className={style.contentItemCon}>
									<div className={style.itemLeft}>
										<h3 className={style.itemTitle}>{item.title}</h3>
										<div style={{display: 'flex', justifyContent: 'space-between'}}>
											<p className={style.position}>在<span style={{color: '#ff9d00'}}>{item.city}</span></p>
											<p className={style.praise}><i></i>{item.praise}</p>
										</div>
									</div>
									<div className={style.itemImgCon}>
										<img src={item.imgUrl} alt='' />
									</div>
								</Link>
							</div>
						))
					}
				</div>
			</div>
		)
	}

	handleAddPraise = (id) => {
		console.log(id)
		fetch(`/api/savePraise?id=${id}`)
			.then(res => {
				if (res == "undefined" || res == "null") return res = {}
				res.json()
			})
			.then(res => {
				console.log(res)
			})
			
	}
}

const mapState = (state) => ({
	listData: state.CalendarList.listData
})

export default connect(mapState, null)(Content)