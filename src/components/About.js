import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div id="About">
          <h2>SMP</h2>
          <p>Service Management Platform (SMP) is a comprehensive toolset and action engine for customer experience management. With SMP, service providers gain the following:</p>
          <ul>
          <li>A unified platform including a flexible integration framework, test and diagnostic capabilities, a scalable workflow solution for interaction with customers, and completion of business processes involving multiple parties.</li>
          <li>Omni-channel platform delivering integrated customer experiences across multiple support channels, such as assisted service, self service, interactive voice response (IVR), and field technician channels.</li>
          <li>The opportunity to extend and control the service delivery ecosystem as a part of leveraging existing investment in device management; operations support systems (OSS) and business support systems (BSS); network management systems (NMS) and element management systems (EMS); and customer consoles.</li>
          <li>Integrated tools in which IT developers and business analysts author, publish, and execute service troubleshooting and management logic.</li>
          </ul>
        </div>
    );
  }
}

export default About;