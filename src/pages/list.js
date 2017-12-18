// 列表页面分多种筛选
import React, {Component} from "react";
import { Menu, Icon } from 'antd';
import ListCard from '../components/list-card';
import fetch from '../util/fetch';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Detail extends Component {
	constructor(options){
		super(options)
		this.state = {
			current: "all",
			allCard: [],
			filteredList: []
		}
	}

	render(){
		return <div className='list-page'>
			<Menu
				onClick={this.handleClick}
				selectedKeys={[this.state.current]}
				mode="horizontal">
				<Menu.Item key="all">所有项目</Menu.Item>
				<Menu.Item key="underway">众筹中</Menu.Item>
				<Menu.Item key="ready">即将开始</Menu.Item>
				<Menu.Item key="end">已完成</Menu.Item>
			</Menu>
			<ListCard cardList={this.state.filteredList} />
		</div>
			
	}

	handleClick = (e) => {
		this.setState({current: e.key})
		setTimeout(()=>{this.syncFilter()}, 0)
	}

	componentDidMount(){
		fetch('api/contents?type=Project').then(data=>{
			this.setState({allCard: data.data})
			this.syncFilter()
		})
	}

	syncFilter(){
		let list = this.state.allCard.filter(card => {
			switch(this.state.current){
				case 'all':
					return true;
				case 'underway':
					return card.status == 'underway';
				case 'ready':
					return card.status == 'ready';
				case 'end':
					return card.status == 'end';
				default: 
					return true;
			}
		})

		this.setState({filteredList: list})
	}

}