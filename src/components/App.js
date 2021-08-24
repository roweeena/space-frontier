import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import Signup from './Signup';

import './App.css'

class App  extends Component {

  constructor(props){
      super(props);
      this.state={
        modalIsOpen: false,
      };
      this._handleClose = this._handleClose.bind(this)
      this._handleOpen = this._handleOpen.bind(this)
    }
    _handleOpen = () => {
     this.setState((prevState) => {
        return{
           modalIsOpen: !prevState.modalIsOpen
        }
     })
  }

  _handleClose(){
    this.setState({isHide: true, modalIsOpen: false})
  }
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
      <li><a onClick={this._handleOpen} >subscribe</a><Signup isModalOpen={this.state.modalIsOpen} closeModal={this._handleClose} /></li>
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
