import React, {useState,useEffect} from 'react'

export default function hookmouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const logMousePosition = (e) => {
        console.log("setting x and y")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=> {
        console.log("mouse event")
        window.addEventListener("mousemove", logMousePosition)
        return ()=> {
            console.log("component unmounting code")
            window.removeEventListener("mousemove", logMousePosition)
            //useEffect returns a fuction which will execute on unmount of the component i.e. componentWillUnmout
        }    
    },[])//by passing empty object as 2nd arg. in useEffect ,useEffect is called only once in the initial rendering i.e. componentDidMount
    return (

        <div>
           <h1>X- {x}  Y- {y}</h1>
        </div>
    )
}
