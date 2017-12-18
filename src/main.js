import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router';
import Home from './pages/home'
import List from './pages/list'
import Detail from './pages/detail'

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

import PFooter from './components/footer';

require('antd/dist/antd.css')
require('./main.scss')

class ABC extends Component {
	constructor(){super()}
	render(){return <div>this is abc </div>}
}

class App extends Component {
	constructor(options){
		super(options)
	}
	render(){
		return <Layout className="layout">
			    <Header>
			      <div className="logo" />
			      <Menu style={{float: 'right'}}
			        theme="dark"
			        mode="horizontal"
			        defaultSelectedKeys={['home']}
			        style={{ lineHeight: '64px' }}
			        onClick={this.clickNav}
			      >
			        <Menu.Item key="home">首页</Menu.Item>
			        <Menu.Item key="list">ico 众筹</Menu.Item>
			      </Menu>
			    </Header>
			    <Content>
			      	<Router history={hashHistory}>
						<Route path="/home" component={Home}/>
						<Route path="/list" component={List}/>
						<Route path="/detail" component={Detail}/>
					</Router>
			    </Content>
			    <PFooter />
		  </Layout>
	}
	clickNav = (item) => {
		hashHistory.push('/'+item.key)
	}

}

render(<App />
, document.getElementById('container'))
