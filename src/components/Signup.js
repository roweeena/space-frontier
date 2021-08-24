import React, {Component} from 'react';

import SignupBody from './SignupBody';
import ReactModal from 'react-modal';
import ThankyouBody from './ThankyouBody';


class Signup extends Component {
  constructor() {
    super();
    this.state = {
      showThankyou: false
    }
  }
  
  handleClose = () => {
    this.setState({showThankyou: true})
  }

  renderBody =() => {
    if (this.state.showThankyou) {
      return <ThankyouBody onClose={this.props.onClose} />
    } else {
      return <SignupBody showThankyou={this.handleClose} />
    }
  }

  render(){
    return(
      <div>
      <ReactModal
        isOpen={this.props.isOpenModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="signup-container" >
          <div className="signup-header" >
            <div className="modal-close-button" >
              <button onClick={this.props.onClose}>
                <img src="../images/Group.png" alt="X" />
              </button>
            </div>
            <div className="modal-logo" >
              <img src="../images/logoargonautstext.svg" alt="logo" />
            </div>
          </div>
          <div className={`signup-body ${this.state.showThankyou ? "thankyou-body" : ""}`}>
            {this.renderBody()}
          </div>
        </div>
      </ReactModal>
      </div>
    )
  }
}

export default Signup;
