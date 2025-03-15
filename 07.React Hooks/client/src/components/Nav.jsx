import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/chat">Messages</Link>,
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/send">Send</Link>,
    key: "send",
    icon: <MailOutlined />,
  },
];
const Nav = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <h1>React Hooks</h1>
    </>
  );
};
export default Nav;
