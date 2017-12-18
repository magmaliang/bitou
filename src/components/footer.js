import React, {Component} from 'react';

require('./css/footer.scss')

export default class PFooter extends Component {
	constructor(options){
		super(options)
	}
	render(){
		return <div className='footer'>
			<div className='carda'>
				<div>联络我们</div>
				<div className='email'>email: xxxx</div>
				<div className='tel-repo'>@HYICOchina</div>
				<img className='weixin-ico' src=''/>
				<div>微信联系我们</div>
			</div>
			<div className='cardb'>
				<div>联络我们</div>
				<div className='email'>email: xxxx</div>
				<div className='tel-repo'>@HYICOchina</div>
				<img className='weixin-ico' src=''/>
				<div>微信联系我们</div>
			</div>
			<div className='cardc'>
				<div>联络我们</div>
				<div className='email'>email: xxxx</div>
				<div className='tel-repo'>@HYICOchina</div>
				<img className='weixin-ico' src=''/>
				<div>微信联系我们</div>
			</div>
		</div>
	}
}