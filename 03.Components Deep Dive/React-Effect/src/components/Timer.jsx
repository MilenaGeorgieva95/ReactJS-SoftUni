import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(() => {
    return new Date().getSeconds();
  });
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isManual) {
      timeout = setTimeout(() => {
        setTime((curTime) => curTime + 1);
        setIsManual(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [time, isManual]);

  const addTimeHandler = () => {
    setTime((seconds) => seconds + 10);
    setIsManual(true);
  };
  return (
    <>
      <h3>Timer</h3>
      <div>{time}</div>
      <button onClick={addTimeHandler}>Add Time</button>
    </>
  );
}
