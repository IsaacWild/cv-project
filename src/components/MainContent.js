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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onClickBtn() {
        console.log('Button has been clicked!');
    }

    handleSubmit = event => {
        event.preventDefault(event);
        console.log('Form submitted');
    }

    render() {
        return (
            <div className='MainContainer'>
                <p className='pageInfo'>Feilds below marked with a * are required</p>
                <div className='formHolder'>
                    <PersonalInfo onButtonClicked={this.onClickBtn} handleSubmit={this.handleSubmit} />
                    <PersonalProfile onButtonClicked={this.onClickBtn} handleSubmit={this.handleSubmit} />
                    <EmploymentHistory onButtonClicked={this.onClickBtn} handleSubmit={this.handleSubmit} />
                    <Skills onButtonClicked={this.onClickBtn} handleSubmit={this.handleSubmit} />
                    <Education onButtonClicked={this.onClickBtn} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default MainContent