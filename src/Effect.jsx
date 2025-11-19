import { useEffect, useState } from "react";

export default function Effect(){
    useEffect(()=>{
        console.log("hello")
    },[])
    var [num,setCount]=useState(0)
    return(
        <>
        <h1>{num}</h1>
        <button onClick={()=>setCount(num+1)}>+</button>
        {num%2==0?<h3>it is even</h3>:<h3>it is odd</h3>}
        </>
    )
} 