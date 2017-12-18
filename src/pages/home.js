import React, {Component} from "react";
import { Carousel } from 'antd';
import fetch from '../util/fetch';
import { Input, Button } from 'antd';

import HomeCard from '../components/home-card';
require('./css/home.scss')


// 走马灯
class HomeHeaderCarousel extends Component {
	constructor(){
		super()
		this.state = {
			list: [{
				title: 'BitHunter 火热筹集中'
			}]
		}
	}
	render(){
		var content = this.state.list.map(x=>{
			<div className='carousel-card'>
				<h2>{x.title}</h2>
			</div>
		})
		return <Carousel autoplay>
			{content}
  		</Carousel>
	}
}
// 统计模块
class Statistics extends Component {
	constructor(){
		super()
	}
	render(){
		return <div className='statistic-block'>
			<div className='block-a block'>
				<div className='icoa icon'></div>
				<div className='info'>
					<div className='number'>{this.props.numbera}</div>个
					<span>正在进行的项目</span>
				</div>
			</div>
			<div className='block-b block'>
				<div className='icob icon'></div>
				<div className='info'>
					<div className='number'>{this.props.numberb}</div>个
					<span>已经代投的eth</span>
				</div>
			</div>
			<div className='block-c block'>
				<div className='icoc icon'></div>
				<div className='info'>
					<div className='number'>{this.props.numberc}</div>个
					<span>已投的项目</span>
				</div>
			</div>
		</div>
	}
}

const statistic = {
	numbera: 22,
	numberb: 53,
	numberc: 21
}

export default class Home extends Component {
	constructor(options){
		super(options)
		this.state = {
			cardList: []
		}
	}

	render(){
		return <div className='home-page'>
			<HomeHeaderCarousel />
			<HomeCard cardList={this.state.cardList}/>
			<Statistics {...statistic} />
			<div className='subscriber' style={{padding: "50px"}}>
				<div className='title' style={{fontSize: "24px"}}>订阅BITOU更新提醒</div>
				<div style={{padding: "10px"}}>
					<Input placeholder="输入你的email邮箱地上，以接受订阅信息"/>
					<Button type="primary" onClick={this.handleClick}>+订阅</Button>
				</div>
			</div>
		</div>
	}

	componentDidMount(){
		fetch('api/contents?type=Project').then(data=>{
			let list = data.data;
			if (list.length == 1) {
				let a = list[0];
				list.push(Object.assign({},a));
				list.push(Object.assign({},a));
			}

			this.setState({cardList: list})
		})
	}
}