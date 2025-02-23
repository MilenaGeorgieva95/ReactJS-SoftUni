import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Timer from "./components/Timer";

function App() {
  const [show, setShow] = useState(false);
  const showBtnHandler = () => {
    setShow((curShow) => !curShow);
  };

  return (
    <>
      <h1>Use Effect Hook</h1>
      <button onClick={showBtnHandler}>{show ? "Hide" : "Show"} Input</button>
      {show && <Input />}
      <hr />
      <Timer />
    </>
  );
}

export default App;
