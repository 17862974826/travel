import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from '../style/content.mcss'

class Content extends Component {

	render () {
		const authorStyle = {
			padding: ".03rem",
			border: "1px solid #30d2bf",
      		color: "#30d2bf"
		}
		const showLoading = this.props.loading ? "block" : "none"

		return (
			<div style={{background: '#fff',borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
				<div className={style.title}>&gt;&nbsp;&nbsp;&nbsp;推荐攻略&nbsp;&nbsp;&nbsp;&lt;</div>
				<div>
					{
						this.props.content.map((val, index) => {
							return (
								<div className={style.contentItem} key={val.id || index}>
									<div className={style.itemTitle}>{val.title}</div>
									<div className={style.bottomCon}>
										<div className={style.imgCon}>
											<img className={style.img} src={val.imgUrl} alt=""/>
										</div>
										<div className={style.summaryCon}>
											<div className={style.summary}>{val.summary}</div>
											<div className={style.visitAuthor}>
												<p>{val.visit}浏览</p>
												<p style={val.flag ? null : authorStyle}>{val.author}</p>
											</div>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
				<div style={{display: showLoading}} className={style.loadMore}>{this.props.loadingTip}</div>
			</div>
		)
	}
}

const mapState = (state) => {
	const { content, loading, loadingTip } = state.Home
	return {
		content,
		loadingTip,
		loading
	}
}

export default connect(mapState, null)(Content)