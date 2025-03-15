import { Spin } from "antd";
import useFetch from "../hooks/useFetch";
import Chat from "./Chat";

const url = "http://localhost:3030/jsonstore/messages";

export default function ChatPage() {
  const [pending, messages] = useFetch(url, []);
  console.log(messages);
  return <Chat messages={messages} pending={pending} />;
}

// pending ? <Spin /> :
