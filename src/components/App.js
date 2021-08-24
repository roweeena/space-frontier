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
        menuOpen:false
      };
      this._handleClose = this._handleClose.bind(this)
      this._handleOpen = this._handleOpen.bind(this)
      this.toggleMenu = this.toggleMenu.bind(this)
    }
    _handleOpen = () => {
     this.setState((prevState) => {
        return{
           modalIsOpen: !prevState.modalIsOpen
        }
     })
  }

  toggleMenu = () => {

    this.setState({
      menuOpen: !this.state.menuOpen
    })
}
  _handleClose(){
    this.setState({isHide: true, modalIsOpen: false})
  }
  render(){
    const show = (this.state.menuOpen) ? "show" : "" ;
  return (
    <div>
    <Router>
    <header className="header">
      <nav className="navbar">
      <div className='logo'><img src="/Logo.png" alt="logo"/></div>
      <ul className="nav-menu">
      <li className="nav-item"><a className="nav-link">why we go</a></li>
      <li className="nav-item"><a className="nav-link">the planets</a></li>
      <li className="nav-item"><a className="nav-link">deals and packages</a></li>
      <li className="nav-item"><a onClick={this._handleOpen} className="nav-link">subscribe</a><Signup isModalOpen={this.state.modalIsOpen} closeModal={this._handleClose} /></li>
      </ul>

      <div className="hamburger" onClick={this.toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

    </nav>
    </header>
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
