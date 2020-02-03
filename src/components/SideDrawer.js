import React, { Component } from 'react'
import '../App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SMP7 from './SMP7'


export class SideDrawer extends Component {
    render() {
        return (
            <Router>
            
            <div className="side">
            <nav className="Side_drawer">
            <ul>
            <li><a href="/">home</a>
            <ul>
            <li><a><Link to={'/SMP7'} >SMP 7</Link></a></li>
            <li>contact</li>
            </ul>
            </li>
            </ul>
            </nav>
            <Switch>
              <Route exact path='/SMP7' component={SMP7} />
              </Switch>
              </div>
            </Router>
            
        )
    }
}

export default SideDrawer
