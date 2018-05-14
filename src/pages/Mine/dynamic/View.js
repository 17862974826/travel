import React, { Component } from 'react'

import style from './style/view.mcss'

class View extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {},
			textareaValue: '',
			imgs: [],
			publishFlag: false
		}
		this.reader = new FileReader()
	}

	render() {
		const { data: { strategy } = {}, textareaValue, imgs } = this.state || {}
		let renderStrategy = ""
		if (!Array.isArray(strategy) || !strategy.length) {
			renderStrategy = (<div className={style.nothing}>还没有攻略哦</div>)
		} else {
			renderStrategy = strategy.map((item, index) => (
				<div key={item.id} className={style.itemCon}>
					<div className={style.authorInfo}>
						<div className={style.picCon}>
							<img src={item.picUrl} alt="" />
						</div>
						<div className={style.author}>
							<p>{item.author}</p>
							<p>{item.date}</p>
						</div>
					</div>
					<div className={style.itemContent}>
						<div className={style.itemDesc}>{item.desc}</div>
						<div className={style.imgsCon}>
							{
								item.imgUrl.map((imgItem, index) => (
									<p key={index} className={style.imgItem}>
										<img src={imgItem} alt="" />
									</p>
								))
							}
						</div>
					</div>
				</div>
			))
		}

		return (
			<div className={style.wrapper}>
				<div className={style.header}>
					<p className={style.find}>找攻略</p>
					<p className={style.publish} onClick={this.handleShowPublish}>发布</p>
				</div>
				<div className={style.publishCon} ref={publish => this.publish = publish}>
					<textarea value={textareaValue} onChange={this.handleTextareaChange} className={style.textarea} />
					<div className={style.previewOuter}>
						<div className={style.previewWrapper}>
							<div className={style.previewCon}>
								{
									imgs.map((item, index) => (
										<div key={index} className={style.preview}>
											<img src={item} alt="" />
										</div>
									))
								}
							</div>
							<div className={style.picMaskCon}>
								<p className={style.picMask}>+</p>
								<form 
									encType="multipart/form-data" 
									ref={upload => {
										this.formdata = new FormData(upload)
									}}
									className={style.formFile}
								>
									<input 
										multiple 
										type="file" 
										name="photo" 
										id="photo" 
										ref={uploadFile => {
											this.uploadFile = uploadFile
											
										}}
										onChange={this.getImgBase}
									/>
									</form>
							</div>
						</div>
					</div>
					<div className={style.publishBtnCon}>
						<button onClick={this.handlePublish} className={style.publishBtn}>发布</button>
					</div>
				</div>
				<div>
					{ renderStrategy }		
				</div>	
			</div>
		)
	}

	componentDidMount() {
		this.getData()
	}

	getData = () => {
		fetch('/api/share')
			.then(res => res && res.json())
			.then(res => {
				const { data = {}} = res
				this.setState({
					data
				})
			})
	}

	handleShowPublish = () => {
		const { publishFlag } = this.state || {}
		if (!publishFlag) {
			this.publish.style.height = '2.8rem'
			this.publish.style.padding = '10px 0'
			setTimeout(() => {
				this.publish.style.opacity = 1
			}, 400)
		} else {
			this.publish.style.height = '0'
			this.publish.style.opacity = 0
			this.publish.style.padding = '0'
		}

		this.setState({
			publishFlag: !publishFlag
		})
	}

	handleTextareaChange = (e) => {
		const { textareaValue } = this.state || {}
		this.setState({
			textareaValue: e.target.value
		})
	}

	handlePublish = () => {
		this.publish.style.height = '0'
		this.publish.style.opacity = 0
		this.publish.style.padding = '0'

		// const _formdata = this.formdata.append('file', this.uploadFile.files[0]);

		const { textareaValue } = this.state || {}

		if (!textareaValue || !textareaValue.length) return
		// fetch('/api/upload.json', {
		// 	body: {
		// 		textareaValue,
		// 		formdata: _formdata
		// 	},
		// 	contentType: false,
		// 	processData: false,
	 //    cache: 'no-cache',
	 //    method: 'POST',
	 //    mode: 'cors', 
	 //    referrer: 'no-referrer'
		// }).then(res => res.json())
		// 	.then(res => {
		// 		// 上传成功，重新请求数据
		// 	})
	}
	
	getImgBase = () => {
		const { imgs } = this.state || {}
		const files = this.uploadFile.files[0]
		if (files) {
			this.reader.onload = (e) => {
				this.setState({
					imgs: [...imgs, e.target.result]
				})
			}
		}

		this.reader.readAsDataURL(files)
	}
}
export default View