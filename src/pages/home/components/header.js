import React, { Component } from 'react'
import style from'../../../assert/style/header.mcss'
import { Link } from 'react-router-dom'
export default class Header extends Component {
	render () {
		return (
			<div className={style.wrapper}>
				<div className={style.logo}>
					<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2428856136,3987620462&fm=27&gp=0.jpg" alt="" />
				</div>
				<div className={style.search}>
					<input type="text"  className={style.txt} placeholder="搜索目的地/攻略/游记" />
					<span className={style.search_icon}>
						<i className="iconfont">&#xe600;</i>
					</span>
				</div>
				<Link to="/login" className={style.login}>登录</Link>
			</div>
			)
	}
} 