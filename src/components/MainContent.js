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
                        <legend>Personal Profile</legend>
                            <label for='profile'>*Personal Profile:</label>
                            <textarea rows='8' id='profile' required placeholder="Please write a brief about yourself, think about who you are, what you're doing currently and looking to do in the future, and personalise it to the job you're applying for!"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>Employment History</legend>
                            <label for='currentJob'>*Curret Job</label>
                            <input type='checkbox' id='currentJob' name='currentJob'></input>
                            <label for='title'>*Job Title:</label>
                            <input type='text' id='title' placeholder='Job title'></input>
                            <label for='company'>*Company Name:</label>
                            <input type='text' id='company' placeholder='Company name'></input>
                            <label for='startDate'>*Start Date:</label>
                            <input type='date' id='startDate'></input>
                            <label for='endDate'>*End Date:</label>
                            <input type='date' id='endDate'></input>
                            <label for='jobDescription'>*Job Description:</label>
                            <textarea rows='3' id='jobDescription' placeholder='A brief description of your job, duties and anything related to the position your applying for.'></textarea>
                            <label for='jobSkills'>*Skills learnt from job:</label>
                            <textarea rows='5' id='jobSkill' placeholder='Write a few lines about the relevant skills you learnt or improved while at this job.'></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>Skills</legend>
                            <label for='skills'>*Key Skills:</label>
                            <textarea rows='5' id='skills' placeholder='Give some skills with examples that are relevant to the job application that may not be from previous jobs.'></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>Education</legend>
                            <label for='place'>*University/college/school:</label>
                            <input type='text' id='place'></input>
                            <label for='qualification'>*Qualification(s):</label>
                            <input type='text' id='qualification' placeholder='Degree, BTEC, A-level, GCSE'></input>
                            <label for='subject'>*Course/subject's:</label>
                            <input type='text' id='subject' placeholder='Art, Math, IT, Physical Education'></input>
                            <label for='grades'>*Grades:</label>
                            <input type='text' id='grades' placeholder='2.0, A-C, Pass, 1-5'></input>
                            <label for='completed'>*Date of completion:</label>
                            <input type='date' id='completed'></input>
                            <label for='eduDescription'>Description</label>
                            <input type='text' id='eduDescription' placeholder='Optional description'></input>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default MainContent