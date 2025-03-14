import "./App.css";
import Chat from "./components/Chat";
import Nav from "./components/Nav";
import useFetch from "./hooks/useFetch";
import { Spin } from "antd";

const url = "http://localhost:3030/jsonstore/messages";

function App() {
  const [pending, messages] = useFetch(url, []);
  console.log(messages);

  return (
    <>
      <Nav />
      <h1>React Hooks</h1>
      {pending ? <Spin /> : <Chat messages={messages} />}
    </>
  );
}

export default App;
