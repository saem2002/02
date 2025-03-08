'use client'
import {useState} from "react"

export default function State(){
    const [state,setState] = useState(0);
     
    return (
        <>
        <h1>{state} </h1>
        <button onClick={()=>setState(state+1)} >Click me</button>
        </>
    ) 
}