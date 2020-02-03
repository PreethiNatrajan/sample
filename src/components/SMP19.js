import React, { Component } from 'react'
import Workflow_Modules from './config/Workflow_Modules'
import OverlayBuilder from './OverlayBuilder'
import ConfigManager from './ConfigManager'
import Workflow from './Workflow'
import Css from './Css'
import SiteBuilder from './SiteBuilder'

export class SMP19 extends Component {
    render() {
        return (
            <div id="SMP19">
                <h1>SMP</h1>
            <p>Service Management Platform (SMP) is a comprehensive toolset and action engine for customer experience management. With SMP, service providers gain the following:</p>
            <h3>The Content of SMP19 are,</h3>
            <ul>
                <li><a href="#Config_Manager">Configuration Manager</a></li>
                <li><a href="#Workflow">Workflow</a></li>
                <li><a href="#Css">Css</a></li>
                <li><a href="#SiteBuilder">Site Builder</a></li>
            </ul>
            <Workflow_Modules/>
            <OverlayBuilder/>
            <ConfigManager/>
            <Workflow/>
            <Css/>
            <SiteBuilder/> 
            {/* 
            */}
            </div>
        )
    }
}

export default SMP19
