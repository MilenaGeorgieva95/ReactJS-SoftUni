import { Route, Routes } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import ChatPage from "./components/ChatPage";
import Home from "./components/Home";
import Send from "./components/Send";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const userLoginHandler = (username) => {
    setUser(username);
  };
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/send" element={<Send user={user} />} />
        <Route path="/login" element={<Login userLogin={userLoginHandler} />} />
      </Routes>
    </>
  );
}

export default App;
