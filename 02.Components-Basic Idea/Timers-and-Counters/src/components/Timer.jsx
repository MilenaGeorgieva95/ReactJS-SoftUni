import { useState } from "react";

export default function Timer(){
    const startingValue = 0;
    //time =>current state value
    //setTime function to change the time
    const [time, setTime] = useState(startingValue);

    // setTimeout(()=>{
    //     console.log('timer');
        setTime(time+1)
    // }, 1000);

    return(
        <>
           <h2>Timer</h2>
           <div>{time}</div>
           <hr />
        </>
    )
}