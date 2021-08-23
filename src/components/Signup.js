import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';
import { fsDb } from "../services/firebase"
import { getCurrentUser } from '../helpers/auth';

import { Typography } from 'antd';
const { Text } = Typography;

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      firstName: '',
      lastName: '',
      email: '',
    }
  };


  renderFirstName = (event) => {
    this.setState({firstName: event.target.value});
  }

  renderLastName = (event) => {
    this.setState({lastName: event.target.value});
  }

  renderEmail = (event) => {
    this.setState({email: event.target.value});
  }
  

  render(){
    return(
      <div>
      <h1>Sign up for our newsletter and 20% off</h1>
      <p>to use in the Argonauts shop</p>
      <p>including access to the <span>Cosmos Club</span></p>

      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="first name" onChange={this.renderFirstName} />
        </div>
        <div>
          <input type="text" placeholder ="last name" onChange={this.renderLastName} />
        </div>
        <div>
          <input placeholder="Email" name="email" type="email" onChange={this.renderEmail} />
        </div>
        <div>
          {this.state.error ? <Text style={{ display: 'block' }} type="danger">{this.state.error}</Text> : null}
          <button type="submit">Sign up</button>
        </div>
      </form>
      </div>
    )
  }
}

export default Signup
