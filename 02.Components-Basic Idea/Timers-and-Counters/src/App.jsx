import "./App.css";
import BrokenTimer from "./components/BrokenTimer";
import Counter from "./components/Counter";
import Greeting from "./components/greeting/Greeting";
import KillCounter from "./components/KillCounter";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginUser = () => {
    if (isLoggedIn === true) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <button onClick={loginUser}>Log in/Log out</button>
      <Greeting name="John" isLoggedIn={isLoggedIn} />
      <h1>Timers and Counters</h1>
      <BrokenTimer />
      {/* <Timer /> */}
      <Counter />
      <KillCounter />
    </>
  );
}

export default App;
