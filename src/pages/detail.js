import React, {Component} from "react";
import fetch from '../util/fetch';
import DetailCard from '../components/detail-top-card';

import { Modal, Button } from 'antd';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete } from 'antd';
const FormItem = Form.Item;

require('./css/detail-page.scss');

class FormDefine extends Component {
	constructor(){
		super()
	}
	render(){
		const formItemLayout = {
	      labelCol: {
	        xs: { span: 10 },
	        sm: { span: 4 },
	      },
	      wrapperCol: {
	        xs: { span: 10 },
	        sm: { span: 8 },
	      },
	    };

	    const { getFieldDecorator } = this.props.form;
		return <Form onSubmit={this.handleSubmit}>
	        <FormItem
	          {...formItemLayout}
	          label="姓名"
	        >
	          {getFieldDecorator('name', {
	            rules: [{
	              required: true, message: '请输入您的姓名!',
	            }],
	          })(
	            <Input />
	          )}
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="微信"
	        >
	          {getFieldDecorator('webchat', {
	            rules: [],
	          })(
	            <Input />
	          )}
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="您需要购买的eth额度"
	        >
	          {getFieldDecorator('amount', {
	            rules: [{
	              required: true, message: '请输入额度',
	            }],
	          })(
	            <Input />
	          )}
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="您的eth地址"
	        >
	          {getFieldDecorator('address', {
	            rules: [{
	              required: true, message: '请输入地址',
	            }],
	          })(
	            <Input />
	          )}
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="email"
	        >
	          {getFieldDecorator('email', {
	            rules: [{
	              type: 'email', message: '请输入正确的邮箱地址',
	            }],
	          })(
	            <Input />
	          )}
	        </FormItem>
	        <Button type="primary" htmlType="submit">参与</Button>
	    </Form>
	}

	handleSubmit = () => {
		const data = this.props.form.getFieldsValue();
		console.log(data)
		fetch('http://45.33.43.38:8080/order',{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			mode: 'cors',
			body: JSON.stringify(data)
		}).then(res => {
			this.props.closePop()
		}).catch(e => {
		})
	}
}

const Myform = Form.create()(FormDefine);


class PopForm extends Component {
	constructor(options){
		super(options)
	}

	render(){
		return <div className='detail-form'>
			<div className='form-header'>
				<div>请在下方留下您的联络方式，您的钱包地址以及欲投资之金额。本平台会协助投资。</div>
			</div>
			<div className='form-content'>
				<div className='left-part'>
					<Myform closePop={this.props.closePop}/>
				</div>
				<div className='right-part'></div>
			</div>
			<div className='form-footer'></div>
		</div>
		
	}
}

export default class Detail extends Component {
	constructor(options){
		super(options)
		let uuid = window.location.hash.split("uuid=")[1];
		this.state = {
			uuid: uuid,
			card: {},
			visible: false
		}
	}

	render(){
		return <div className="detail-page">
			<div className='left-part'>
				<DetailCard card = {this.state.card} handleClick={this.handleClick}/>
				<div className='detail' style={{borderRadius: "12px", width: "804px"}} dangerouslySetInnerHTML= {this.createMarkup(this.state.card)}></div>
			</div>
			<div className='right-part'></div>
			<Modal
	          title="我要参与该ICO项目"
	          visible={this.state.visible}
	          onOk={this.handleOk}
	          onCancel={this.handleCancel}
	        >
	          <PopForm closePop={this.handleCancel}/>
	        </Modal>
		</div>
	}

	componentDidMount(){
		fetch('api/contents?type=Project').then(data=>{
			this.setState({card: data.data.find(x=>x.uuid===this.state.uuid)})
		})
	}

	createMarkup(src) {
		if (src) {
			return {__html: src.details}
		}
		return null;
	}

	handleClick = () => {
		this.setState({visible: true})
	}
	handleCancel = ()=>{
		this.setState({visible: false})
	}
	handleOk = () => {

	}
}