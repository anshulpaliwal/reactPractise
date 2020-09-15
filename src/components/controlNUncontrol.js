//here we learn about control and uncontrol components
import React, { Component } from 'react'

class controlNUncontrol extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Intial message"
        }
    }
    
    unControl = ()=> {
        console.log(this._name.value)
    }
    control = (event)=> {
        this.setState(
            {
                message: event.target.value
            }
        )
    }
    render() {
        return (
            <div>
                <input type="text" ref={(input)=> {
                    return this._name = input
                }} defaultValue="Type something"/>
                <br/>
                <button onClick={this.unControl}>uncontrol</button>
                <br/>
                <input type= "text" onChange={this.control}></input>
                <br/>
                {this.state.message}
            </div>
        )
    }
}
export default controlNUncontrol