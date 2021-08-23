import React, {Component} from 'react';
import { fsDb } from "../services/firebase"
import { getCurrentUser } from '../helpers/auth';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, FormLabel, TextField } from '@material-ui/core';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      firstName: '',
      lastName: '',
      email: '',
      subscription: 'Daily',
      // errors: {
      //   firstName: '',
      //   lastName: '',
      //   email: ''
      // }
    }
  };

  handleSubmit = async(event) => {
    event.preventDefault();
    this.setState({ error: '' });
    // if(!this.validate()) {
    //   // show popup
    // }
    try {
      const { firstName, lastName, email, subscription } = this.state;
      await fsDb.collection("users").doc().set({ firstName: firstName, lastName: lastName, email: email, subscription: subscription })
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  // validate = () => {
  //   //if valid return true else fale
  // }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onValChange = (event) => {
    this.setState({subscription: event.target.value})
  }

  render(){
    return(
      <div>
      <h1>Sign up for our newsletter and 20% off</h1>
      <p>to use in the Argonauts shop</p>
      <p>including access to the <span>Cosmos Club</span></p>
      <form onSubmit={this.handleSubmit}>
        <div>
          <input 
            id="first-name" 
            type="text" 
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input 
            id="last-name" 
            type="text" 
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input 
            id="email" 
            type="text" 
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
        <div>
          Subscription type:
          <label>
            <input
              type="radio"
              value="Daily"
              checked={this.state.subscription === "Daily"}
              onChange={this.onValChange}/>
            <span>Daily</span>
          </label>

          <label>
            <input
              type="radio"
              value="Weekly Digest"
              checked={this.state.subscription === "Weekly Digest"}
              onChange={this.onValChange}/>
            <span>Weekly Digest</span>
          </label>
        </div>
        <div>
        <button>Confirm</button>
        </div>
      </form>
      </div>
    )
  }
}

export default Signup
