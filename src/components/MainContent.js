import './MainContent.css';
import React, { Component } from "react";

class MainContent extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
            <div className='MainContainer'>
                <p>Feilds below marked with a * are required</p>
                <form>
                    <fieldset className='PersonalInfo'>
                        <legend>Personal Info</legend>
                            <label for='name'>*Name:</label>
                            <input type='text' id='name' required placeholder='First and last name'></input>
                            <label for='email'>*Email:</label>
                            <input type='text' id='email' required placeholder='Your email address'></input>
                            <label for='link'>Weblink:</label>
                            <input type='text' id='link' required placeholder='If you have a portfolio to show off'></input>
                    </fieldset>
                    <fieldset className='PersonalProfile'>
                        <legend>*Personal Profile</legend>
                            <label for='profile'>Personal Profile:</label>
                            <textarea rows='8' id='profile' required placeholder="Please write a brief about yourself, think about who you are, what you're doing currently and looking to do in the future, and personalise it to the job you're applying for!"></textarea>
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