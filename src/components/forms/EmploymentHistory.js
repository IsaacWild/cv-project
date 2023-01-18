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
                            <label for='currentJob'>Curret Job</label>
                            <input type='checkbox' id='currentJob' name='currentJob'></input>
                            <label for='title'>*Job Title:</label>
                            <input type='text' id='title' required placeholder='Job title'></input>
                            <label for='company'>*Company Name:</label>
                            <input type='text' id='company' required placeholder='Company name'></input>
                            <label for='startDate'>*Start Date:</label>
                            <input type='date' id='startDate' required></input>
                            <label for='endDate'>*End Date:</label>
                            <input type='date' id='endDate' required></input>
                            <label for='jobDescription'>*Job Description:</label>
                            <textarea rows='3' id='jobDescription' required placeholder='A brief description of your job, duties and anything related to the position your applying for.'></textarea>
                            <label for='jobSkills'>*Skills learnt from job:</label>
                            <textarea rows='5' id='jobSkill' required placeholder='Write a few lines about the relevant skills you learnt or improved while at this job.'></textarea>
                            <button>Add Employment History</button>
                    </fieldset>
                </form>
        )
    }
}

export default EmploymentHistory