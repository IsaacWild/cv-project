import React, { Component } from "react";

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
                            <label for='place'>*University/college/school:</label>
                            <input type='text' id='place' required></input>
                            <label for='qualification'>*Qualification(s):</label>
                            <input type='text' id='qualification' required placeholder='Degree, BTEC, A-level, GCSE'></input>
                            <label for='subject'>*Course/subject's:</label>
                            <input type='text' id='subject' required placeholder='Art, Math, IT, Physical Education'></input>
                            <label for='grades'>*Grades:</label>
                            <input type='text' id='grades' required placeholder='2.0, A-C, Pass, 1-5'></input>
                            <label for='completed'>*Date of completion:</label>
                            <input type='date' id='completed'></input>
                            <label for='eduDescription'>Description</label>
                            <input type='text' id='eduDescription' placeholder='Optional description'></input>
                            <button>Add Education</button>
                    </fieldset>
                </form>
        )
    }
}

export default Education