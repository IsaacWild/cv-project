import React, { Component } from "react";

class EmploymentHistory extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
            <form>
                    <fieldset>
                        <legend>Employment History</legend>
                            <label htmlFor='currentJob'>Curret Job</label>
                            <input type='checkbox' id='currentJob' name='currentJob'></input>
                            <label htmlFor='title'>*Job Title:</label>
                            <input type='text' id='title' required placeholder='Job title'></input>
                            <label htmlFor='company'>*Company Name:</label>
                            <input type='text' id='company' required placeholder='Company name'></input>
                            <label htmlFor='startDate'>*Start Date:</label>
                            <input type='date' id='startDate' required></input>
                            <label htmlFor='endDate'>*End Date:</label>
                            <input type='date' id='endDate' required></input>
                            <label htmlFor='jobDescription'>*Job Description:</label>
                            <textarea rows='3' id='jobDescription' required placeholder='A brief description of your job, duties and anything related to the position your applying for.'></textarea>
                            <label htmlFor='jobSkills'>*Skills learnt from job:</label>
                            <textarea rows='5' id='jobSkill' required placeholder='Write a few lines about the relevant skills you learnt or improved while at this job.'></textarea>
                            <button type="submit" onClick={this.props.onButtonClicked}>Add Employment History</button>
                    </fieldset>
                </form>
        )
    }
}

export default EmploymentHistory