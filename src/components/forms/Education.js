import React, { Component } from "react";
import "./formStyle.css"

class Education extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
            <form>
                    <fieldset>
                        <legend>Education</legend>
                            <label htmlFor='place'>*University/college/school:</label>
                            <input type='text' id='place' required></input>
                            <label htmlFor='qualification'>*Qualification(s):</label>
                            <input type='text' id='qualification' required placeholder='Degree, BTEC, A-level, GCSE'></input>
                            <label htmlFor='subject'>*Course/subject's:</label>
                            <input type='text' id='subject' required placeholder='Art, Math, IT, Physical Education'></input>
                            <label htmlFor='grades'>*Grades:</label>
                            <input type='text' id='grades' required placeholder='2.0, A-C, Pass, 1-5'></input>
                            <label htmlFor='completed'>*Date of completion:</label>
                            <input type='date' id='completed'></input>
                            <label htmlFor='eduDescription'>Description</label>
                            <input type='text' id='eduDescription' placeholder='Optional description'></input>
                            <button type="submit" onClick={this.props.onButtonClicked}>Add Education</button>
                    </fieldset>
                </form>
        )
    }
}

export default Education