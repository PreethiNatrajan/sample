import React, { Component } from 'react'
import Upload_New_Configuration from './Upload_New_Configuration'
import Application_Properties from './Application_Properties'
import Role_Based_Properties from './Role_Based_Properties'
import User_Input from './User_Input'
import Result_Analyses from './Result_Analyses'
import Test_Module from './Test_Module'
import Endpoint_Operations from './Endpoint_Operations'
import Workflow_Modules from './Workflow_Modules'
import Test_Group from './Test_Group'
import Startup_Test_Group from './Startup_Test_Group'
import Service_Policies from './Service_Policies'
import Resource_Files from './Resource_Files'
import DSAs from './DSAs'
import './Config.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



export class Application_Config extends Component {
    render() {
        return (
            <Router>
            <div id="Application_Config">
            <div className="App_Config">
                <h2>Application Configuration</h2>
                <p>On the Application tab, you can edit settings in the loaded config version. At login, the settings for the active config are loaded. The values in the active config are applied across servers as a part of the overall application configuration.</p>
                <p>In an SMP installation, the application configuration is comprised of two major parts:</p>
                <ul>
                
                <li>Active config. Collection of settings and content instructions the server is to apply in the runtime environment (for example, test modules and workflow modules).</li>
                <li>Config items are items your team can create from the Application tab of Configuration Manager. Upon saving and publishing from there, a new version of the config is created and made active.</li>
                <li>Content. Individual items on which settings in the active config depend for execution (for example, models, overlays, and workflows) and other resources on which the content itself depends</li>
                </ul>
                <p>In general, content items are items that your team authors from applicable SMP tools, such as Model Builder, Overlay Builder, and Workflow Builder.</p>
                <p>The application configuration categories are:</p>
                <ul>
                
                <li><Link to='/Upload_New_Configuration'>Upload New Configuration</Link></li>
                <li><link to='/Application_Properties'></link></li>
                <li><link to='/Role_Based_Properties'></link></li>
                <li><link to='/User_Input'>User_Input</link></li>
                <li><link to='/Result_Analyses'>Result_Analyses</link></li>
                <li><link to='/Test_Module'>Test_Module</link></li>
                <li><link to='/Endpoint_Operations'>Endpoint_Operations</link></li>
                <li><link to='/Workflow_Modules'>Workflow_Modules</link></li>
                <li><link to='/Test_Group'>Test_Group</link></li>
                <li><link to='/Startup_Test_Group'>Startup_Test_Group</link></li>
                <li><link to='/Service_Policies'>Service_Policies</link></li>
                <li><link to='/Resource_Files'>Resource_Files</link></li>
                <li><Link to='/DSAs'>Extensions / DSAs</Link></li>
                </ul>
                <Switch>
              <Route path='/Upload_New_Configuration' component={Upload_New_Configuration}/>
              <Route path='/Application_Properties' component={Application_Properties}/>
              <Route path='/Role_Based_Properties' component={Role_Based_Properties}/>
              <Route path='/User_Input' component={User_Input}/>
              <Route path='/Result_Analyses' component={Result_Analyses}/>
              <Route path='/Test_Module' component={Test_Module}/>
              <Route path='/Endpoint_Operations' component={Endpoint_Operations}/>
              <Route path='/Workflow_Modules' component={Workflow_Modules}/>
              <Route path='/Test_Group' component={Test_Group}/>
              <Route path='/Startup_Test_Group' component={Startup_Test_Group}/>
              <Route path='/Service_Policies' component={Service_Policies}/>
              <Route path='/Resource_Files' component={Resource_Files}/>
              <Route path='/DSAs' component={DSAs}/>
              </Switch>
                </div>
            </div>
            </Router>
            
        )
    }
}

export default Application_Config
