//in this we will set state on the basis of previous state


import React, { Component } from 'react'

 class increment5 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              value: 0
         }
     }

     changeStateBy5(){
         this.setState((prevState)=> (
             {value : prevState.value +5 }
         ))
     }
    render() {
        return (
            <div>
                <h1>cllick to increment by 5</h1>
                <h1>value = {this.state.value}</h1>
                <button onClick = {() => (this.changeStateBy5())}>increment</button>
            </div>
        )
    }
}

export default increment5