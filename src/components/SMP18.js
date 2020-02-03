import React, { Component } from 'react'
import ModelBuilder from './ModelBuilder'
import OverlayBuilder from './OverlayBuilder'
import ConfigManager from './ConfigManager'
import Workflow from './Workflow'
import Css from './Css'
import BotBuilder from './BotBuilder'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


export class SMP18 extends Component {
    render() {
        return (
            <Router>
            <div id="SMP18">
            <h1>SMP</h1>
            <p>Service Management Platform (SMP) is a comprehensive toolset and action engine for customer experience management. With SMP, service providers gain the following:</p>
            <h3>The Content of SMP7 are,</h3>
            <ul>
               { /*<li><a href="#Config_Manager">Configuration Manager</a></li>
                <li><a href="#Workflow">Workflow</a></li>
                <li><a href="#Css">Css</a></li>
                <li><a href="#BotBuilder">BOT Builder</a></li>
            </ul>
            <ConfigManager/>
            <Workflow/>
            <Css/>
        <BotBuilder/>*/}
            
                <li><Link to='/Config_Manager'>Configuration Manager</Link></li>
                <li><Link to='/Workflow'>Workflow</Link></li>
                <li><Link to='/CSS'>Css</Link></li>
                <li><Link to='/BotBuilder'>BOT Builder</Link></li>
            </ul>
            <Switch>
            <Route path='/Config_Manager' component={ConfigManager}/>
            <Route path='/Workflow' component={Workflow}/>
            <Route path='/CSS' component={Css}/>
            <Route path='/BotBuilder' component={BotBuilder}/>
            </Switch>
            </div>
            </Router>
        )
    }
}

export default SMP18
