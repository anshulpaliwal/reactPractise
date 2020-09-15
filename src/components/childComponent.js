import React from 'react'

function childComponent(props) {
    return (
        <div>
            <h1>click button to invoke method of parent from child</h1>
            <button onClick= {props.greetHandler}>child button</button>
        </div>
    )
}

export default childComponent