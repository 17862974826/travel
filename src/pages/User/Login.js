import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './style/login.mcss'

class Login extends Component {
	constructor () {
		super(...arguments)
		this.state = {
			username: '',
			password: '',
			isReigster: false,
			activeFlag: true
		}
	}
	handleActiveChange = () => {
		const { activeFlag, isReigster } = this.state || {}
		this.setState({
			username: '',
			password: '',
			activeFlag: !activeFlag,
			isReigster: !isReigster
		})
	}

	handleUserChange = (e) => {
		const username = e.target.value
		this.setState({
			username
		})
	}

	handlePassChange = (e) => {
		const password = e.target.value
		this.setState({
			password
		})
	}

	handleRegisterClick = (e) => {
		const { username, password } = this.state
		if (!username || !password) return 
		fetch(`/api/isRegister?username=${username}`)
			.then((res) => (res.json())).then((res) => {
				const { message } = res || {}

				if (message !== '用户名重复') {
					fetch(`/api/register?username=${username}&password=${password}`)
						.then((res) => (res.json()))
						.then((res) => {
							alert('注册成功')
					})
				} else {
					alert(message)
				}
		})
	}

	handleLoginClick = (e) => {
		const { username, password } = this.state
		if (!username || !password) return 
		fetch(`/api/login?username=${username}&password=${password}`).then((res) => (res.json())).then((res) => {
			const { message } = res || {}
			if (message === '登录成功') {
				localStorage.username = username 
				this.props.history.push('/')
			} else {
				alert(message)
			}
		})
	}

	render () {
		const { isReigster, activeFlag, username, password } = this.state || {}
		return (
			<div className={style.wrapper}>
				<Link to="/">
					<p className={style.title}>官网首页</p>
				</Link>
				<div className={style.tab}>
					<div onClick={this.handleActiveChange} className={!activeFlag ? style.login : style.activeLogin}>登录</div>
					<div onClick={this.handleActiveChange}  className={activeFlag ? style.register : style.activeLogin }>注册</div>
				</div>
				{
					!isReigster ? (
					<div>
						<div className={style.container}>
							<input value={username} onChange={this.handleUserChange} placeholder="您的手机号" className={style.username}/>
							<input value={password} onChange={this.handlePassChange} type="password" placeholder="您的密码" className={style.password}/>
						</div>
						<div className={style.loginButton} onClick={this.handleLoginClick}>登录</div>
					</div>
					) : (
					<div>
						<div className={style.container}>
							<input value={username} onChange={this.handleUserChange} placeholder="您的手机号" className={style.username}/>
							<input value={password} onChange={this.handlePassChange} type="password" placeholder="您的密码" className={style.password}/>
						</div>
						<div className={style.loginButton} onClick={this.handleRegisterClick}>注册</div>
					</div>
					)
				}
			</div>
			)
	}
}
export default Login