import { useState } from "react";

function Count(){
    var king="vasanth"
    var [Num,SetCounter]=useState(0)
    return(
        <>
        <h1>{Num}</h1>
        <button onClick={()=>SetCounter(Num+1)}>+</button>
        <button onClick={()=>SetCounter(Num-1)}>-</button>
        <h3>{king}</h3>
        </>
    )
}
export default Count;