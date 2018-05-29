import React, { Component } from 'react'
import '../../assert/style/swiper.min.css'
import { Link } from 'react-router-dom'

import style from './style/view.mcss'

class View extends Component {
	constructor() {
		super(...arguments)
		this.state = {
			playing: []
		}
	}

	render() {
		const { playing } = this.state
		if (!Array.isArray(playing) || !playing.length) return null
		return (<div className={style.container}><div dangerouslySetInnerHTML={{__html: playing[0]}}></div><div onClick={this.handleClickPush} className={style.fixed}>发起结伴</div></div>)
	}

	componentDidMount() {
		this.getData()
	}

	handleClickPush = () => {
		const username = localStorage.username
		fetch('/api/goWith?username=' + username)
			.then(res => res.json()).then(res => {
				const { message } = res || {}
				alert(message)
				if (message === '发起成功') {
					this.props.history.push('/mate')
				}
			})
	}

	getData = () => {
		fetch('/api/getDetailData')
			.then(res => res && res.json())
			.then(res => {
				const { data : { playing }= {} } = res

				this.setState({
					playing
				})
			})
	}
}
export default View