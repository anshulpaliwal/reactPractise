//used in listRenderPerson.js
import React from 'react'

function personRender({person}) {
    
    return (
        <div>
            <h1>I am {person.name} and likes {person.superhero}</h1>
        </div>
    )
}

export default personRender
