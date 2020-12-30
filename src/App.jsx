import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
import {WechatOutlined,WeiboOutlined,SearchOutlined, BackwardOutlined} from '@ant-design/icons'

/**
 * 
 * 
 * 
 * 
 * // This is very important!!! this can direct import from 'node_modules'
 * // Until you implement following document:
 * https://3x.ant.design/docs/react/use-with-create-react-app-cn
 * 
 * 
 * Don't know why it doesn't work
 * 
 * 
 */
import 'antd/dist/antd.css'





const { RangePicker } = DatePicker;

export default class App extends Component {
	render() {
		return (
			<div>
				App....
				<button>点我</button>
				<Button type="primary">按钮1</Button>
				<Button >按钮2</Button>
				<Button type="link">按钮3</Button>
				<Button type="primary" icon={<SearchOutlined />}>
					Search
				</Button>
				<WechatOutlined />
				<WeiboOutlined />
				<DatePicker/>
				<RangePicker/>

				<BackwardOutlined />
			</div>
		)
	}
}
