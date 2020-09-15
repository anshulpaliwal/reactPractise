import React, { Component } from 'react'

class eventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Do not click the button"
        }
        this.eventHandler= this.eventHandler.bind(this)
    }
    eventHandler(){
        this.setState(() => (
            {
                message: "warning!!"
            }
        ))
    }
    
    render() {
        
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick= {this.eventHandler}>warning</button>
            </div>
        )
    }
}

export default eventBind