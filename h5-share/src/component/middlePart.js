import React, {Component} from 'react';
import '../styles/middlePart/index.css';

class MiddlePart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultData: [
				{}
			]
		}
	}

	componentDidMount() {
		console.log('middlePart')
	}

	render() {
		console.log(this);
		console.log(this.props.curData);
		let data=this.state.defaultData;
		data = this.props.curData || this.state.defaultData;
		return (
			<div>
				{
					data.map((item, index) => {
						return (<div className='article-item' key={index}>
							<div className='item-top'>
								{
									item.imgUrl === null ? '' : <div className='item-left'>
										<img src={item.imgUrl} alt='文章图片'/>
									</div>
								}
								{
									item.imgUrl === null ? <div className='item-right '>
										{item.text}
									</div> : <div className='item-right'>
										{item.text}
									</div>
								}
							</div>
							<div className='item-btm'>
								<div>
									<span>[{item.typeName}]</span>
									<span>{item.dateTime}</span>
								</div>
								<div className='icon-area'>
								  <span className='favor-icon'>
									{item.favorNumber}
                 </span>
									<span className='msg-icon'>
										{item.msgNumber}
                 </span>
								</div>
							</div>
						</div>)
					})
				}
			</div>
		);
	}
}

export default MiddlePart;