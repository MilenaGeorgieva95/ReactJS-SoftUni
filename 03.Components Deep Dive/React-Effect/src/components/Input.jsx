import { useEffect, useState } from "react";

export default function Input() {
  const [state, setState] = useState(true);
  const [text, setText] = useState("");
  //? Basic useEffect
  //* useEffect(() => console.log("Each render"));

  //? Second argument - dependency list
  useEffect(() => {
    console.log(`text change ${text}`);
    //Clean up function
    return () => console.log("before new change, when discarding old text");
  }, [text]);

  useEffect(() => {
    console.log(`state change ${state}`);
  }, [state]);

  //?If dependency list is emty array, we are not listening for anything and is one time on mount to DOM
  useEffect(() => {
    console.log("Mounting");
    //Clean up function
    return () => {
      console.log("On unmount");
    };
  }, []);

  const btnClickHandler = (params) => {
    console.log("Button clicked");

    //? setState(!state); Bad practise
    //? Instead use function when working with derivative state due to race conditions
    setState((currentState) => !currentState);
  };

  const inputChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h3>Input Component</h3>
      <div>
        <input type="text" onChange={inputChangeHandler} />
      </div>
      <button onClick={btnClickHandler}>Update</button>
    </>
  );
}
