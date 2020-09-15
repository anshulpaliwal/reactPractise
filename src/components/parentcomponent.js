import React, { Component } from 'react'
import Child from "./childComponent"
export default class parentcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "parent" 
        }
        this.greet = this.greet.bind(this)
    }
    greet(){
        alert(`hello I am ${this.state.parentName}`)
    }
    
    render() {
        return (
            <div>
                <Child greetHandler= {this.greet} />
            </div>
        )
    }
}
