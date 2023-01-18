import React, { Component } from "react";

class Skills extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
            <form>
                    <fieldset>
                        <legend>Skills</legend>
                            <label for='skills'>*Key Skills:</label>
                            <textarea rows='5' id='skills' required placeholder='Give some skills with examples that are relevant to the job application that may not be from previous jobs.'></textarea>
                            <button>Add Skills</button>
                    </fieldset>
                </form>
        )
    }
}

export default Skills