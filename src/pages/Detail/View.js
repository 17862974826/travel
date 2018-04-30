import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionData, actionSendCommit } from './actionCreator'
import './style/view.css'

class View extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: ''
		}
	}

	render () {
		const { detailData, recommend } = this.props || {}
		if (!Array.isArray(detailData) || !detailData.length) return null;
	
		const title = this.state.title
		return (
			<div className="detail-con">
				<div className="content-con">
					<div className="content" dangerouslySetInnerHTML={{__html: detailData[0]}}></div>
				</div>
				<div className="recommend-con">
					<div>
						<p className="show-recommend">评论区</p>
						{
							recommend.map((item, index) => (
								<div className="recommend-item" key={index}>
									<div className="user-pic"></div>
									<div className="recommend-item-info">
										<p>{item.name}</p>
										<p className="recommend-item-title">{item.title}</p>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<div className="commit-con">
					<input 
						placeholder="说点什么吧..." 
						value={title}
						onChange={this.handleCommentInput}
						className="comment-inp"
					/>
					<button 
						onClick={this.handleSubmitCommit}
						className="comment-btn"
					>
						发送
					</button>
				</div>
			</div>
		)
	}

	componentDidMount () {
		const {location: {pathname} = {} } = this.props || {}
		const id = pathname.substr(-1, 1)
		this.props.getDetailData(id || 1)
	}

	handleCommentInput = (e) => {
		const {value} = e.target || {}
		this.setState({
			title: value
		})
	}

	handleSubmitCommit = () => {
		const {location: {pathname} = {}, sendComment} = this.props || {}
		const id = pathname.substr(-1, 1)
		const title = this.state.title
		if (!title) return
		sendComment({id, title})
		this.setState({
				title: '说点什么吧...'
		})
	}
}

const mapState = (state) => {
	const { detailData, recommend } = state.Detail
	return {
		detailData,
		recommend
	}	
}

const mapDispatch = (dispatch) => ({	
	getDetailData (id) {
		dispatch(actionData(id))
	},
	sendComment (comment) {
		dispatch(actionSendCommit(comment))
	}
})

export default connect(mapState, mapDispatch)(View)