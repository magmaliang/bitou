import React, {Component} from "react";
import ListCard from '../components/list-card';
import fetch from '../util/fetch';

require('./css/detail-page.scss');

export default class Detail extends Component {
	constructor(options){
		super(options)
		let uuid = window.location.hash.split("uuid=")[1];
		this.state = {
			uuid: uuid,
			cards: []
		}
	}

	render(){
		return <div className="detail-page">
			<div className='left-part'>
				<ListCard cardList={this.state.cards}/>
				<div className='detail' style={{padding: "20px", borderRadius: "12px"}} dangerouslySetInnerHTML= {this.createMarkup(this.state.cards[0])}></div>
			</div>
			<div className='right-part'></div>
		</div>
	}

	componentDidMount(){
		fetch('api/contents?type=Project').then(data=>{
			this.setState({cards: data.data.filter(x=>x.uuid===this.state.uuid)})
		})
	}

	createMarkup(src) {
		if (src) {
			return {__html: src.details}
		}
		return null;
	}
}