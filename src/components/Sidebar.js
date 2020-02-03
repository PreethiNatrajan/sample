import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import SMP7 from './SMP7';
import ModelBuilder from './ModelBuilder';
import OverlayBuilder from './OverlayBuilder';
import ConfigManager from './ConfigManager';
import Workflow from './Workflow';
import Css from './Css';


export class Sidebar extends Component {
    constructor(props)
    {
        super();
        this.state={
            smp7: true,
            smp18: true,
            smp19: true,
            name1: 'SMP7',
            name2: 'SMP18',
            name3: 'SMP19',
            open: true
    }
    
    }
    handleClick1=()=>{
        this.setState({smp7: !this.state.smp7})
    }
    handleClick2=()=>{
        this.setState({smp18: !this.state.smp18})  
    }
    handleClick3=()=>{  
        this.setState({smp19: !this.state.smp19}) 
    }

    render() {
        
        return (
            <Router>
            <div className="SideBar">
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className="root"
          >
          
            <ListItem  onClick={this.handleClick1}>
            <Link to='/SMP7'/>
              <ListItemText primary="SMP 7" />
              {this.state.smp7 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.smp7} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className="nested">
                <ul>
                <li><Link to='/ModelBuilder'>ModelBuilder</Link></li>
                <li><Link to='/OverlayBuilder'>Overlay Builder</Link></li>
                <li><Link to='/ConfigManager'>Configurartion Manager</Link></li>
                <li><Link to='/Workflow'>Workflow Builder</Link></li>
                <li><Link to='/CSS'>CSS</Link></li>
                </ul>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.handleClick2}>
              <ListItemText primary="SMP 18" />
              {this.state.smp18 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.smp18} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className="nested">
                  <ListItemText primary="Model Builder" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className="nested">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Switch>
          <Route path='/ModelBuilder' component={ModelBuilder}/>
          <Route path='/OverlayBuilder' component={OverlayBuilder}/>
          <Route path='/ConfigManager' component={ConfigManager}/>
          <Route path='/Workflow' component={Workflow}/>
          <Route path='/CSS' component={Css}/>
          </Switch>
            </div>
            </Router>
        )
    }
}

export default Sidebar

