import './MainContent.css';
import PersonalInfo from './forms/PersonalInfo';
import PersonalProfile from './forms/PersonalProfile';
import EmploymentHistory from './forms/EmploymentHistory';
import Skills from './forms/Skills';
import Education from './forms/Education';

import React, { Component } from "react";

class MainContent extends Component {
    constructor(props) {
        super(props)

        this.onClickBtn = this.onClickBtn.bind(this);
    }

    onClickBtn(e) {
        console.log('Button has been clicked!');
        e.preventDefault();
    }

    render() {
        return (
            <div className='MainContainer'>
                <p className='pageInfo'>Feilds below marked with a * are required</p>
                <PersonalInfo onButtonClicked={this.onClickBtn} />
                <PersonalProfile onButtonClicked={this.onClickBtn} />
                <EmploymentHistory onButtonClicked={this.onClickBtn} />
                <Skills onButtonClicked={this.onClickBtn} />
                <Education onButtonClicked={this.onClickBtn} />
            </div>
        )
    }
}

export default MainContent