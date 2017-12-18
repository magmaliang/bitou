import React, {Component} from "react";
import { Button } from 'antd';
import { Rate } from 'antd';
import {Host} from '../util/config';
import ToDetailButton from './to-detail';

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
						<div className='time-line'>
							<div className='up'>
								<span className='beg'>{card.start}</span>
								<span className='to-end'>{toEnd}</span>
								<span className='end'>{card.end}</span>
							</div>
							<div className='down'>
								<span className='beg'>ico开始</span>
								<span className='to-end'>{status[card.status]}</span>
								<span className='end'>ico结束</span>
							</div>
						</div>
					</div>
					<div className='right-part'>
						<span>{card.rating}</span>
						<span>专家综合评分</span>
						<Rate disabled defaultValue={card.rating/2.0} />
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