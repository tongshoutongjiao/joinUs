import React, {Component} from 'react';
import mobileUtil from '../util/mobileUtil';
import HeaderPart from './header';
import MiddlePart from './middlePart';
import FootPart from './footPart';

import '../styles/sharePage/index.css';

class SharePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			title: 'test'
		};
		// this.handleMockData = this.handleMockData.bind(this);
	}

	componentDidMount() {
		console.log('sharePage');
		console.log(mobileUtil);

		this.getListData();
		this.fetchList();
	}

	// 获取数据
	async getListData() {
		let data = await this.handleMockData();
		this.setState({
			data
		});

	}

	// mockData
	// 假数据
	handleMockData() {
		// titleData
		let targetObj = {};
		targetObj.titleData = {
			text: '青出于蓝而胜于蓝',
			imgUrl: 'https://goss.veer.com/creative/vcg/veer/612/veer-140173293.jpg',
			typeName: '青于蓝刊',
			date: '2018/04/09',
			favorNumber: '10000',
			msgNumber: '1222'
		};

		// listData
		targetObj.listData = [
			{
				text: '这个夏天来啦微信小程序开发时，上拉加载和下拉刷新效果让人眼前一亮实现了，忒方便。在微信开发或者手机端网页开发呢',
				typeName: '白夜行',
				dateTime: '17:18',
				imgUrl: '',
				favorNumber: '10000',
				msgNumber: '1222'
			},
			{
				text: '测试测试 程序开发时，上拉加载和下拉刷新效果让人眼前一亮，挺棒',
				typeName: '白夜行',
				dateTime: '17:18',
				imgUrl: 'https://goss.veer.com/creative/vcg/veer/612/veer-140173293.jpg',
				favorNumber: '10000',
				msgNumber: '1222'
			},
			{
				text: '测试测试...',
				typeName: '白夜行',
				dateTime: '17:18',
				imgUrl: null,
				favorNumber: '10000',
				msgNumber: '1222'
			},
			{
				text: 'djldkjalsdffjkal...',
				typeName: '白夜行',
				dateTime: '17:18',
				imgUrl: null,
				favorNumber: '10000',
				msgNumber: '1222'
			},
			{
				text: 'this is a test for react...',
				typeName: '白夜行',
				dateTime: '17:18',
				imgUrl: 'https://goss.veer.com/creative/vcg/veer/612/veer-150534594.jpg',
				favorNumber: '10000',
				msgNumber: '1222'
			},
			{
				text: 'this is a test for react...',
				typeName: '嫌疑人x的献身',
				dateTime: '17:18',
				imgUrl: 'https://goss.veer.com/creative/vcg/veer/612/veer-150534594.jpg',
				favorNumber: '10000',
				msgNumber: '1222'
			}


		];

		return targetObj;
	}

	// fetch list
	fetchList() {
		// 通过fetch获取百度的错误提示页面
		let url='https://www.baidu.com/search/error.html';
		let obj={
			a:'1',
			b:'2'
		};
		mobileUtil.fetchGet(url,obj);

	}


	render() {
		let data = this.state.data;
		console.log(data);
		return (
			<div className="container">
				<HeaderPart curData={data.titleData}/>
				<MiddlePart curData={data.listData}/>
				<FootPart/>
			</div>
		);
	}
}

export default SharePage;