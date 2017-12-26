import React, {Component} from "react";
import { Button } from 'antd';
import { Rate } from 'antd';
import {Host} from '../util/config';
import ToDetailButton from './to-detail';
import TimeLine from './time-line';

require('./css/card.scss')


export default class ListCards extends Component {
	constructor(options){
		super(options)
	}

	render(){
		return <div className='list-card'>
			{this.genCard()}
		</div>
	}

	genCard(){
		return this.props.cardList.map((card, index) => {
			const toEnd = "距结束还有xx时xx分xx秒";
			const status = {
				presale: '预售',
				underway: '众筹中',
				end: '结束'

			}
			const timeLineData = {
				start: card.start,
				end: card.end,
				status: card.status
			}

			return <div className='card' key={index}>
				<img src={Host + card.cover}  className='cover'/>
				<div className='info'>
					<div className='left-part'>
						<div className='title'>
							<img className='icon' />
							<span className='name'>{card.title}</span>
						</div>
						<div className='summary' dangerouslySetInnerHTML= {this.createMarkup(card.overview)}>
						</div>
						<span className='status'>{status[card.status]}</span>
						<TimeLine {...timeLineData} />
					</div>
					<div className='right-part'>
						<span className='rate'>{card.rating}</span>
						<span>专家综合评分</span>
						<Rate disabled allowHalf defaultValue={card.rating/2} />
						<ToDetailButton uuid={card.uuid}/>
					</div>
				</div>
			</div>
		})
	}
	createMarkup(src) { 
		return {__html: src}
	}
}