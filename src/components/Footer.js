import './Footer.css';
import React, { Component } from "react";

class Footer extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
            <div className='FooterContainer'>
                <a>Web page created by </a>
                <a target="_blank" href="https://github.com/IsaacWild">Isaac</a> 
            </div>
        )
    }
}

export default Footer