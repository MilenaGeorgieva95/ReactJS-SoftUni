## Context

- contexts/UserContext.js
  import { createContext } from "react";
  export const UserContext = createContext({
  user: "",
  userLoginHandler() {},
  });

- App.jsx
  import { UserContext } from "./contexts/UserContext";
  <UserContext.Provider value={{ userLoginHandler, user }}>

- Send.jsx
  import { useContext } from "react";
  import { UserContext } from "../contexts/UserContext";
  const { user } = useContext(UserContext);

- Login.jsx
  import { useContext } from "react";
  import { UserContext } from "../contexts/UserContext";
  const { userLoginHandler } = useContext(UserContext);

## use API - same as useContext but can be called conditionally

- Send.jsx
  import { use } from "react";
  import { UserContext } from "../contexts/UserContext";

if(true){
const {user} = use(UserContext)
}
