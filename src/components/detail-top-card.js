import React, {Component} from "react";
import { Button } from 'antd';
import { Rate } from 'antd';
import {Host} from '../util/config';
import TimeLine from './time-line';

require('./css/card.scss')


export default class ListCards extends Component {
	constructor(options){
		super(options)
	}

	render(){
		const toEnd = "距结束还有xx时xx分xx秒";
		const status = {
			presale: '预售',
			underway: '众筹中',
			end: '结束'

		}
		let card = this.props.card;

		return <div className='detail-card'>
			<img src={Host + card.cover}  className='cover'/>
			<div className='info'>

				<div className='title'>
					<img className='icon' />
					<span className='name'>{card.title}</span>
				</div>

				<div className='card-middle'>
					<Rate disabled allowHalf defaultValue={card.rating/2} />
					<span className='score' style={{fontSize: '14px'}}>{card.rating}</span>
					<span style={{fontSize: '14px'}}>专家综合评分</span>
					<Button type="primary" onClick={this.handleClick}>参与众筹</Button>
				</div>
				

				<TimeLine {...card} />
			</div>
		</div>
	}

	handleClick = () => {
		this.props.handleClick()
	}
}