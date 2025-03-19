import { Route, Routes } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import ChatPage from "./components/ChatPage";
import Home from "./components/Home";
import Send from "./components/Send";
import Login from "./components/Login";
import { useState } from "react";

import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState("");
  const userLoginHandler = (username) => {
    setUser(username);
  };
  return (
    <UserContext.Provider value={{ userLoginHandler, user }}>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/send" element={<Send />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
