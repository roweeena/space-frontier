import React, {Component} from 'react';
import { fsDb } from "../services/firebase"

import Benefit from './Benefit';

class SignupBody extends Component {
    constructor() {
        super();
        this.state = {
          error: null,
          firstName: '',
          lastName: '',
          email: '',
          subscription: 'Daily',
        }
      };
    
      handleSubmit = async(event) => {
        event.preventDefault();
        this.setState({ error: '' });
        
        try {
          const { firstName, lastName, email, subscription } = this.state;
          await fsDb.collection("users").doc().set({ firstName: firstName, lastName: lastName, email: email, subscription: subscription })
          this.props.showThankyou();

        } catch (error) {
          this.setState({ error: error.message });
        }
      }
    
      handleModal = () => {
        this.setState({modalIsOpen: true})
      }
    
      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      onValChange = (event) => {
        this.setState({subscription: event.target.value})
      }

  render(){
    return(
        <div>
        <h1 className="signup-title" >Ready to be an Argonaut?</h1>
        <p className="signup-subtitle" >Take your first step. Be inspired and subscribe below.</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              id="first-name" 
              type="text" 
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input 
              id="last-name" 
              type="text" 
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input 
              id="email" 
              type="text" 
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <p className="subscription-title">Subscription type:</p>
            <div className="signup-subscription" >
              <label>
                <div>
                  Daily
                </div>
                <input
                  type="radio"
                  value="Daily"
                  checked={this.state.subscription === "Daily"}
                  onChange={this.onValChange}/>
              </label>

              <label>
                <div>
                  Weekly Digest
                </div>
                <input
                  type="radio"
                  value="Weekly Digest"
                  checked={this.state.subscription === "Weekly Digest"}
                  onChange={this.onValChange}/>
              </label>
            </div>
          </div>
          <div>
          </div>
        
          <p className="benefit-paragraph" >The benefits start at sign-up.</p>
          <div>
            <Benefit 
              text="20% off to use in the Argonauts Shop, including free delivery." 
              image="../images/vector.png" 
            />
            <Benefit 
              text="As a Cosmos Club member, gain access to our VIP Rooms and a free champagne on arrival." 
              image="../images/champagne.png" 
            />
            <Benefit 
              text="Latest Space news and hottest off-planet travel destinations for 2021!" 
              image="../images/saturn.png" 
            />
            <Benefit 
              text="Special offers to thank our Argonaughts and to celebrate special moments, like birthdays!" 
              image="../images/cake.png" 
            />
          </div>
          <button className="liftoff-button" type="submit" >
            Lift off
          </button>
        </form>
        <p className="signup-policy-statement" >By clicking this button, you agree to our <strong>Terms of Service</strong> and <strong>Privacy Policy.</strong> </p>
        <p className="signup-spam-statement" >We promise not to spam you.</p>
      </div>
    )

    }
  }


export default SignupBody;
