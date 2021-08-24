import React, {Component} from 'react';

class Benefit extends Component {
    render(){
        return(
            <div className="benefit-container" >
                <img alt="userpic" src={this.props.image} />
                <p className="benefit-text" >{this.props.text}</p>
            </div>
        );
    }
}

export default Benefit;
