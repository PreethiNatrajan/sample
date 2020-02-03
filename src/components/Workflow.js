import React, { Component } from 'react'
import Image from './images/Workflow_Builder.jpg'
import Business_Process from './workflow/Business_Process'
import Interactive_Procerss from './workflow/Interactive_Procerss'

export class Workflow extends Component {
    render() {
        return (
            <div id="Workflow">
                <h1>Workflow Builder</h1>
                <p>Browser-based tool for authoring, updating, and publishing interactive workflows and business process workflows.</p>
                <img src={Image}/>
                <p>The Workflow builder will integrate the details of Overlay and Model builder.</p>
                <p>The types of workflow are given below,</p>
                <ul>
        <li><a href="#Business_Process">Business Process Workflow</a></li>
        <li><a href="#Interactive_Procerss">Interactive Workflow</a></li>
        </ul>
        <Business_Process/>
        <Interactive_Procerss/>
            </div>
        )
    }
}

export default Workflow
