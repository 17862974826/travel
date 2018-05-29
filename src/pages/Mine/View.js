import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './style/view.mcss'

const pic = 'https://n4-q.mafengwo.net/s11/M00/89/4D/wKgBEFpcM2iANPpjAATjzSpEhgM11.jpeg?imageMogr2%2Fthumbnail%2F%21750x300r%2Fgravity%2FCenter%2Fcrop%2F%21750x300%2Fquality%2F100'
class View extends Component {
	constructor () {
		super(...arguments)
		this.state = {
			data: []
		}
	}
	render() {
		if (!localStorage.username) {
			this.props.history.push('/login')
		}
		const { data } = this.state
		return (
			<div>
				<div className={style.header}><Link to='/'>官网首页</Link></div>
				<div className={style.content}>
					<img src={pic}  alt= '' className={style.headerPic}/>
					<div>{localStorage.username}</div>
					<Link to="/share" className={style.share}>分享</Link>
				</div>
				 <div className={style.container}>
				 	{
				 		data.filter(item => item).map((item, index) => {
				 			return (<div className={style.item} key={index}>
				 				<p>{item.title}</p>
				 				<p>{item.num}</p>
				 			</div>)
				 		})
				 	}
				 	{Array.isArray(data) && data.length ? <div className={style.item} onClick={this.handleExitClick}>退出登录</div> : null}
				 </div>
			</div>
		)
	}
	handleExitClick = () => {
		localStorage.username = ''
		this.props.history.push('/login')
	}
componentDidMount() {
	const { username } = localStorage
	fetch('/api/getMeData?username=' + username)
			.then(res => res && res.json())
			.then(res => {
				const { data } = res || {}
				this.setState({
					data,
				})
			})
}
}
export default View