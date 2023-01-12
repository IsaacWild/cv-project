import './Header.css';
import React, { Component } from "react";

class Header extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
            <div className='HeaderContainer'>
                <div className='Title'>
                CV Maker
                </div>
                <div className='SubTitle'>
                    This tool will guide you on making a basic CV template and good luck job hunting!
                </div>
            </div>
        )
    }
}

export default Header