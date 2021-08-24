import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Dashboard from './Dashboard';
import Home2 from './Home2';
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
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
