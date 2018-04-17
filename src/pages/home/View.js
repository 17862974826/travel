import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionData } from './actionCreator'
import Header from './components/header'
import Banner from './components/banner'
import Icons from './components/icons'
import BScroll from 'better-scroll'
import style from './style/view.mcss'
import { Link } from 'react-router-dom'
class View extends Component {

	render () {
		return (
			<div className={style.root}>
				<Header></Header>
				<div className={style.wrapper} ref="wrapper">
					<div className={style.content}>
						<Banner></Banner>
						{/* <Icons></Icons>*/}
					</div>
				</div>
				<div className={style.footer}>
					<Link to="/"  className={style.active}>
						<span className="iconfont" style={{fontSize: '0.5rem'}}>&#xe67e;</span>
						<p>首页</p>
					</Link>
					<Link to="/"  className={style.items}>
						<span className="iconfont" style={{fontSize: '0.5rem'}}>&#xe66b;</span>
						<p>分类</p>
					</Link>
					<Link to="/"  className={style.items}>
						<span className="iconfont" style={{fontSize: '0.5rem'}}>&#xe625;</span>
						<p>客服</p>
					</Link>
					<Link to="/"  className={style.items}>
						<span className="iconfont" style={{fontSize: '0.5rem'}}>&#xe60f;</span>
						<p>购物车</p>
					</Link>
					<Link to="/"  className={style.items}>
						<span className="iconfont" style={{fontSize: '0.5rem'}}>&#xe67d;</span>
						<p>我</p>
					</Link>
				</div>
			</div>
			)
	}

	componentDidMount () {
		this.props.createdScroll(this)
		this.props.getHomeData()
	}

}

const mapDispatch = (dispatch) => ({
	createdScroll (context) {
		context.scroll = new BScroll(context.refs.wrapper)
	},
	getHomeData () {
		dispatch(actionData())
	}
})

export default connect(null, mapDispatch)(View)