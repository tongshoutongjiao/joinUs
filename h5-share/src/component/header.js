import React, {Component} from 'react';
import '../styles/header/index.css';

class HeaderPart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultData: {}
		};
		this.navigatorToArticle.bind(this);
	}

	componentDidMount() {
		console.log('header')
	}

	navigatorToArticle(e) {
		console.log('点击跳转到文章详情页面');
		e.preventDefault();
		console.log(this);
		console.log(e);
		// window.location.href = 'http://www.baidu.com';
	}

	render() {
		console.log('listData');
		let data = this.state.defaultData;
		data = this.props.curData || this.state.defaultData;
		return (<header className="top" name="top" onClick={this.navigatorToArticle.bind(this)}>
				<div className='image-wrapper'>
					<img src={data.imgUrl} alt="文章图片"/>
					<div className='news-title'>
						<div className='news-name'>云校刊</div>
						<span>第1期·生活环境</span>
					</div>
				</div>
				<div className='bottom-text '>
					<div className='text-title'>#{data.text}#</div>
					<div className='item-btm'>
						<div>
							<span>[{data.typeName}]</span>
							<span>{data.date}</span>
						</div>
						<div className='icon-area'>
								<span className='favor-icon'>
									{data.favorNumber}
            </span>
							<span className='msg-icon'>
								{data.msgNumber}
            </span>

						</div>

					</div>


				</div>
			</header>
		);

	}
}

export default HeaderPart;