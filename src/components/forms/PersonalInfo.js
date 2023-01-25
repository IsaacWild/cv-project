import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor() {
        super()
    }

    /* Javascript functions can be written here */

    render() {
        return (
                <form>
                <fieldset className="PersonalInfo">
                    <legend>Personal Info</legend>
                    <label htmlFor="name">*Name:</label>
                    <input
                    type="text"
                    id="name"
                    required
                    placeholder="First and last name"
                    ></input>
                    <label htmlFor="email">*Email:</label>
                    <input
                    type="text"
                    id="email"
                    required
                    placeholder="Your email address"
                    ></input>
                    <label htmlFor="link">Weblink:</label>
                    <input
                    type="text"
                    id="link"
                    placeholder="If you have a portfolio to show off"
                    ></input>
                    <button type="submit" onClick={this.props.onButtonClicked}>Add Personal Info</button>
                </fieldset>
                </form>
        )
    }
}

export default PersonalInfo