import React, {Component} from "react";
import {Host} from '../util/config';

require('./css/card.scss')


export default class TimeLine extends Component {
	constructor(options){
		super(options)
		this.state = {
			timePercentage: '0%',
			msg: ''
		}
		this.id = setInterval(this.getTimelineDate.bind(this), 1000)
	}

	render(){
		const statusMap = {
			presale: '预售',
			underway: '众筹中',
			end: '结束'
		}
		const {
			start,
			end,
			status
		} = this.props;


		return <div className='time-line'>
			<div className='up'>
				<span className='beg'>{start}</span>
				<span className='to-end' style={{textAlign: 'center'}}>{this.state.msg}</span>
				<span className='end' style={{textAlign: 'right'}}>{end}</span>
			</div>
			<div className='line'><div className='percentage' style={{width: this.state.timePercentage}}></div></div>
			<div className='down'>
				<span className='beg' style={{fontSize: '10px', color: '#b0bbc6'}}>ico开始</span>
				<span className='to-end' style={{textAlign: 'center'}}>{statusMap[status]}</span>
				<span className='end' style={{fontSize: '10px', color: '#b0bbc6', textAlign: 'right'}}>ico结束</span>
			</div>
		</div>
	}

	getTimelineDate () {
		let {
			start,end
		} = this.props, msg = '';

		if (!start) {
			return null
		}

		start = start.split(/[\s-]/g);
		end = end.split(/[\s-]/g);

		start = new Date(start[0], parseInt(start[1]) - 1, start[2], 0, 0, 0);
		end = new Date(end[0], parseInt(end[1]) - 1, end[2], 0, 0, 0);

		let cur = Date.now();
		let totalSecond = end - start, secondPassed = cur - start, secondRest = Math.floor((end - cur)/1000);

		let restS = secondRest%60, restM = ((secondRest - restS)/60)%60, restH = (secondRest - restS - restM*60)/3600;
		msg = `距结束还有${restH}时${restM}分${restS}秒`


		this.setState({
			timePercentage: secondPassed/totalSecond*100 + "%",
			msg: msg
		})
	}

	componentWillUnmount(){
		clearInterval(this.id)
	}

}