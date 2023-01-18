import './MainContent.css';
import PersonalInfo from './forms/PersonalInfo';
import PersonalProfile from './forms/PersonalProfile';
import EmploymentHistory from './forms/EmploymentHistory';
import Skills from './forms/Skills';
import Education from './forms/Education';

import React, { Component } from "react";

class MainContent extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
            <div className='MainContainer'>
                <p className='pageInfo'>Feilds below marked with a * are required</p>
                <PersonalInfo />
                <PersonalProfile />
                <EmploymentHistory />
                <Skills />
                <Education />
            </div>
        )
    }
}

export default MainContent