import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Signup from './Signup'

class Banner extends Component{
constructor(props){
    super(props);
    this.state={
      isHide: true,
      modalIsOpen: false,
    };
    this.hideBar = this.hideBar.bind(this)
    this._handleSubscribe = this._handleSubscribe.bind(this)
    this._handleClose = this._handleClose.bind(this)
  }

  hideBar(){
    if (window.scrollY >= 800 && this.state.isHide === true){
      console.log('hey')
      this.setState({isHide:false})
    }
  }

  componentDidMount(){
      window.addEventListener('scroll',this.hideBar);
  }

  componentWillUnmount(){
       window.removeEventListener('scroll',this.hideBar);
  }

  _handleSubscribe(){
    this.setState({modalIsOpen: true});
  }

  _handleClose(){
    this.setState({isHide: true, modalIsOpen: false})
  }

  render(){
    //css position:fixed
      if (this.state.isHide){
        return '';
      }
      return(
        <div className = "btm-bar" >
        <div className="modal-close-button2" > <button onClick={this._handleClose}><img src="../images/Group.png" alt="X" /></button></div>
        <h2>Space, the final frontier</h2>

        <p>Get the latest flight offers, planet deals and travel reviews delivered straight to your inbox</p>

        <p>Be inspired and subscribe below</p>

        <button onClick={this._handleSubscribe} className ="subscribe-button">
          Subscribe
        </button>
           <Signup isOpenModal={this.state.modalIsOpen} onClose={this._handleClose} />
        </div>
      )
    }
}

export default Banner;
