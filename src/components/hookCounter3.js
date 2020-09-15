import React, { useState } from 'react'

export default function hookCounter3() {
    const [name, setName] = useState({ firstName: "dfgh", lastName: "" })
    return (

        <div>
            <form>
                <input type="string" value={name.firstName} onChange={e => setName({
                    ...name, firstName: e.target.value
                })} />
                <input type="string" value={name.lastName} onChange={e => setName({
                    ...name, lastName: e.target.value
                })} />
                <h1>Your first name is {name.firstName}</h1>
                <h1>Your last name is {name.lastName}</h1>
            </form>
        </div>
    )
}
