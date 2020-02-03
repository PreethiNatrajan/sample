import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import '../App.css';

import SMP7 from './SMP7';
import SMP18 from './SMP18';
import SMP19 from './SMP19';


class Home extends Component {
    
  render() {
    
    return (
     
      <Router>
      <div className="home">
      <h2>SMP</h2>
          <p>Service Management Platform (SMP) is a comprehensive toolset and action engine for customer experience management. With SMP, service providers gain the following:</p>
          <ul>
          <li>A unified platform including a flexible integration framework, test and diagnostic capabilities, a scalable workflow solution for interaction with customers, and completion of business processes involving multiple parties.</li>
          <li>Omni-channel platform delivering integrated customer experiences across multiple support channels, such as assisted service, self service, interactive voice response (IVR), and field technician channels.</li>
          <li>The opportunity to extend and control the service delivery ecosystem as a part of leveraging existing investment in device management; operations support systems (OSS) and business support systems (BSS); network management systems (NMS) and element management systems (EMS); and customer consoles.</li>
          <li>Integrated tools in which IT developers and business analysts author, publish, and execute service troubleshooting and management logic.</li>
          </ul>
          <div>
          <p>The versions of SMP are,</p>
          
          <ul>
          <li><Link to={'/SMP7'}>SMP7</Link></li>
          <li><Link to={'/SMP18'}>SMP 18</Link></li>
          <li><Link to={'/SMP19'}>SMP 19</Link></li>
          </ul>
          </div>
          <Switch>
          <Route   path='/SMP7' component={SMP7} />
          <Route path='/SMP18' component={SMP18}/>
          <Route path='/SMP19' component={SMP19}/>
          </Switch>
  </div>
  </Router>
         
    );
  }
}

export default Home;