import React, {Component} from 'react';
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import ReactModal from 'react-modal';
import Dashboard from './Dashboard';
import Home from './Home';
import Home2 from './Home2';
import './App.css'

ReactModal.setAppElement('#root');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <nav>
          <div className='logo'><img src="/Logo.png" alt="logo"/></div>
          <ul>
          <li><Link to="/">why we go</Link></li>
          <li><Link to="/">the planets</Link></li>
          <li><Link to="/">deals and packages</Link></li>
          <li><a>subscribe</a></li>
          </ul>
        </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/subscribe">
              <Home2 />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
