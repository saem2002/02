
'use client'
import ExampleServer from "./ExampleServer"
const ExampleClient = () =>{
    console.log("I am client component")
    return(
        <div>
            <p>This is client component</p>
            <ExampleServer />
        </div>
    )

}

export default ExampleClient