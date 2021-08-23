import React, {Component} from 'react';

class Signup extends Component {
  render(){
    return(
      <div>
      <h1>Sign up for our newsletter and 20% off</h1>
      <p>to use in the Argonauts shop</p>
      <p>including access to the <span>Cosmos Club</span></p>

      <form>
      <input type="text" placeholder="first name"/>
      <input type="text" placeholder ="last name"/>
      <input type="text" placeholder = "email"/>
      <button>Subscribe</button>
      </form>
      </div>
    )
  }
}

export default Signup
