import React, { Component } from 'react';
import Signup from './Signup';

class Home2 extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }


    render() {
        return (
            <div>
                <Signup isOpenModal={this.state.modalIsOpen} onClose={this.closeModal} />

            </div>

        );

    }
}


export default Home2
