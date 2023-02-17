import React, { Component } from "react";
import "./formStyle.css"

class PersonalProfile extends Component {
    constructor(props) {
        super(props)
    }

    /* Javascript functions can be written here 
    
    
    
    */

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                    <fieldset className='PersonalProfile'>
                        <legend>Personal Profile</legend>
                            <label htmlFor='profile'>*Personal Profile:</label>
                            <textarea rows='8' id='profile' required placeholder="Please write a brief about yourself, think about who you are, what you're doing currently and looking to do in the future, and personalise it to the job you're applying for!"></textarea>
                            <button type="submit" onClick={this.props.onButtonClicked}>Add Profile</button>
                    </fieldset>
                </form>
        )
    }
}

export default PersonalProfile