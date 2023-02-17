import React, { Component } from "react";
import "./formStyle.css"

class Skills extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
            <form onSubmitCapture={this.props.handleSubmit}>
                    <fieldset>
                        <legend>Skills</legend>
                            <label htmlFor='skills'>*Key Skills:</label>
                            <textarea rows='5' id='skills' required placeholder='Give some skills with examples that are relevant to the job application that may not be from previous jobs.'></textarea>
                            <button type="submit" onClick={this.props.onButtonClicked}>Add Skills</button>
                    </fieldset>
                </form>
        )
    }
}

export default Skills