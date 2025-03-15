import { Route, Routes } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import ChatPage from "./components/ChatPage";
import Home from "./components/Home";
import Send from "./components/Send";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </>
  );
}

export default App;
