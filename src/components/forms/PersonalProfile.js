import React, { Component } from "react";

class PersonalProfile extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
            <form>
                    <fieldset className='PersonalProfile'>
                        <legend>Personal Profile</legend>
                            <label for='profile'>*Personal Profile:</label>
                            <textarea rows='8' id='profile' required placeholder="Please write a brief about yourself, think about who you are, what you're doing currently and looking to do in the future, and personalise it to the job you're applying for!"></textarea>
                            <button>Add Profile</button>
                    </fieldset>
                </form>
        )
    }
}

export default PersonalProfile