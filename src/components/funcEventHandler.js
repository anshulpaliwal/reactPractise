import React from 'react'

function funcHandler() {
    function clickHandler(){
        console.log("yes you clicked me")
    }
    return (
        <div>
            <button onClick= {clickHandler}>click me</button>
        </div>
    )
}



export default funcHandler
