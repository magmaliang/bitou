import React, {Component} from "react";
import { hashHistory} from 'react-router'
import { Button } from 'antd';

export default class ToDetailButton extends Component {
	constructor(options){
		super(options)
	}
	render(){
		return <Button type="primary" onClick={this.handleClick}>查看项目</Button>
	}
	handleClick = ()=>{
		hashHistory.push('/detail?uuid=' + this.props.uuid)
	}
}