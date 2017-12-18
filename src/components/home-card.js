import React, {Component} from "react";
import { Button } from 'antd';
import { Rate } from 'antd';
import ToDetailButton from './to-detail';


require('./css/card.scss')


export default class HomeCards extends Component {
	constructor(options){
		super(options)
	}

	render(){
		return <div className='home-card'>
			<div className='home-card-header'>
				<div className='title'>最具潜力的ICO众筹项目</div>
				<div className='sub-title'>优质币种</div>
			</div>
			<div className='card-list'>
				{this.genCard()}
			</div>

			<div className='more' style={{textAlign: 'center', 'padding': '40px'}}><a href="#">查看更多ico项目...</a></div>
			
		</div>
	}

	genCard(){
		return this.props.cardList.map((card, index) => {
			return <div className='card-container' key={index}> <div className='card'>
				<img src={card.icon} />
				<div className='bi-name'>{card.title}</div>
				<div className='bi-score'>
					<span className='score'>{card.rating}</span>
					<span className='spec'>专家综合评分</span>
					<span className='status'>众筹中</span>
					<br />
					<Rate disabled  allowHalf defaultValue={card.rating/2} />
				</div>
				<div className='bi-info'>{card.info}</div>
				<div className='to-detail'>
					<ToDetailButton uuid={card.uuid} />
				</div>
				
			</div></div>
		})
	}
}