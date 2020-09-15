import React, { Component } from 'react'

class classEventHandler extends Component {
    clickHandler() {
        console.log("subscribing")
    }
    render() {
        return (
            <div>
                <button onClick= {this.clickHandler}>subscribe</button>
            </div>
        )
    }
}

export default classEventHandler
