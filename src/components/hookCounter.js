import React, {useState} from 'react'

 function hookCounter() {
    const [count,setCount] = useState(0) 
    return (
        
        <div>
            <button onClick={()=>setCount(count+1)}>Value = {count}</button>
        </div>
    )
}
export default hookCounter