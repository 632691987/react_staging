import React, {Component} from 'react'
import welcomecss from './Welcome.module.css';

export default class Welcome extends Component {
    render() {
        return <h2 className={welcomecss.back2}>Welcome component</h2>
    }
}