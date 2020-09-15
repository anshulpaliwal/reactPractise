import React, { Component } from 'react'
 class increment1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              value: 0
         }
     }
     
     increaseValue(){
         this.setState(
             {
                 value: this.state.value + 1
             }
         )
     }
    render() {
        return (
            <div>
                <h1>click to increase value</h1>
                <h1>value = {this.state.value}</h1>
                <button onClick= {() => this.increaseValue()}>increase</button> 
            </div>
        )
    }
}


export default increment1