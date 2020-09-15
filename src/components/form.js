import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email_id: "",
            topic: ""
        }
    }
    nameChangeHandler = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }
    email_idChangeHandler = (event) => {
        this.setState(
            {
                email_id: event.target.value
            }
        )
    }
    topicChangeHandler = (event) => {
        this.setState(
            {
                topic: event.target.value
            }
        )
    }
    submitHandler= (event) => {
        alert(
            `
            Your name- ${this.state.name}
            Your Email- ${this.state.email_id}
            Your Subject- ${this.state.topic}`
        )
        event.preventDefault() //uses so that the page does'nt reload on click ok in alert message
    }
    render() {
        return (
            <div>
                <form onSubmit= {this.submitHandler}>
                    <div>
                        <label>Name</label>
                        <input value={this.state.name} onChange={this.nameChangeHandler}></input>
                    </div>
                    <label>Email ID</label>
                    <input value={this.state.email_id} onChange={this.email_idChangeHandler}></input>
                    <div>
                        <label>Topic </label>
                        <select value={this.state.topic} onChange= {this.topicChangeHandler} >
                            <option>Maths</option>
                            <option>Physics</option>
                            <option>Chemistry</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default form
