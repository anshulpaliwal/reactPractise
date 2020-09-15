import React, {useState} from 'react'

export default function hookCounter2() {
    const [count,setCount] = useState(0)
    return (

        <div>
            <button onClick={()=>setCount(prevCount => prevCount+1)}>increment</button>
            <button onClick={()=> setCount(prevCount => prevCount-1)}>decrement</button>
            <button onClick={()=> setCount(0)}>reset</button>
            <button onClick={()=>setCount(prevCount=> prevCount+5)}>increment5</button>
            <h1>{count}</h1>
        </div>
    )
}
