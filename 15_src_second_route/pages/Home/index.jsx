import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import {Route,Switch,Redirect} from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
	render() {
		return (
				<div>
					<h3>我是Home的内容</h3>
					<div>
						<ul className="nav nav-tabs">
							<li>
								<MyNavLink to="/home/news">News</MyNavLink>
							</li>
							<li>
								<MyNavLink to="/home/message">Message</MyNavLink>
							</li>
						</ul>
						{/* 注册路由, 要使用一级组件以后的，例如，这里是 /home 之下的二级组建，那么 url link就要是 /home/xxx */}
						<Switch>
							<Route path="/home/news" component={News}/>
							<Route path="/home/message" component={Message}/>
							<Redirect to="/home/news"/>
						</Switch>
					</div>
				</div>
			)
	}
}
