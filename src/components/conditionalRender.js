import React, { Component } from 'react'

class conditionalRender extends Component {
    constructor(){
        super()
        this.state= {
            value: false
        }        
    }
    
    render() {
        var message;
    if(this.state.value) message="new message is rendered";
    else message= "old message";
        return (
            <div>
                {message}
            </div>
        )
    }
}


export default conditionalRender