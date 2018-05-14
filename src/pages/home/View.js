import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionData, actionLoadMoreData } from './actionCreator'
import Header from './components/header'
import Banner from './components/banner'
import Icons from './components/icons'
import Content from './components/content'
import BScroll from 'better-scroll'
import style from './style/view.mcss'
import { Link } from 'react-router-dom'

class View extends Component {
	render () {
		const { username } = localStorage
		const mineUrl = username === undefined ? "login" : "mine"

		return (
			<div className={style.root}>
				<Header></Header>
				<div className={style.wrapper} ref="wrapper">
					<div className={style.content}>
						<Banner></Banner>
						<Icons></Icons>
						<Content></Content>
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
					<Link to={`/${mineUrl}`}  className={style.items}>
						<span className="iconfont" style={{fontSize: '0.5rem'}}>&#xe67d;</span>
						<p>我</p>
					</Link>
				</div>
			</div>
			)
	}

	componentDidMount () {
		this.props.createdScroll(this)
		this.props.getHomeData(this)

		const { pSize } = this.props

		this.scroll.on('pullingUp', () => {
    		this.props.getHomeLoadMore(pSize, this)
  	})
	}

}

const mapState = (state) => {
	const { pNum, pSize } = state.Home
	return {
		pNum,
		pSize
	}
}

const mapDispatch = (dispatch) => ({
	createdScroll (context) {
		context.scroll = new BScroll(context.refs.wrapper, {
			pullUpLoad: {
			  threshold: -20
			},
			click: true
		})
	},
	getHomeData (context) {
		dispatch(actionData(context))
	},
	getHomeLoadMore( pSize, context) {
		const { pNum } = context.props || {}

		dispatch(actionLoadMoreData({
			pNum,
			pSize,
			context
		}))
	}
})

export default connect(mapState, mapDispatch)(View)