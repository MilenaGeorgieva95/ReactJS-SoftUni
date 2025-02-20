import { useState } from "react"

export default function Counter(){
    const [count, setCount]=useState(0);
    const [isEven, setIsEven]=useState(true);
    const increaseCountClick = (event)=>{
        setCount(count+1);

        if(isEven===true){
            setIsEven(false)
        }else{
            setIsEven(true)
        }
        console.log(isEven);
        
    }

    return(
<>
<h2>Counter</h2>
<div>{count}</div>
<button onClick={increaseCountClick}>+</button>
<hr />
</>
    )
}