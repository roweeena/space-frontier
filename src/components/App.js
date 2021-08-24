import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import Signup from './Signup';

import './App.css'

class App  extends Component {
  render(){
  return (
    <div>
    <Router>
    <nav>
      <div className='logo'><img src="/Logo.png" alt="logo"/></div>
      <ul>
      <li><Link to="/">why we go</Link></li>
      <li><Link to="/">the planets</Link></li>
      <li><Link to="/">deals and packages</Link></li>
      <li><Link to="/subscribe">sign up</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path='/'>
        <Home />
      </Route >
      <Route path='/subscribe'>
        <Signup />
      </Route >
     </Switch>
    </Router>


    </div>

  );
  }
}

export default App;
