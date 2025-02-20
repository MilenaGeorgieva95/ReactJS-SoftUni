import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  //boolean operators
  const isMax = count >= 4;

  const increaseCountClick = (event) => {
    setCount(count + 1);
  };

  if (count > 6) {
    return (
      <>
        <h2>Godlike!</h2>
      </>
    );
  }

  return (
    <>
      <h2>Counter</h2>
      <div>{count}</div>
      {count % 2 === 0 ? <span>Even Number</span> : <span>Odd Number</span>}
      <button onClick={increaseCountClick}>+</button>
      {isMax && <p>Well Done!</p>}
      {isMax || <p>Watch out!</p>}
      <hr />
    </>
  );
}
