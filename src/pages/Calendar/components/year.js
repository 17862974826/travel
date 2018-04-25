import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../style/year.mcss'

class Year extends Component {
	render () {
		const _calendar = this.renderCalendar();
		return (
			<div className={style.calendar}>
				<div className={style.inner}>
					<div className={style.caption}>{this.props.title}</div>					
					{_calendar}				
				</div>			
			</div>
		)
	}

	renderCalendar = () => {
		let render = this.props.data.map((item, index) => {
			return (
				<div key={index}>
					<div className={style.monthTitleCon}>
						<div className={style.monthTitle}>
							<span className={style.monthNum}>{item.month}</span>
							<span className={style.month}>月</span>
						</div>
					</div>
					<ul className={style.monthBd}>
						{
							item.record.map((imgItem, imgIndex) => {
								return (
									<li
										key={imgItem.id}
										className={!index && !imgIndex ? style.today : (!index && imgIndex === 1 ? style.second : null)}
									>
										<Link to={'/calendarDetail?id=' + imgItem.id}>
											<img src={imgItem.imgUrl} alt=''></img>
											<span className={style.num}>{imgItem.date}</span>
										</Link>
									</li>
								)
							})
						}
					</ul>
				</div>
			)
		})
		return render;
	} 
}

const mapState = (state) => {
	const { year, title, data } = state.Calendar.calendar[0]
	return {
		year,
		title,
		data
	}
}

export default connect(mapState, null)(Year)