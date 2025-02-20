export default function BrokenTimer(){

    let timer=0;
    // setInterval(()=>{
    //     timer++;
    //     console.log('timer');
    // }, 1000);

    return(
        <>
           <h2>Broken Timer</h2>
           <div>{timer}</div>
           <hr />
        </>
    )
}

