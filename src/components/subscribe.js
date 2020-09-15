import React, {Component} from "react";

class subscribe extends Component {
    constructor(){
        super()
        this.state= {
            message: "Click to subscribe"
        }
    }
    changeMessage(){
        this.setState(
            {
                message: "Thanxx for subscribing"
            }
        )
    }
    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
            < button onClick= { () => this.changeMessage() } > Subscribe </button>
            </div>
        )
    }
}

export default subscribe