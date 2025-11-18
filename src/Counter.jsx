function Counter(){
    var num=0;
    var Incr=()=>{
        num++;
        console.log(num);
    }
    var Decr=()=>{
        num--;
        console.log(num);
    }
    return(
        <>
        <h1>{num}</h1>
        <button onClick={Incr}>+</button>
        <button onClick={Decr}>-</button>
        </>
    )
}
export default Counter;