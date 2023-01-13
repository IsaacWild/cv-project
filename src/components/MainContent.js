import './MainContent.css';
import React, { Component } from "react";

class MainContent extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
            <div className="MainContainer">
                This is where the form will go to enter the info
                <form>
                    <fieldset>
                        <legend>Personal Info</legend>
                    </fieldset>
                    <fieldset>
                        <legend>Summary</legend>
                    </fieldset>
                    <fieldset>
                        <legend>Work Experience</legend>
                    </fieldset>
                    <fieldset>
                        <legend>Skills</legend>
                    </fieldset>
                    <fieldset>
                        <legend>Education</legend>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default MainContent