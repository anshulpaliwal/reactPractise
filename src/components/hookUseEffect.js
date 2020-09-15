import React, {useState, useEffect} from 'react'

export default function hookUseEffect() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("")
    useEffect(()=> {
        console.log('message comes after every update');
        document.title = `you clicked ${count} times`    
    },[count])//second arg in useEffect is passed for conditional rendering 
    return (
        <div>
            <input type='text'value= {name} onChange={(e)=> setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}> {count}</button>
        </div>
    )
}
