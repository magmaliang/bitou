import React, {Component} from 'react';

export default class Bheader extends Component {
	constructor(options){
		super(options)
	}
	render(){
		<Header>
	      <div className="logo" />
	      <Menu
	        theme="dark"
	        mode="horizontal"
	        defaultSelectedKeys={['home']}
	        style={{ lineHeight: '64px' }}
	        onClick={this.clickNav}
	      >
	        <Menu.Item key="home">首页</Menu.Item>
	        <Menu.Item key="list">ico 众筹</Menu.Item>
	        <Menu.Item key="3">ico 项目分析</Menu.Item>
	        <Menu.Item key="4">资料库</Menu.Item>
	      </Menu>
	    </Header>
	}
}